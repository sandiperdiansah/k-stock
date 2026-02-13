'use client';

import { Chart, useChart } from '@chakra-ui/charts';
import { Box, Span } from '@chakra-ui/react';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export const OrderSummary = () => {
    const chart = useChart({
        data: [
            { month: 'Jan', ordered: 3800, delivered: 3000 },
            { month: 'Feb', ordered: 1600, delivered: 3500 },
            { month: 'Mar', ordered: 2500, delivered: 3300 },
            { month: 'Apr', ordered: 1400, delivered: 3600 },
            { month: 'May', ordered: 2200, delivered: 3400 },
        ],
        series: [
            { name: 'ordered', color: '#F59E0B' },
            { name: 'delivered', color: '#60A5FA' },
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
            <Box p={5}>
                <Span
                    fontWeight="semibold"
                    color="fg.muted"
                    fontSize="lg"
                >
                    Order Summary
                </Span>
            </Box>

            <Box p={{ lg: 5 }}>
                <Chart.Root
                    chart={chart}
                    maxH="300px"
                >
                    <AreaChart data={chart.data}>
                        <defs>
                            <linearGradient
                                id="ordered"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#F59E0B"
                                    stopOpacity={0.4}
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#F59E0B"
                                    stopOpacity={0}
                                />
                            </linearGradient>

                            <linearGradient
                                id="delivered"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#60A5FA"
                                    stopOpacity={0.4}
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#60A5FA"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            vertical={false}
                            stroke="#E5E7EB"
                        />

                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip content={<Chart.Tooltip />} />
                        <Legend
                            verticalAlign="bottom"
                            align="left"
                            content={<Chart.Legend />}
                        />

                        <Area
                            type="monotone"
                            dataKey="ordered"
                            stroke="#F59E0B"
                            fill="url(#ordered)"
                            strokeWidth={2}
                        />

                        <Area
                            type="monotone"
                            dataKey="delivered"
                            stroke="#60A5FA"
                            fill="url(#delivered)"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </Chart.Root>
            </Box>
        </Box>
    );
};
