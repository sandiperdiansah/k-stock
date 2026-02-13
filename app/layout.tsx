import { Provider } from '@/components/ui/provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        default: 'K-Stock',
        template: '%s | K-Stock',
    },
    description:
        'Sign up and manage your inventory online. Fast, simple, and accessible anywhere',
    keywords: [
        'inventory app',
        'stock management',
        'online inventory system',
        'cloud inventory software',
        'free inventory management',
        'K-Stock',
    ],
    openGraph: {
        type: 'website',
        title: 'K-Stock',
        description:
            'Sign up and manage your inventory online. Fast, simple, and accessible anywhere.',
        images: [
            {
                url: '/og-image.png',
            },
        ],
        url: process.env.NEXT_PUBLIC_APP_URL,
    },
    twitter: {
        title: 'K-Stock',
        card: 'summary_large_image',
        description:
            'Sign up and manage your inventory online. Fast, simple, and accessible anywhere',
        images: [
            {
                url: '/og-image.png',
            },
        ],
    },
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body className={`${inter.className} `}>
                <Provider
                    attribute="data-theme"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </Provider>
            </body>
        </html>
    );
};

export default Layout;
