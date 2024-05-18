import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <VStack align="flex-start" w="100%" maxW="1280px" mx="auto" py="20px" spacing="1rem"
    zIndex="10"
     >
      <HStack w="100%" justifyContent="space-between">
        <VStack align="flex-start">
          <Link  href="/">
            <Image src="/images/19.jpeg" alt="logo" maxW="80px" borderRadius="full" />
          </Link>
          <HStack>
            <Text color="white">Gori Ape</Text>
            <Link href="https://x.com/nfprompt_co?s=21" >
              <Image src="/images/twitter.svg" alt="twitter" />
            </Link>
          </HStack>
        </VStack>
        <VStack align="flex-start" spacing="10px">
          <Text fontWeight="bold" color="white">
            COMPANY
          </Text>
          <VStack align="flex-start">
            <Link  href="/" >
              Home
            </Link>
            {/* <Link  href="/faq" >
              FAQ
            </Link> */}
            <Link  href="/Privacy" >
              Privacy
            </Link>
            <Link  href="/Terms" >
              Terms
            </Link>
          </VStack>
        </VStack>
      </HStack>
      <HStack w="100%" justifyContent="center">
        <Text
          fontSize="0.75rem"
          textAlign="center"
          color="gray"
        >{`© ${new Date().getFullYear()} Gori Ape – All rights reserved`}</Text>
      </HStack>
    </VStack>
  );
}
