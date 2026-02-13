import { Box, BoxProps } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Link = ({
    href,
    children,
    ...props
}: Omit<BoxProps, 'asChild'> & { href: string }) => {
    return (
        <Box
            asChild
            {...props}
        >
            <NextLink href={href}>{children}</NextLink>
        </Box>
    );
};
