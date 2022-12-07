import Section from "../../components/section";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
const Page = () => {
    return (
        <Section>
            <h1>
                Page is still under construction, however here you'll see posts
                from{" "}
                <Link href="https://www.instagram.com/magen.develop" isExternal>
                    @magen.develop <ExternalLinkIcon mx="2px" />
                </Link>
            </h1>
        </Section>
    );
};
export default Page;
