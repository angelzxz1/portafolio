import { ChakraProvider } from "@chakra-ui/react";
import Main from "../components/layouts/main";
import theme from "../lib/theme";
import Fonts from "../components/fonts";
const WebSite = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Main router={router}>
                <Component {...pageProps} />
            </Main>
        </ChakraProvider>
    );
};
export default WebSite;
