import { DataTableSkeleton } from '@/components/data-table';
import { StatsOverviewSkeleton } from '@/components/stats-overview';

const Loading = () => {
    return (
        <>
            <StatsOverviewSkeleton count={4} />
            <DataTableSkeleton />
        </>
    );
};

export default Loading;
