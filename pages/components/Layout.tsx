import { Box, VStack } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <VStack
      align="flex-start"
      w="100%"
      minH="calc(100vh - 6rem)"
      maxW="1280px"
      mx="auto"
      h="100%"
      px={{ base: '30px', lg: '20px' }}
    >
      <Header />
      <Box w="100%" minH="100vh" pt="5.5rem">
        {children}
      </Box>
      <Footer />
    </VStack>
  );
}
