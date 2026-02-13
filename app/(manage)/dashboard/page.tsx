import { OrderSummary } from '@/components/OrderSummary';
import { OverView } from '@/components/OverView';
import { ProductLowStock } from '@/components/ProductLowStock';
import { ProductTopSelling } from '@/components/ProductTopSelling';
import { SalesAndPurchase } from '@/components/SalesAndPurchase';
import { formattedCurrency } from '@/utils/formatted';
import { Grid, GridItem } from '@chakra-ui/react';
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

const Page = () => {
    return (
        <>
            <Grid
                as="section"
                templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
                gap={5}
            >
                <GridItem>
                    <OverView
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
                    <OverView
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
                    <OverView
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
                    <OverView
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
