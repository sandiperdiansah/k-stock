import { Field } from '@/components/ui/field';
import { PasswordInput } from '@/components/ui/password-input';
import {
    Box,
    Button,
    Heading,
    IconButton,
    Input,
    InputGroup,
    Span,
    Text,
} from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';

const Page = () => {
    const p = true;

    return (
        <>
            <Box spaceY={2}>
                <Heading
                    fontSize="2xl"
                    fontWeight="semibold"
                >
                    Reset Password
                </Heading>
                <Text color="fg.muted">Enter your new password and OTP code.</Text>
            </Box>

            <Box
                asChild
                spaceY={5}
            >
                <form>
                    <Field
                        label="Password"
                        errorText="aduh error"
                    >
                        <PasswordInput placeholder="Enter your password" />
                    </Field>

                    <Field
                        label="Confirm Password"
                        errorText="aduh error"
                    >
                        <PasswordInput placeholder="Enter your password" />
                    </Field>

                    <Field
                        label="OTP"
                        errorText="aduh error"
                    >
                        <InputGroup
                            endElement={
                                p ? (
                                    <Span>12 s</Span>
                                ) : (
                                    <IconButton
                                        tabIndex={-1}
                                        me="-2"
                                        aspectRatio="square"
                                        size="sm"
                                        variant="ghost"
                                        height="calc(100% - {spacing.2})"
                                        aria-label="Give new otp"
                                    >
                                        <FiSend />
                                    </IconButton>
                                )
                            }
                        >
                            <Input placeholder="Enter otp 6 digit" />
                        </InputGroup>
                    </Field>

                    <Button w="full">Confirm</Button>
                </form>
            </Box>
        </>
    );
};

export default Page;
