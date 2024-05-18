/* eslint-disable */
import { Box, Divider, Heading, ListItem, Text, OrderedList, VStack } from '@chakra-ui/react';

export default function Terms() {
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
          Terms & Conditions
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
        zIndex="10"
      >
        <Heading as="h6" fontSize="1.25rem" fontWeight="semibold" mb="24px">
          Last Updated: 18 April 2024
        </Heading>
        <Divider borderWidth="0.1px" />
        <Heading as="h6" fontSize="1.25rem" fontWeight="semibold" my="16px">
          Terms & Conditions for Gori Ape NFT Project
        </Heading>
        <VStack align="flex-start" spacing="24px">
          <Text fontSize="1rem" color="white">
            Introduction
          </Text>
          <OrderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              Welcome to the Gori Ape NFT Project. These Terms & Conditions govern your use of the
              Gori Ape website and the purchase, ownership, and trading of Gori Ape Non-Fungible
              Tokens (NFTs).
            </ListItem>
          </OrderedList>

          <Text fontSize="1rem" color="white">
            Definitions
          </Text>
          <OrderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              "Gori Ape NFTs" refers to the unique digital collectibles minted and offered by the
              Gori Ape project.
            </ListItem>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              "Website" refers to the official Gori Ape website where NFTs are showcased, bought,
              sold, and traded.
            </ListItem>
          </OrderedList>

          <Text fontSize="1rem" color="white">
            Ownership and Rights
          </Text>
          <OrderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              Ownership of Gori Ape NFTs is recorded on the blockchain and is subject to the terms
              set forth in this agreement.
            </ListItem>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              Gori Ape retains all intellectual property rights to the artwork, design, and concept
              of the NFTs.
            </ListItem>
          </OrderedList>

          <Text fontSize="1rem" color="white">
            Purchase and Sale
          </Text>
          <OrderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              By purchasing a Gori Ape NFT, you agree to pay the specified price in cryptocurrency.
            </ListItem>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              NFT purchases are final and non-refundable unless otherwise stated.
            </ListItem>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              Gori Ape reserves the right to cancel or modify NFT sales at its discretion.
            </ListItem>
          </OrderedList>

          <Text fontSize="1rem" color="white">
            Use and Licensing
          </Text>
          <OrderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              Ownership of a Gori Ape NFT grants you personal, non-commercial use rights.
            </ListItem>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              You may not reproduce, distribute, or exploit NFTs for commercial purposes without
              prior written consent from Gori Ape
            </ListItem>
          </OrderedList>

          <Text fontSize="1rem" color="white">
            Limited Supply
          </Text>
          <OrderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              Gori Ape NFTs are limited to a supply of 2000 tokens.
            </ListItem>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              Secondary market sales of Gori Ape NFTs are permitted but subject to these Terms &
              Conditions.
            </ListItem>
          </OrderedList>

          <Text fontSize="1rem" color="white">
            Disclaimer
          </Text>
          <OrderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              Gori Ape NFTs are sold on an "as-is" basis without warranties of any kind, express or
              implied.
            </ListItem>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              Gori Ape is not liable for any damages or losses resulting from the use or ownership
              of NFTs.
            </ListItem>
          </OrderedList>

          <Text fontSize="1rem" color="white">
            Governing Law
          </Text>
          <OrderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              These Terms & Conditions are governed by the laws of [Jurisdiction], without regard to
              its conflict of laws principles
            </ListItem>
          </OrderedList>

          <Text fontSize="0.875rem" color="#c4c4c4">
            By using the Gori Ape website or purchasing Gori Ape NFTs, you agree to abide by these
            Terms & Conditions. Gori Ape reserves the right to update or modify these terms at any
            time without prior notice.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}
