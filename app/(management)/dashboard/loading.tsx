import { StatsOverviewSkeleton } from '@/components/stats-overview';
import { Grid, GridItem } from '@chakra-ui/react';

const Loading = () => {
    return (
        <>
            <Grid
                as="section"
                templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
                gap={5}
            >
                <GridItem>
                    <StatsOverviewSkeleton count={4} />
                </GridItem>
                <GridItem>
                    <StatsOverviewSkeleton count={2} />
                </GridItem>
            </Grid>

            <Grid
                as="section"
                templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
                gap={5}
            >
                <GridItem>
                    <StatsOverviewSkeleton count={4} />
                </GridItem>
                <GridItem>
                    <StatsOverviewSkeleton count={2} />
                </GridItem>
            </Grid>
        </>
    );
};

export default Loading;
