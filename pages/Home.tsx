/* eslint-disable */
import { Box, HStack, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import NFTCard from './components/Common/NFTCard';
import { useEffect } from 'react';

const randomNum = [
  803, 1413, 1017, 1999, 743, 834, 1401, 729, 1963, 1521, 1882, 864, 985, 1877, 939, 1538, 1205,
  1762, 2000,
];

export default function Home1() {
  useEffect(() => {
    document.getElementById('banner')?.style.setProperty('background-size', '100%');
  }, []);
  return (
    <VStack w="100%" pt="2rem">
      <HStack
        w="100%"
        h="448px"
        // backgroundImage="/images/banner.jpeg"
        // backgroundSize="cover"
        // backgroundRepeat="no-repeat"
        // backgroundPosition="center"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        {/* <Box w="100%" position="absolute" inset="0" bg="rgba(0, 0, 0, 0.4)"></Box> */}
        <VStack position="relative" zIndex="1" spacing="1rem">
          <Box maxW="120px" borderRadius="full" overflow="hidden" border="2px solid #fff">
            <Image src="/images/19.jpeg" alt="gorilla" objectFit="cover" objectPosition="center" />
          </Box>
          <Heading as="h5" color="white" fontSize="1.5rem" fontWeight="normal">
            Gori Ape NFT Collection
          </Heading>
          <HStack spacing="0.5rem" flexWrap={'wrap'} justifyContent="center">
            <HStack>
              <Text fontSize="1.25rem" color="white" fontWeight="semibold">
                Supply
              </Text>
              <Text fontSize="1.25rem" color="white" fontWeight="semibold">
                2000
              </Text>
            </HStack>
          </HStack>
          <Text textAlign="center" fontSize="0.875rem" maxW="1024px">
            "Gori Ape" is an exclusive NFT project featuring a limited supply of 2000 unique digital
            collectibles. Each NFT in this collection represents a distinct and vibrant artwork,
            meticulously crafted to captivate and inspire. With "Gori Ape," collectors can own a
            piece of digital art that is not only visually stunning but also part of a limited
            edition, making it a valuable addition to any NFT portfolio. Don't miss out on the
            opportunity to own one of these rare and captivating NFTs from the "Gori Ape"
            collection.
          </Text>
        </VStack>
      </HStack>
      <VStack py="3rem" spacing="1.5rem">
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          w="100%"
          spacing="3rem"
          placeItems={{ base: 'center', md: 'flex-start' }}
        >
          {Array.from({ length: 19 }).map((_, index) => (
            <NFTCard
              key={index}
              id={index + 1}
              image={`/images/${index + 1}.jpeg`}
              title={`Gori Ape #${index + 1}`}
              minted={randomNum[index]}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </VStack>
  );
}
