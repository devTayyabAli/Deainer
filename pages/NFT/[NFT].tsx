import {
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Button,
} from '@chakra-ui/react';
import GradientButton from '../components/Common/GradientButton';
import { useState } from 'react';
import CustomBtn  from '../components/connectButton';
import { useRouter } from 'next/router';

export default function NFT() {
  const [count, setCount] = useState(1);
  const router = useRouter();
  const id = router.query.NFT;
  return (
    <VStack
      w="100%"
      maxW="1280px"
      mx="auto"
      py={{ base: '24px', md: '50px' }}
      align="flex-start"
      spacing="2rem"
      zIndex="10"
    >
      <HStack onClick={() =>  router.push('/')} as="button">
        <Image src="/images/chevron.svg" alt="chevron" />
        <Text fontWeight="semibold">Item Details</Text>
      </HStack>
      <HStack
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="space-between"
        w="100%"
        alignItems="flex-start"
        spacing="2rem"
      zIndex="10"

      >
        <Image
          src={`/images/${id}.jpeg`}
          alt="nft"
          maxW={{ base: '100%', lg: '450px' }}
          borderRadius="20px"
        />
        <VStack
          w="100%"
          py="2rem"
          px={{ base: '1rem', lg: '2rem' }}
          align="flex-start"
          bg={{ base: 'transparent', lg: '#171c26' }}
          borderRadius="20px"
          spacing="1rem"
      zIndex="10"

        >
          <HStack>
            <Text fontSize="1.25rem" color="white" fontWeight="semibold">
              Price:
            </Text>
            <HStack>
              <Text fontSize="1.5rem" color="white" fontWeight="semibold">
                {Number(id) === 19 ? '3 ETH' : Number(id) > 2 ? `0.8 ETH` : '0.00192872 ETH'}
              </Text>
              <Image src="/images/eth.png" alt="eth" maxW="25px" />
            </HStack>
          </HStack>

          <HStack
            flexDirection={{ base: 'column', lg: 'row' }}
            w="100%"
            spacing={{ base: '1.5rem', lg: '0.5rem' }}
            mb="1rem"
          >
            {Number(id) !== 19 && (
              <HStack>
                <GradientButton
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </GradientButton>
                <HStack w="30px" h="30px" justifyContent="center">
                  <Text>{count > 9 ? count : `0${count}`}</Text>
                </HStack>
                <GradientButton
                  onClick={() => {
                    if (count < 10) {
                      setCount(count + 1);
                    }
                  }}
                >
                  +
                </GradientButton>
              </HStack>
            )}
            {Number(id) !== 19 && (
              <Text display={{ base: 'block', lg: 'none' }}>
                {Number(Number(id) > 2 ? count * 0.8 : count * 0.00192872).toFixed(
                  Number(id) > 2 ? 2 : 6
                )}
              </Text>
            )}
            {Number(id) === 19 ? (
              <Button display="flex" justifyContent="center" colorScheme="whiteAlpha" isDisabled>
                Sold Out
              </Button>
            ) : (
              <GradientButton
                ml="1rem"
                mr="0.5rem"
                display="flex"
                justifyContent="center"
                isPink={Number(id) > 2 ? false : true}
                leftIcon={<Image src="/images/cart.svg" maxW="18px" alt="cart" />}
              >
                <CustomBtn> {Number(id) > 2 ? 'Buy' : 'Mint'}</CustomBtn>
                {/* {Number(id) > 2 ? 'Buy' : 'Mint'} */}
              </GradientButton>
            )}
            {Number(id) !== 19 && (
              <Text display={{ base: 'none', lg: 'block' }}>
                {Number(Number(id) > 2 ? count * 0.8 : count * 0.00192872).toFixed(
                  Number(id) > 2 ? 2 : 6
                )}
              </Text>
            )}
          </HStack>
          <Heading as="h2" fontSize="1.25rem" fontWeight="semibold" color="white" mb="1rem">
            Gori Ape NFT Collection
          </Heading>
          <Text fontSize="0.875rem" color="white" textAlign="justify">
            Welcome to the vibrant and captivating world of Gori Ape NFTs! Our collection features
            2000 unique and meticulously crafted NFTs, each showcasing the mesmerizing fusion of
            Gorilla and Ape themes.
          </Text>
          <Text fontSize="0.875rem" color="white" textAlign="justify">
            The artwork is thoughtfully designed to embody the essence of both Gorillas and Apes,
            capturing their strength, intelligence, and unique characteristics. Each NFT in the
            collection is a masterpiece, blending elements of nature, jungle vibes, and the majestic
            presence of these incredible creatures.
          </Text>
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
            art, nature, and innovation converge to create an unforgettable experience in the world
            of NFTs.
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
