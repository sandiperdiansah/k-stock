import { Avatar } from '@/components/ui/avatar';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu';

export const UserAvatar = () => {
    return (
        <MenuRoot positioning={{ placement: 'bottom-start' }}>
            <MenuTrigger
                rounded="full"
                focusRing="outside"
                cursor="pointer"
                aria-label="Show avatar menu"
            >
                <Avatar
                    name={process.env.NEXT_PUBLIC_IMAGE_FALLBACK_NAME}
                    src="https://placehold.co/200x200"
                />
            </MenuTrigger>
            <MenuContent w="3xs">
                <MenuItem value="account">Account</MenuItem>
                <MenuItem value="settings">Settings</MenuItem>
                <MenuItem value="logout">Logout</MenuItem>
            </MenuContent>
        </MenuRoot>
    );
};
