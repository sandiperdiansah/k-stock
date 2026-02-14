import { ProductLowStock } from '@/components/management/ProductLowStock';
import { ProductTopSelling } from '@/components/management/ProductTopSelling';
import { StatsOverview } from '@/components/stats-overview';
import { formattedCurrency } from '@/utils/formatted';
import { Grid, GridItem } from '@chakra-ui/react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import {
    FiBarChart2,
    FiCreditCard,
    FiDollarSign,
    FiGrid,
    FiPackage,
    FiRefreshCcw,
    FiShoppingBag,
    FiTrendingUp,
    FiTruck,
    FiUsers,
    FiXCircle,
} from 'react-icons/fi';

export const metadata: Metadata = {
    title: 'Dashboard',
    robots: {
        index: false,
        follow: false,
    },
};

const SalesAndPurchase = dynamic(() =>
    import('@/components/management/SalesAndPurchase').then((md) => md.SalesAndPurchase),
);

const OrderSummary = dynamic(() =>
    import('@/components/management/OrderSummary').then((md) => md.OrderSummary),
);

const Page = () => {
    return (
        <>
            <Grid
                as="section"
                templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
                gap={5}
            >
                <GridItem>
                    <StatsOverview
                        label="Sales Overview"
                        items={[
                            {
                                label: 'Sales',
                                icon: <FiDollarSign size={32} />,
                                value: 20000,
                                color: 'blue.600',
                                render: (value) => formattedCurrency(value),
                            },
                            {
                                label: 'Revenue',
                                icon: <FiTrendingUp size={32} />,
                                value: 20000,
                                color: 'purple.600',
                                render: (value) => formattedCurrency(value),
                            },
                            {
                                label: 'Profit',
                                icon: <FiBarChart2 size={32} />,
                                value: 20000,
                                color: 'yellow.600',
                                render: (value) => formattedCurrency(value),
                            },
                            {
                                label: 'Expenses',
                                icon: <FiCreditCard size={32} />,
                                value: 20000,
                                color: 'green.600',
                                render: (value) => formattedCurrency(value),
                            },
                        ]}
                    />
                </GridItem>
                <GridItem>
                    <StatsOverview
                        label="Inventory Summary"
                        columns={{ base: '1fr', md: '1fr 1fr' }}
                        items={[
                            {
                                label: 'In Stock',
                                icon: <FiPackage size={32} />,
                                value: 20000,
                                color: 'yellow.600',
                            },
                            {
                                label: 'Incoming',
                                icon: <FiTruck size={32} />,
                                value: 20000,
                                color: 'purple.600',
                            },
                        ]}
                    />
                </GridItem>
            </Grid>

            <Grid
                as="section"
                templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
                gap={5}
            >
                <GridItem>
                    <StatsOverview
                        label="Purchase Overview"
                        items={[
                            {
                                label: 'Purchases',
                                icon: <FiShoppingBag size={32} />,
                                value: 20000,
                                color: 'blue.600',
                            },
                            {
                                label: 'Spent',
                                icon: <FiCreditCard size={32} />,
                                value: 20000,
                                color: 'green.600',
                                render: (value) => formattedCurrency(value),
                            },
                            {
                                label: 'Canceled',
                                icon: <FiXCircle size={32} />,
                                value: 20000,
                                color: 'purple.600',
                            },
                            {
                                label: 'Returns',
                                icon: <FiRefreshCcw size={32} />,
                                value: 20000,
                                color: 'yellow.600',
                                render: (value) => formattedCurrency(value),
                            },
                        ]}
                    />
                </GridItem>
                <GridItem>
                    <StatsOverview
                        label="Product Summary"
                        columns={{ base: '1fr', md: '1fr 1fr' }}
                        items={[
                            {
                                label: 'Suppliers',
                                icon: <FiUsers size={32} />,
                                value: 20000,
                                color: 'blue.600',
                            },
                            {
                                label: 'Categories',
                                icon: <FiGrid size={32} />,
                                value: 20000,
                                color: 'yellow.600',
                            },
                        ]}
                    />
                </GridItem>
            </Grid>

            <Grid
                as="section"
                templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
                gap={5}
            >
                <GridItem>
                    <SalesAndPurchase />
                </GridItem>
                <GridItem>
                    <OrderSummary />
                </GridItem>
            </Grid>

            <Grid
                as="section"
                templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
                gap={5}
            >
                <GridItem>
                    <ProductTopSelling />
                </GridItem>
                <GridItem>
                    <ProductLowStock />
                </GridItem>
            </Grid>
        </>
    );
};

export default Page;
