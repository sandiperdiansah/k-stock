import { Box, Circle, Float, Popover, Portal } from '@chakra-ui/react';
import { IoIosNotificationsOutline } from 'react-icons/io';

export const NotificationPopover = () => {
    return (
        <Popover.Root positioning={{ placement: 'bottom-end' }}>
            <Popover.Trigger asChild>
                <Box position="relative">
                    <Float placement="top-end">
                        <Circle
                            size={4}
                            bg="red"
                            color="white"
                            fontSize="2xs"
                        >
                            3
                        </Circle>
                    </Float>
                    <button
                        type="button"
                        aria-label="show notifications"
                        style={{ cursor: 'pointer' }}
                    >
                        <IoIosNotificationsOutline size={28} />
                    </button>
                </Box>
            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content w="3xs">
                        <Popover.Body>okkkkkkkkkkk</Popover.Body>
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    );
};
