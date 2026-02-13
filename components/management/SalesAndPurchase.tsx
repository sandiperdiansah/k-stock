'use client';

import { Box, Span } from '@chakra-ui/react';

import { Chart, useChart } from '@chakra-ui/charts';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export const SalesAndPurchase = () => {
    const chart = useChart({
        data: [
            { month: 'Jan', purchase: 55000, sales: 49000 },
            { month: 'Feb', purchase: 58000, sales: 47000 },
            { month: 'Mar', purchase: 45000, sales: 52000 },
            { month: 'Apr', purchase: 37000, sales: 43000 },
            { month: 'May', purchase: 44000, sales: 46000 },
            { month: 'Jun', purchase: 28000, sales: 41000 },
        ],
        series: [
            { name: 'purchase', color: '#60A5FA' },
            { name: 'sales', color: '#4ADE80' },
        ],
    });

    return (
        <Box
            spaceY={6}
            bgColor="white"
            rounded="md"
            pb={{ base: 5, lg: 0 }}
            ps={{ base: 2, lg: 0 }}
        >
            <Box
                p={5}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Span
                    fontWeight="semibold"
                    color="fg.muted"
                    fontSize="lg"
                >
                    Sales & Purchase
                </Span>
            </Box>

            <Box p={{ lg: 5 }}>
                <Chart.Root
                    chart={chart}
                    maxH="300px"
                >
                    <BarChart
                        data={chart.data}
                        barGap={8}
                    >
                        <CartesianGrid
                            vertical={false}
                            stroke="#E5E7EB"
                        />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                        />
                        <Tooltip content={<Chart.Tooltip />} />
                        <Legend
                            verticalAlign="bottom"
                            align="left"
                            content={<Chart.Legend />}
                        />
                        <defs>
                            <linearGradient
                                id="purchase"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#60A5FA"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#3B82F6"
                                />
                            </linearGradient>

                            <linearGradient
                                id="sales"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#4ADE80"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#22C55E"
                                />
                            </linearGradient>
                        </defs>
                        <Bar
                            dataKey="purchase"
                            fill="url(#purchase)"
                            radius={[6, 6, 0, 0]}
                            barSize={16}
                        />
                        <Bar
                            dataKey="sales"
                            fill="url(#sales)"
                            radius={[6, 6, 0, 0]}
                            barSize={16}
                        />
                    </BarChart>
                </Chart.Root>
            </Box>
        </Box>
    );
};
