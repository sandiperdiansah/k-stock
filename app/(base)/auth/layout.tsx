import { Image } from '@/components/ui/image';
import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Grid
            as="main"
            minH="svh"
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
            alignItems="center"
            p={{ base: 5, lg: 0 }}
        >
            <GridItem
                as="section"
                justifyItems="center"
                spaceY={8}
            >
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width="250px"
                    height="270px"
                />

                <Heading
                    fontSize="4xl"
                    fontWeight="semibold"
                >
                    {process.env.NEXT_PUBLIC_APP_NAME}
                </Heading>
            </GridItem>

            <GridItem as="section">
                <Box
                    w="full"
                    minW="sm"
                    maxW={{ lg: 'sm' }}
                    spaceY={6}
                >
                    {children}
                </Box>
            </GridItem>
        </Grid>
    );
};

export default Layout;
