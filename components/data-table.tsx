'use client';

import { Box, BoxProps, Button, IconButton, Input, InputGroup } from '@chakra-ui/react';
import { LuListFilter, LuSearch } from 'react-icons/lu';

export const DataTable = ({ ...props }: BoxProps) => {
    return (
        <Box
            p={5}
            rounded="md"
            bg="white"
            display="flex"
            flexDir="column"
            gap={6}
            {...props}
        >
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

            <Box minH="3xs"></Box>
            <Box as="footer">ok</Box>
        </Box>
    );
};
