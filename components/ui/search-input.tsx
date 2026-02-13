import { Input, InputGroup, InputProps } from '@chakra-ui/react';
import { LuSearch } from 'react-icons/lu';

export const SearchInput = ({ ...props }: InputProps) => {
    return (
        <InputGroup startElement={<LuSearch />}>
            <Input
                minW={{ md: 'sm' }}
                {...props}
            />
        </InputGroup>
    );
};
