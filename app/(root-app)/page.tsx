import { Link } from '@/components/ui/link';
import { Box } from '@chakra-ui/react';

const Page = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Link href="/auth/sign-up">DAFTAR</Link>
        </Box>
    );
};

export default Page;
