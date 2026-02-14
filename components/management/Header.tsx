'use client';

import { SidebarTrigger } from '@/components/sidebar';
import { SearchInput } from '@/components/ui/search-input';
import { Box } from '@chakra-ui/react';
import { NotificationPopover } from './NotificationPopover';
import { UserAvatar } from './UserAvatar';

const frameworks = [
    { label: 'React', value: 'react', href: 'https://react.dev' },
    { label: 'Solid', value: 'solid', href: 'https://solidjs.com' },
    { label: 'Vue', value: 'vue', href: 'https://vuejs.org' },
    { label: 'Angular', value: 'angular', href: 'https://angular.io' },
    { label: 'Svelte', value: 'svelte', href: 'https://svelte.dev' },
    { label: 'Preact', value: 'preact', href: 'https://preactjs.com' },
    { label: 'Qwik', value: 'qwik', href: 'https://qwik.builder.io' },
    { label: 'Lit', value: 'lit', href: 'https://lit.dev' },
    { label: 'Alpine.js', value: 'alpinejs', href: 'https://alpinejs.dev' },
    { label: 'Ember', value: 'ember', href: 'https://emberjs.com' },
    { label: 'Next.js', value: 'nextjs', href: 'https://nextjs.org' },
];

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
                    initialItems={frameworks}
                    placeholder="search product, supplier, order"
                />
            </Box>

            <Box
                display="flex"
                alignItems="center"
                gap={4}
            >
                <NotificationPopover />
                <UserAvatar />
            </Box>
        </Box>
    );
};
