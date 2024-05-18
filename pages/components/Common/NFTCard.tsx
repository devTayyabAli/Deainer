import { Box, Button, Divider, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import GradientButton from './GradientButton';
import { useRouter } from 'next/router';
import eth from '../../../public/images/eth.png'


export default function NFTCard({
  id,
  image,
  title,
  minted,
}: {
  id: number;
  image: string;
  title: string;
  minted: number;
}) {
  const router = useRouter();

  return (
    <VStack
      className="nft-card"
      bg="#121212"
      borderRadius="20px"
      cursor="pointer"
      overflow="hidden"
      p="1rem"
      spacing="24px"
      maxW="326px"
      w="100%"
      zIndex="10"
      onClick={() =>  router.push(`/NFT/${id}`)}
    >
      <Box w="100%" h="298px" overflow="hidden" borderRadius="20px">
        <Image src={image} alt="nft" objectFit="cover" objectPosition="center" h="100%"  />
      </Box>
      <VStack spacing="15px" w="100%" align="flex-start">
        <Heading fontStyle="1rem" fontSize="normal" color="white">
          {title}
        </Heading>
        <Divider borderColor="#8e8e8e" />
        <HStack w="100%" justifyContent="space-between">
          <Text color="white" fontWeight="semibold">
            Price:
          </Text>
          <HStack>
            <Text fontSize="1.125rem" color="white" fontWeight="semibold">
              {id === 19 ? '3 ETH' : id > 2 ? '0.8 ETH' : '0.00192872 ETH'}
            </Text>
            <Image src="/images/eth.png" alt="eth" maxW="20px" />
          </HStack>
        </HStack>
        <Divider borderColor="#8e8e8e" />
        <HStack w="100%" justifyContent="space-between">
          {id === 19 ? (
            <Button display="flex" justifyContent="center" colorScheme="whiteAlpha" isDisabled>
              Sold Out
            </Button>
          ) : (
            <GradientButton
              display="flex"
              justifyContent="center"
              isPink={id > 2 ? false : true}
              leftIcon={<Image src="/images/cart.svg" maxW="18px" alt="cart" />}
            >
              {id > 2 ? 'BUY' : 'Mint'}
            </GradientButton>
          )}
          <HStack spacing="0">
            <Text color="white" w="100%" display="inline-block">
              {minted}
            </Text>
            <Text color="#8e8e8e">/</Text>
            <Text color="#8e8e8e">{`2000`}</Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
