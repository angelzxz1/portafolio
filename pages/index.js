import {
    Box,
    Container,
    Heading,
    useColorModeValue,
    Image,
    Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Section from "../components/section";
const Page = (props) => {
    return (
        <Container>
            <Section>
                <Box display={{ md: "flex" }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Angel Zuñiga
                        </Heading>
                        <p>MAGEN {`( <Developer /> <Musician /> ) `}</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha"
                            borderWidth={2}
                            borderStyle="solid"
                            maxW="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/angel.jpg"
                            alt="Profile Picture"
                        />
                    </Box>
                </Box>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue("brighter.100", "darker.50")}
                    p={3}
                    align="center"
                    mb={6}
                >
                    Hello, I'm a full-stack developer based in Colombia
                </Box>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    About
                </Heading>
                <Box as="p" textAlign="justify">
                    Angel is a freelance and full-stack developer currently
                    living in Barranquilla, Colombia. Passionated ande dedicated
                    to create and build tools to better improve user experience
                    in different areas, and creating things sometimes just for
                    fun. All the things that he has created are based on the
                    "what if..." On his free time he loves to play guitar and
                    create songs from any genre. He also loves to read and write
                    about technology and the world of programming. He has
                    recently created an instagram page where he shares his
                    creations and experiences, called{" "}
                    <Link href="https://www.instagram.com/magen.dev" isExternal>
                        @magen.dev <ExternalLinkIcon mx="2px" />
                    </Link>
                    .
                </Box>
            </Section>
            <Section delay={0.6}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <p>text</p>
            </Section>
        </Container>
    );
};

export default Page;
