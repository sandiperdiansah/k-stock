import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
    return [
        {
            url: process.env.NEXT_PUBLIC_APP_URL!,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ];
};

export default sitemap;
