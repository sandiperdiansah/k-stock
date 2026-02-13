import { Box } from '@chakra-ui/react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            as="main"
            minH="vh"
        >
            {children}
        </Box>
    );
};

export default Layout;
