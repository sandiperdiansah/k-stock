import { ItemType } from '@/types';
import { Box, BoxProps, Grid, GridItem, GridProps, Span } from '@chakra-ui/react';

type OverViewProps<T> = BoxProps & {
    label: string;
    items: (Omit<ItemType, 'href'> & {
        value: T;
        color: BoxProps['color'];
        render?: (value: T) => React.ReactNode;
    })[];
    columns?: GridProps['templateColumns'];
};

export const OverView = <T,>({ label, items, columns, ...props }: OverViewProps<T>) => {
    return (
        <Box
            spaceY={6}
            bgColor="white"
            rounded="md"
            p={5}
            pb={6}
            {...props}
        >
            <Span
                display="block"
                fontWeight="semibold"
                color="fg.muted"
                fontSize="lg"
            >
                {label}
            </Span>

            <Grid
                templateColumns={
                    columns
                        ? columns
                        : {
                              base: '1fr',
                              md: '1fr 1fr',
                              lg: '1fr 1fr 1fr 1fr',
                          }
                }
                gap={5}
            >
                {items.map((item, index) => (
                    <GridItem
                        key={index}
                        py={{ base: 4, lg: 2 }}
                        px={4}
                        spaceY={8}
                        borderEndWidth={{ lg: index === items.length - 1 ? 0 : 1 }}
                        borderBottomWidth={{
                            base: index === items.length - 1 ? 0 : 1,
                            md:
                                index === items.length - 1 || index === items.length - 2
                                    ? 0
                                    : 1,
                            lg: 0,
                        }}
                        borderColor="gray.200"
                    >
                        <Box
                            w={16}
                            h={16}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            bgColor={`${item.color}/8`}
                            color={item.color}
                            rounded="md"
                        >
                            {item.icon}
                        </Box>

                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            color="fg.muted"
                        >
                            <Span fontWeight="semibold">
                                {item.render
                                    ? item.render(item.value)
                                    : String(item.value)}
                            </Span>
                            <Span fontSize="sm">{item.label}</Span>
                        </Box>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};
