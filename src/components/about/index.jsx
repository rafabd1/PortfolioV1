import React from "react";
import "./style.css";
import { Box,useColorMode, Heading, Text, Highlight  } from "@chakra-ui/react";



const About = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const titleColor = colorMode.toString()+ ".title"
    const subTitleColor = colorMode.toString()+ ".subTitle"
    const bodyColor = colorMode.toString()+ ".body"

    return(
        <Box 
            p={4}
            mb={"8rem"}
            width="70%"
            backdropFilter={'blur(8px)'}
            borderRadius="md"
            border={'1px solid rgba(255, 255, 255, 0.08)'}
        >
            <Text color={bodyColor} fontSize=''>
                <Highlight
                    query={['spotlight', 'njif', 'frff']}
                    styles={{ color: "#F7FAFC", fontWeight: "bold" }}
                >
                    With the Highlight component, you can spotlight words.
                    fqfqkq njndniqw nd njif dvjd njd fvfq frff 
                    odscnsdcjsncisncdji kncsjdnjsdsk cdscnscnscscdcsdcs
                    sdcsd
                    csdcscdsc scsdcscscscsc
                    sdcscscscs
                </Highlight>
            </Text>
            <br/>
            <Text color={bodyColor} fontSize=''>
                <Highlight
                    query={['spotlight', 'njif', 'frff']}
                    styles={{ color: "#F7FAFC", fontWeight: "bold" }}
                >
                    With the Highlight component, you can spotlight words.
                    fqfqkq njndniqw nd njif dvjd njd fvfq frff 
                    csdcscdsc scsdcscscscsc
                    sdcscscscs
                </Highlight>
            </Text>
            <br/>
            <Text color={bodyColor} fontSize=''>
                <Highlight
                    query={['spotlight', 'njif', 'frff']}
                    styles={{ color: "#F7FAFC", fontWeight: "bold" }}
                >
                    With the Highlight component, you can spotlight words.
                    fqfqkq njndniqw nd njif dvjd njd fvfq frff 
                </Highlight>
            </Text>

        </Box>
    )
}

export default About;