
/* eslint-disable */
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
  Image,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import LinkButton from './Common/LinkButton';
import  ConnectBTN  from './Common/ConnectBTN';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HStack
        bg={isScrolled ? 'bg' : 'transparent'}
        position="fixed"
        left="0"
        right="0"
        zIndex="99"
        px={{ base: '30px', xl: '0px' }}
      >
        <HStack as="header" justify="space-between" w="100%" py="20px" maxW="1280px" mx="auto">

            <Image
              src="/images/19.jpeg"
              alt="logo"
              maxW={{ base: '38px', lg: '58px' }}
              borderRadius="full"
            />

          <HStack spacing="25px" display={{ base: 'none', lg: 'flex' }}>
            <LinkButton
              href="/"
              display="flex"
              alignItems="center"
              leftIcon={<Image src="/images/home.svg" maxW="18px" />}
            >
              Home
            </LinkButton>
            <LinkButton
              href="/FAQ"
              display="flex"
              alignItems="center"
              leftIcon={<Image src="/images/faq.svg" maxW="18px" />}
            >
              About
            </LinkButton>
            <LinkButton
              href="/Privacy"
              display="flex"
              alignItems="center"
              leftIcon={<Image src="/images/privacy.svg" maxW="18px" />}
            >
              Privacy
            </LinkButton>
            <LinkButton
              href="/Terms"
              display="flex"
              alignItems="center"
              leftIcon={<Image src="/images/terms.svg" maxW="18px" />}
            >
              Terms
            </LinkButton>
          </HStack>
          <Box display={{ base: 'none', lg: 'block' }}>
            <ConnectBTN />
          </Box>
          <Button display={{ base: 'block', lg: 'none' }} onClick={onOpen}>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              font-size="20"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
                fill="currentColor"
              ></path>
              <path
                d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
                fill="currentColor"
              ></path>
              <path
                d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
                fill="currentColor"
              ></path>
            </svg>
          </Button>
        </HStack>
      </HStack>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#0a0407">
          <DrawerBody pt="5rem">
            <VStack align="flex-start" spacing="20px">
              <LinkButton
                w="100%"
                textAlign="left"
                href="/"
                leftIcon={<Image src="/images/home.svg" maxW="15px" mr="20px" />}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                fontSize="0.75rem"
                onClose={onClose}
              >
                Home
              </LinkButton>
              <LinkButton
                w="100%"
                textAlign="left"
                href="/about"
                leftIcon={<Image src="/images/faq.svg" maxW="15px" mr="20px" />}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                fontSize="0.75rem"
                onClose={onClose}
              >
                About
              </LinkButton>
              <LinkButton
                w="100%"
                textAlign="left"
                href="/privacy"
                leftIcon={<Image src="/images/privacy.svg" maxW="15px" mr="20px" />}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                fontSize="0.75rem"
                onClose={onClose}
              >
                Privacy
              </LinkButton>
              <LinkButton
                w="100%"
                textAlign="left"
                href="/terms"
                leftIcon={<Image src="/images/terms.svg" maxW="15px" mr="20px" />}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                fontSize="0.75rem"
                onClose={onClose}
              >
                Terms
              </LinkButton>
              <ConnectBTN />
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <VStack align="flex-start" w="100%">
              <VStack align="flex-start">
                <Link  href="/">
                  <Image src="/images/19.jpeg" alt="logo" maxW="50px" borderRadius="full" />
                </Link>
                <Text color="white">Made with love.</Text>
              </VStack>
              <HStack w="100%">
                <Text
                  fontSize="0.75rem"
                  textAlign="center"
                  color="gray"
                >{`© ${new Date().getFullYear()} Gorilla.io – All rights reserved`}</Text>
              </HStack>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
