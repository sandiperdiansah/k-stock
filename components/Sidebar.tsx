'use client';

import {
    Box,
    BoxProps,
    IconButton,
    IconButtonProps,
    ScrollArea,
    ScrollAreaRootProps,
    Span,
    SpanProps,
} from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import {
    createContext,
    ReactNode,
    use,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { FiMenu } from 'react-icons/fi';

export type SidebarContextProps = {
    open: boolean;
    toggle: () => void;
    onOpen: () => void;
    onClose: () => void;
};

export const SidebarContext = createContext<SidebarContextProps | null>(null);

export const SidebarContextProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState<SidebarContextProps['open']>(false);

    const toggle = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    const onOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const onClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <SidebarContext.Provider value={{ open, toggle, onOpen, onClose }}>
            <Box
                h="vh"
                display="flex"
                overflow="hidden"
            >
                {children}
            </Box>
        </SidebarContext.Provider>
    );
};

export const useSidebarContext = (): SidebarContextProps => {
    const context = use(SidebarContext);

    if (!context) {
        throw new Error('useSidebarContext must be used within a SidebarContextProvider');
    }

    return context;
};

export const Sidebar = (
    props: Omit<BoxProps, 'as' | 'w' | 'width'> & {
        width?: number | string | { open?: number | string; closed?: number | string };
        defaultOpen?: boolean;
    },
) => {
    const { width = { open: 290, closed: 0 }, defaultOpen, ...rest } = props;
    const { open, onClose, onOpen } = useSidebarContext();
    const resolvedWidth =
        typeof width === 'string' || typeof width === 'number'
            ? width
            : open
              ? width?.open
              : width?.closed;

    const pathname = usePathname();
    const prevPathnameRef = useRef<string | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const isMobile = window.matchMedia('(max-width: 1023px)').matches;
        const pathnameChanged = prevPathnameRef.current !== pathname;

        console.log(prevPathnameRef.current);

        if (open && isMobile && pathnameChanged) {
            onClose();
        }

        prevPathnameRef.current = pathname;
    }, [pathname, open, onClose]);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const isMobile = window.matchMedia('(max-width: 1023px)').matches;

        if (!open && !isMobile && defaultOpen) {
            onOpen();
        }
    }, [open, defaultOpen, onOpen]);

    return (
        <Box
            as="aside"
            w={resolvedWidth}
            h="full"
            display="flex"
            flexDir="column"
            overflow="hidden"
            flexShrink={0}
            role="navigation"
            aria-label="Sidebar navigation"
            aria-hidden={!open}
            transition="width .3s ease-in-out"
            {...rest}
        />
    );
};

export const SidebarHeader = ({ ...props }: Omit<BoxProps, 'as'>) => {
    return (
        <Box
            as="header"
            py={6}
            px={8}
            flexShrink={0}
            whiteSpace="nowrap"
            {...props}
        />
    );
};

export const SidebarLabel = ({ ...props }: SpanProps) => {
    return (
        <Span
            display="block"
            fontWeight="semibold"
            color="fg.muted"
            {...props}
        />
    );
};

export const SidebarBody = ({ children, ...props }: Omit<ScrollAreaRootProps, 'as'>) => {
    return (
        <ScrollArea.Root
            flex={1}
            aria-label="Sidebar menu"
            flexWrap="nowrap"
            {...props}
        >
            <ScrollArea.Viewport>
                <ScrollArea.Content
                    as="nav"
                    p={6}
                >
                    {children}
                </ScrollArea.Content>
            </ScrollArea.Viewport>
        </ScrollArea.Root>
    );
};

export const SidebarFooter = ({ ...props }: Omit<BoxProps, 'as'>) => {
    return (
        <Box
            as="footer"
            mt="auto"
            py={6}
            px={8}
            flexShrink={0}
            flexWrap="nowrap"
            {...props}
        />
    );
};
export const SidebarTrigger = ({
    ...props
}: Omit<IconButtonProps, 'type' | 'children' | 'onClick'>) => {
    const { open, toggle } = useSidebarContext();
    return (
        <IconButton
            type="button"
            size="sm"
            variant="outline"
            onClick={toggle}
            aria-label={open ? 'Close sidebar' : 'Open sidebar'}
            aria-expanded={open}
            {...props}
        >
            <FiMenu />
        </IconButton>
    );
};
