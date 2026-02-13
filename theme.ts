import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                primary: { value: '#009fd8' },
            },
        },
    },
});

export const system = createSystem(defaultConfig, config);
