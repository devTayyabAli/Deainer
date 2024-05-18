/* eslint-disable */
import { Box, Divider, Heading, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';

export default function Privacy() {
  return (
    <VStack
      w="100%"
      maxW="1024px"
      mx="auto"
      py={{ base: '24px', md: '50px' }}
      align="flex-start"
      spacing="40px"
      zIndex="10"
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
          Privacy Policy
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
          Privacy Policy
        </Heading>
        <VStack align="flex-start" spacing="24px">
          <Text fontSize="0.875rem" color="#c4c4c4">
            Thank you for visiting the Gori Ape website and showing interest in our NFT project.
            This Privacy Policy outlines how we collect, use, protect, and disclose your personal
            information when you use our website and services.
          </Text>
          <Text fontSize="1rem" color="white">
            Information We Collect:
          </Text>
          <UnorderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              When you visit our website or interact with our services, we may collect personal
              information such as your name, email address, IP address, and browsing activity.
            </ListItem>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              We may also collect non-personal information such as browser type, device information,
              and cookies.
            </ListItem>
          </UnorderedList>

          <Text fontSize="1rem" color="white">
            How We Use Your Information:
          </Text>
          <UnorderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              We use your information to provide and improve our services, communicate with you,
              personalize your experience, and ensure the security of our platform.
            </ListItem>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              We may also use your information for marketing purposes, such as sending promotional
              emails about our NFT project.
            </ListItem>
          </UnorderedList>

          <Text fontSize="1rem" color="white">
            Data Security:
          </Text>
          <UnorderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              We implement reasonable security measures to protect your personal information from
              unauthorized access, disclosure, alteration, or destruction.
            </ListItem>
          </UnorderedList>

          <Text fontSize="1rem" color="white">
            Third-Party Services:
          </Text>
          <UnorderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              Our website may contain links to third-party websites or services. Please note that we
              are not responsible for the privacy practices or content of these third parties.
            </ListItem>
          </UnorderedList>

          <Text fontSize="1rem" color="white">
            Cookies:
          </Text>
          <UnorderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              We use cookies to enhance your browsing experience and analyze website traffic. You
              can choose to disable cookies in your browser settings, but it may affect certain
              functionalities of our website.
            </ListItem>
          </UnorderedList>

          <Text fontSize="1rem" color="white">
            Children's Privacy:
          </Text>
          <UnorderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              Our services are not intended for individuals under the age of 18. We do not knowingly
              collect personal information from children.
            </ListItem>
          </UnorderedList>

          <Text fontSize="1rem" color="white">
            Updates to Privacy Policy:
          </Text>
          <UnorderedList>
            <ListItem fontSize="0.875rem" color="#c4c4c4">
              We may update this Privacy Policy from time to time. Any changes will be effective
              immediately upon posting on this page.
            </ListItem>
          </UnorderedList>

          <Text fontSize="0.875rem" color="#c4c4c4">
            By using our website and services, you agree to the terms outlined in this Privacy
            Policy. Please review this policy periodically for any updates or changes.
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}
