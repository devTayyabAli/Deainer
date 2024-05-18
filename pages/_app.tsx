import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  bsc,
  mainnet
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import '../styles/style.css'
import { Box } from '@chakra-ui/react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';
import Layout from "./components/Layout";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    bsc
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Draaaaa',
  projectId: '33cb148b22ee3127d20a432dac2fc41d',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {

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
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider theme={theme}>

          <Box minH="100vh" bg="bg" position="relative">
            <Box
              id="banner"
              position="absolute"
              inset="0"
              backgroundImage="/images/banner.jpeg"
              backgroundSize="cover"
            // opacity="0.3"
            // filter={'blur(10px)'}
            ></Box>
            <Layout>
            <Component {...pageProps} />
            </Layout>
          </Box>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
