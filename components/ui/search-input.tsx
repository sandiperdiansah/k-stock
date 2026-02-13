'use client';

import {
    ComboboxContent,
    ComboboxControl,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxRoot,
} from '@/components/ui/combobox';
import { Link } from '@/components/ui/link';
import {
    ComboboxInputProps,
    InputGroup,
    useFilter,
    useListCollection,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { LuSearch } from 'react-icons/lu';

export const SearchInput = ({
    initialItems,
    ...props
}: ComboboxInputProps & {
    initialItems: {
        label: string;
        value: string | number;
        href?: string;
    }[];
}) => {
    const { contains } = useFilter({ sensitivity: 'base' });
    const router = useRouter();

    const { collection, filter } = useListCollection({
        initialItems,
        filter: contains,
    });

    return (
        <ComboboxRoot
            size="sm"
            w={{ base: '3xs', md: 'sm' }}
            collection={collection}
            onInputValueChange={(e) => filter(e.inputValue)}
            selectionBehavior="clear"
            onSelect={(e) => {
                collection.items.map((item) =>
                    item.href && item.value === e.itemValue
                        ? router.push(item.href)
                        : undefined,
                );
            }}
        >
            <ComboboxControl showIndicator={false}>
                <InputGroup startElement={<LuSearch />}>
                    <ComboboxInput {...props} />
                </InputGroup>
            </ComboboxControl>
            <ComboboxContent>
                <ComboboxEmpty>Not found</ComboboxEmpty>

                {collection.items.map((item) =>
                    item.href ? (
                        <Link
                            key={item.value}
                            href={item.href}
                        >
                            <ComboboxItem
                                item={item}
                                cursor="pointer"
                            >
                                {item.label}
                            </ComboboxItem>
                        </Link>
                    ) : (
                        <ComboboxItem
                            key={item.value}
                            item={item}
                            cursor="pointer"
                        >
                            {item.label}
                        </ComboboxItem>
                    ),
                )}
            </ComboboxContent>
        </ComboboxRoot>
    );
};
