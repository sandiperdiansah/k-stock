import { DataTable } from '@/components/data-table';
import { StatsOverview } from '@/components/stats-overview';
import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';
import { FiAlertCircle, FiGrid, FiPackage, FiTrendingUp } from 'react-icons/fi';

export const metadata: Metadata = {
    title: 'Inventory',
};

const Page = () => {
    return (
        <>
            <Box as="section">
                <StatsOverview
                    label="Overview"
                    items={[
                        {
                            label: 'Categories',
                            icon: <FiGrid size={32} />,
                            value: 14,
                            color: 'yellow.600',
                        },
                        {
                            label: 'Total Products',
                            icon: <FiPackage size={32} />,
                            value: 868,
                            color: 'blue.600',
                        },
                        {
                            label: 'Top Selling',
                            icon: <FiTrendingUp size={32} />,
                            value: 5,
                            color: 'purple.600',
                        },
                        {
                            label: 'Low Stock',
                            icon: <FiAlertCircle size={32} />,
                            value: 12,
                            color: 'red.600',
                        },
                    ]}
                />
            </Box>

            <Box as="section">
                <DataTable />
            </Box>
        </>
    );
};

export default Page;
