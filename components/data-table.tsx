'use client';

import {
    Box,
    Button,
    ButtonGroup,
    IconButton,
    Input,
    InputGroup,
    Pagination,
    Skeleton,
    Span,
    Table,
    TableRootProps,
} from '@chakra-ui/react';
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    PaginationState,
    useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { LuChevronLeft, LuChevronRight, LuListFilter, LuSearch } from 'react-icons/lu';

export type DataTableProps<T> = Omit<TableRootProps, 'children'> & {
    data: T[];
    columns: ColumnDef<T>[];
    form?: React.ReactNode;
    allowToastNotification?: boolean;
};

export const DataTable = <T,>({ data, columns, ...props }: DataTableProps<T>) => {
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });

    const table = useReactTable({
        data,
        columns,
        state: { pagination },
        onPaginationChange: setPagination,
        manualPagination: true,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    if (!data) {
        return <p>loading....</p>;
    }

    return (
        <Box
            p={5}
            rounded="md"
            bg="white"
            display="flex"
            flexDir="column"
            gap={6}
        >
            {/* header */}
            <Box
                as="header"
                display="flex"
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems={{ base: 'stretch', md: 'center' }}
                justifyContent="space-between"
                gapY={2}
            >
                <Box
                    order={{ base: 2, md: 1 }}
                    display="flex"
                    alignItems="center"
                    gap={{ base: 2, md: 3 }}
                >
                    <InputGroup startElement={<LuSearch />}>
                        <Input
                            w={{ base: 'full', md: 'xs' }}
                            name="search"
                            placeholder="search"
                        />
                    </InputGroup>
                    <IconButton
                        variant="outline"
                        color="fg.muted"
                        aria-label="filter table"
                        flexShrink={0}
                    >
                        <LuListFilter />
                    </IconButton>
                </Box>
                <Box
                    order={{ base: 1, md: 2 }}
                    display="flex"
                    alignItems="center"
                    gap={{ base: 2, md: 3 }}
                >
                    <Button
                        variant="outline"
                        aria-label="export data table"
                    >
                        Export
                    </Button>
                    <Button
                        aria-label="add data table"
                        colorPalette="cyan"
                    >
                        Add
                    </Button>
                </Box>
            </Box>

            {/* table */}
            <Box minH="3xs">
                <Table.Root
                    variant="outline"
                    interactive
                    native
                    css={{
                        rounded: 'sm',
                        overflow: 'hidden',
                        '& th': { px: 4, fontSize: 'md' },
                        '& td': { px: 4, fontSize: 'sm' },
                    }}
                    {...props}
                >
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef.header,
                                                  header.getContext(),
                                              )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext(),
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table.Root>
            </Box>

            {/* pagination */}
            <Box
                as="footer"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Span>
                    Page {pagination.pageIndex + 1} of {table.getPageCount()}
                </Span>

                <Pagination.Root
                    count={data.length}
                    pageSize={pagination.pageSize}
                    page={pagination.pageIndex + 1}
                    onPageChange={(e) => table.setPageIndex(e.page - 1)}
                >
                    <ButtonGroup
                        variant="ghost"
                        size="sm"
                        wrap="wrap"
                    >
                        <Pagination.PrevTrigger asChild>
                            <IconButton disabled={!table.getCanPreviousPage()}>
                                <LuChevronLeft />
                            </IconButton>
                        </Pagination.PrevTrigger>

                        <Pagination.Items
                            render={(page) => (
                                <IconButton
                                    variant={{ base: 'ghost', _selected: 'outline' }}
                                    onClick={() => table.setPageIndex(page.value - 1)}
                                >
                                    {page.value}
                                </IconButton>
                            )}
                        />

                        <Pagination.NextTrigger asChild>
                            <IconButton disabled={!table.getCanNextPage()}>
                                <LuChevronRight />
                            </IconButton>
                        </Pagination.NextTrigger>
                    </ButtonGroup>
                </Pagination.Root>
            </Box>
        </Box>
    );
};

export const DataTableSkeleton = () => {
    return (
        <Box as="section">
            <Skeleton h={8} />
        </Box>
    );
};
