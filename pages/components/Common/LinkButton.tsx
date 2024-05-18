import { Button, ButtonProps } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type LinkButtonProps = ButtonProps & { href: string; onClose?: () => void };

export default function LinkButton({ children, href, onClose, ...props }: LinkButtonProps) {
  const router = useRouter();
  return (
    <Button
      display="block"
      variant="ghost"
      fontSize="0.875rem"
      minW="64px"
      py="6px"
      px="8px"
      borderRadius="4px"
      color="white"
      _hover={{ bg: 'rgba(255, 255, 255, 0.08)' }}
      onClick={() => {
        router.push(href);
        if (onClose) onClose();
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
