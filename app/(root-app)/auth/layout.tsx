import { Image } from '@/components/ui/image';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Grid
            minH="svh"
            templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
            alignItems="center"
            placeContent="center"
            p={{ base: 5, lg: 0 }}
            gap={{ base: 16, lg: 0 }}
        >
            <GridItem
                as="section"
                justifyItems="center"
                spaceY={8}
            >
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={{ base: '180px', lg: '250px' }}
                    height={{ base: '200px', lg: '270px' }}
                />

                <Heading
                    color="primary"
                    fontSize="5xl"
                    fontWeight="bold"
                >
                    {process.env.NEXT_PUBLIC_APP_NAME}
                </Heading>
            </GridItem>

            <GridItem as="section">
                <Box
                    w="full"
                    minW="sm"
                    maxW={{ md: 'sm' }}
                    spaceY={6}
                    mx={{ md: 'auto', lg: 0 }}
                >
                    {children}
                </Box>
            </GridItem>
        </Grid>
    );
};

export default Layout;
