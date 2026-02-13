import { Header } from '@/components/Header';
import {
    Sidebar,
    SidebarBody,
    SidebarContextProvider,
    SidebarFooter,
    SidebarHeader,
} from '@/components/Sidebar';
import { Image } from '@/components/ui/image';
import { Link } from '@/components/ui/link';
import { ItemType } from '@/types';
import { Box, ScrollArea, Span } from '@chakra-ui/react';
import { FiBarChart2, FiBox, FiHome, FiShoppingCart, FiUsers } from 'react-icons/fi';
import { LuStore } from 'react-icons/lu';
import { version } from '../../package.json';

const items: ItemType[] = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icon: <FiHome size={22} />,
    },
    {
        label: 'Inventory',
        href: '/dashboard/inventory',
        icon: <FiBox size={22} />,
    },
    {
        label: 'Reports',
        href: '/dashboard/reports',
        icon: <FiBarChart2 size={22} />,
    },
    {
        label: 'Suppliers',
        href: '/dashboard/suppliers',
        icon: <FiUsers size={22} />,
    },
    {
        label: 'Orders',
        href: '/dashboard/orders',
        icon: <FiShoppingCart size={22} />,
    },
    {
        label: 'Stores',
        href: '/dashboard/stores',
        icon: <LuStore size={22} />,
    },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarContextProvider>
            <Sidebar>
                <SidebarHeader>
                    <Link
                        href="/dashboard"
                        display="flex"
                        alignItems="center"
                        gap={3}
                    >
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width="40px"
                            height="40px"
                        />
                        <Span
                            color="primary"
                            display="inline-block"
                            fontSize="2xl"
                            fontWeight="bold"
                        >
                            {process.env.NEXT_PUBLIC_APP_NAME}
                        </Span>
                    </Link>
                </SidebarHeader>
                <SidebarBody>
                    <Box spaceY={2}>
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href as string}
                                display="flex"
                                alignItems="center"
                                p={3}
                                gap={5}
                                transition="backgrounds"
                                rounded="md"
                                color="fg.muted"
                                _hover={{
                                    bgColor: 'bg.subtle',
                                }}
                            >
                                {item.icon && item.icon}
                                <Span>{item.label}</Span>
                            </Link>
                        ))}
                    </Box>
                </SidebarBody>
                <SidebarFooter
                    color="fg.muted"
                    fontSize="sm"
                >
                    V {version}
                </SidebarFooter>
            </Sidebar>

            <Box
                flex={1}
                h="vh"
                bgColor="bg.subtle"
            >
                <Header />

                <ScrollArea.Root>
                    <ScrollArea.Viewport>
                        <ScrollArea.Content
                            as="main"
                            p={5}
                            pb={28}
                            spaceY={5}
                        >
                            {children}
                        </ScrollArea.Content>
                    </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar />
                </ScrollArea.Root>
            </Box>
        </SidebarContextProvider>
    );
};

export default Layout;
