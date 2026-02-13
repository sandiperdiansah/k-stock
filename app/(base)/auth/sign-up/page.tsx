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
                    Sign Up
                </Heading>
                <Text color="fg.muted">Create your account to get started.</Text>
            </Box>

            <Box
                asChild
                spaceY={5}
            >
                <form>
                    <Field
                        label="Name"
                        required
                        errorText="aduh error"
                    >
                        <Input placeholder="Enter your name" />
                    </Field>

                    <Field
                        label="Email"
                        required
                        errorText="aduh error"
                    >
                        <Input placeholder="Enter your email" />
                    </Field>

                    <Field
                        label="Password"
                        required
                        errorText="aduh error"
                    >
                        <PasswordInput placeholder="Enter your password" />
                    </Field>

                    <Button w="full">Sign Up</Button>
                    <Text textAlign="center">
                        Already have an account? <Link href="/auth/sign-in">Sign In</Link>
                    </Text>
                </form>
            </Box>
        </>
    );
};

export default Page;
