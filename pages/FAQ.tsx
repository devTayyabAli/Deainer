import { Box, Heading, Text, VStack, UnorderedList, ListItem } from '@chakra-ui/react';

export default function FAQ() {
  return (
    <VStack
      w="100%"
      maxW="1024px"
      mx="auto"
      py={{ base: '24px', md: '50px' }}
      align="flex-start"
      spacing="40px"
    >
      <Box position="relative" borderBottom="2px solid white">
        <Heading
          as="h2"
          fontSize="1.25rem"
          fontWeight="semibold"
          lineHeight="1.5"
          position="relative"
          zIndex="1"
        >
          About
        </Heading>
        <Box
          bg="linear-gradient(91.95deg, rgb(33, 117, 215) 1.75%, rgb(90, 205, 254) 98.13%)"
          w="30px"
          h="24px"
          borderRadius="5px"
          position="absolute"
          right="-10px"
          top="5px"
          zIndex="0"
        ></Box>
      </Box>
      <VStack
        align="flex-start"
        bg={{ base: 'transparent', lg: '#171c26' }}
        borderRadius="16px"
        p={{ base: '0', lg: '48px' }}
        color="white"
        w="100%"
        spacing="1rem"
        zIndex="10"
      >
        <Heading as="h2" fontSize="1.25rem" fontWeight="semibold" color="white" mb="1rem">
          Gori Ape NFT Collection
        </Heading>
        <Text color="white" textAlign="justify">
          Supply: 2000 Unique NFTs
        </Text>
        <VStack align="flex-start">
          <Text color="white" textAlign="justify">
            Description:
          </Text>
          <Text fontSize="0.875rem" color="white" textAlign="justify">
            Welcome to the vibrant and captivating world of Gori Ape NFTs! Our collection features
            2000 unique and meticulously crafted NFTs, each showcasing the mesmerizing fusion of
            Gorilla and Ape themes.
          </Text>
        </VStack>
        <VStack align="flex-start">
          <Text color="white" textAlign="justify">
            Art Style:
          </Text>
          <Text fontSize="0.875rem" color="white" textAlign="justify">
            The artwork is thoughtfully designed to embody the essence of both Gorillas and Apes,
            capturing their strength, intelligence, and unique characteristics. Each NFT in the
            collection is a masterpiece, blending elements of nature, jungle vibes, and the majestic
            presence of these incredible creatures.
          </Text>
        </VStack>
        <VStack align="flex-start">
          <Text color="white" textAlign="justify">
            Features:
          </Text>
          <UnorderedList>
            <ListItem fontSize="0.875rem" color="white">
              2000 one-of-a-kind NFTs
            </ListItem>
            <ListItem fontSize="0.875rem" color="white">
              High-quality digital art with intricate details
            </ListItem>
            <ListItem fontSize="0.875rem" color="white">
              Unique traits and attributes for each NFT
            </ListItem>
            <ListItem fontSize="0.875rem" color="white">
              Gorilla and Ape themes beautifully integrated
            </ListItem>
            <ListItem fontSize="0.875rem" color="white">
              Engaging and immersive visual experience
            </ListItem>
            <ListItem fontSize="0.875rem" color="white">
              Limited supply for exclusivity and rarity
            </ListItem>
          </UnorderedList>
        </VStack>
        <Text fontSize="0.875rem" color="white" textAlign="justify">
          Join us on this exhilarating adventure as we unveil the Gori Ape NFT collection, where
          art, nature, and innovation converge to create an unforgettable experience in the world of
          NFTs.
        </Text>
      </VStack>
    </VStack>
  );
}
