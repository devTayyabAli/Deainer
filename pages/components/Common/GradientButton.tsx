import { Button, ButtonProps } from '@chakra-ui/react';

export default function GradientButton({
  isPink = false,
  children,
  ...props
}: ButtonProps & { isPink?: boolean }) {
  return (
    <Button variant="unstyled" className={isPink ? 'gradient-btn pink' : 'gradient-btn'} {...props}>
      {children}
    </Button>
  );
}
