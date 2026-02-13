'use client';

import { SidebarTrigger } from '@/components/Sidebar';
import { Avatar } from '@/components/ui/avatar';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu';
import { SearchInput } from '@/components/ui/search-input';
import { Box, IconButton } from '@chakra-ui/react';
import { IoIosNotificationsOutline } from 'react-icons/io';

export const Header = () => {
    return (
        <Box
            as="header"
            px={{ base: 5, md: 8 }}
            h={20}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgColor="white"
            gap={{ base: 2, lg: 0 }}
        >
            <Box
                display="flex"
                alignItems="center"
                gap={{ base: 2, md: 3 }}
            >
                <SidebarTrigger />
                <SearchInput
                    placeholder="Search product, supplier, order"
                    name="search"
                />
            </Box>

            <Box
                display="flex"
                alignItems="center"
                gap={{ base: 2, md: 3 }}
            >
                <IconButton
                    variant="outline"
                    rounded="full"
                    size="sm"
                >
                    <IoIosNotificationsOutline />
                </IconButton>

                <MenuRoot positioning={{ placement: 'bottom-start' }}>
                    <MenuTrigger
                        rounded="full"
                        focusRing="none"
                        cursor="pointer"
                        aria-label="Show menu avatar"
                    >
                        <Avatar
                            name={process.env.NEXT_PUBLIC_IMAGE_FALLBACK_NAME}
                            src="https://placehold.co/200x200"
                        />
                    </MenuTrigger>
                    <MenuContent>
                        <MenuItem value="account">Account</MenuItem>
                        <MenuItem value="settings">Settings</MenuItem>
                        <MenuItem value="logout">Logout</MenuItem>
                    </MenuContent>
                </MenuRoot>
            </Box>
        </Box>
    );
};
