import { Box, Span } from '@chakra-ui/react';
import { Link } from './ui/link';

export const ProductLowStock = () => {
    return (
        <Box
            p={5}
            spaceY={6}
            bgColor="white"
            rounded="md"
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Span
                    fontWeight="semibold"
                    color="fg.muted"
                    fontSize="lg"
                >
                    Product Low Stock
                </Span>

                <Link
                    href="/dashboard"
                    color="blue.700"
                    _hover={{ textDecor: 'underline' }}
                    textUnderlineOffset={4}
                >
                    See All
                </Link>
            </Box>
        </Box>
    );
};
