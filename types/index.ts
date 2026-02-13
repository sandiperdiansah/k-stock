import { BoxProps } from '@chakra-ui/react';

export type ItemType = {
    label?: string;
    href?: string;
    icon?: React.ReactNode;
};

export type OverViewType = {
    items: (Omit<ItemType, 'href'> & {
        total: number;
        color: BoxProps['color'];
    })[];
};
