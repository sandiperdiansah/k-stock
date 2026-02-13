import { Field } from '@/components/ui/field';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Forgot Password',
};

const Page = () => {
    return (
        <>
            <Box spaceY={2}>
                <Heading
                    fontSize="2xl"
                    fontWeight="semibold"
                >
                    Forgot Password
                </Heading>
                <Text color="fg.muted">Enter your email to reset your password.</Text>
            </Box>

            <Box
                asChild
                spaceY={5}
            >
                <form>
                    <Field
                        label="Email"
                        errorText="aduh error"
                    >
                        <Input placeholder="Enter your email" />
                    </Field>

                    <Button w="full">Confirm</Button>
                </form>
            </Box>
        </>
    );
};

export default Page;
