import { Header } from '@/components/management/Header';
import {
    SidebarBody,
    SidebarContextProvider,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarRoot,
} from '@/components/sidebar';
import { Image } from '@/components/ui/image';
import { Link } from '@/components/ui/link';
import { ItemType } from '@/types';
import { Box, ScrollArea, Span } from '@chakra-ui/react';
import { FiBarChart2, FiBox, FiHome, FiShoppingCart, FiUsers } from 'react-icons/fi';
import { LuStore } from 'react-icons/lu';

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
            <SidebarRoot>
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
                    <SidebarMenu>
                        {items.map((item, index) => (
                            <SidebarMenuItem
                                key={index}
                                asChild
                            >
                                <Link href={item.href as string}>
                                    {item.icon && item.icon}
                                    <Span>{item.label}</Span>
                                </Link>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarBody>
                <SidebarFooter
                    color="fg.muted"
                    fontSize="sm"
                >
                    V {process.env.NEXT_PUBLIC_APP_VERSION}
                </SidebarFooter>
            </SidebarRoot>

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
