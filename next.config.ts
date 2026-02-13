import type { NextConfig } from 'next';

const IMAGE_PATTERNS = (process.env.NEXT_PUBLIC_IMAGE_PATTERNS || '')
    .split(',')
    .filter(Boolean);

const nextConfig: NextConfig = {
    experimental: {
        optimizePackageImports: ['@chakra-ui/react', '@emotion/react'],
    },
    images: {
        remotePatterns: IMAGE_PATTERNS.map((pattern) => ({
            protocol: 'https',
            hostname: pattern,
            pathname: '/**',
        })),
    },
};

export default nextConfig;
