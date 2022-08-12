import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();
    return (
        <IconButton
            aria-label="Toggle theme"
            colorScheme={useColorModeValue("darker", "brighter")}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            borderRadius="full"
        />
    );
};

export default ThemeToggleButton;
