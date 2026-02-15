'use client';

import { DataTable, DataTableProps } from '@/components/data-table';
import { formattedCurrency } from '@/utils/formatted';

export type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
};

const columns: DataTableProps<Product>['columns'] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'category',
        header: 'Category',
    },
    {
        accessorKey: 'price',
        header: 'Price',
        cell: ({ cell, row }) =>
            formattedCurrency(row.original.price, { locales: 'id-ID', style: 'decimal' }),
    },
    {
        accessorKey: 'stock',
        header: 'Stock',
    },
];

export const Table = ({ data }: { data?: Product[] }) => {
    const products = Array.from({ length: 30 }).map((_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        category: `Category ${index + 1}`,
        price: (index + 1) * 10000,
        stock: (index + 1) * 5,
    }));

    return (
        <DataTable
            data={products}
            columns={columns}
        />
    );
};
