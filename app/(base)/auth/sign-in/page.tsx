import { Field } from '@/components/ui/field';
import { Link } from '@/components/ui/link';
import { PasswordInput } from '@/components/ui/password-input';
import { Box, Button, Heading, Input, Text } from '@chakra-ui/react';

const Page = () => {
    return (
        <>
            <Box spaceY={2}>
                <Heading
                    fontSize="2xl"
                    fontWeight="semibold"
                >
                    Sign In
                </Heading>
                <Text color="fg.muted">Welcome back! Please enter your details.</Text>
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

                    <Field
                        label="Password"
                        errorText="aduh error"
                    >
                        <PasswordInput placeholder="Enter your password" />
                    </Field>

                    <Box
                        display="flex"
                        justifyContent="end"
                    >
                        <Link href="/auth/forgot-password">Forgot password</Link>
                    </Box>

                    <Button w="full">Sign In</Button>
                    <Text textAlign="center">
                        Don’t have an account? <Link href="/auth/sign-up">Sign Up</Link>
                    </Text>
                </form>
            </Box>
        </>
    );
};

export default Page;
