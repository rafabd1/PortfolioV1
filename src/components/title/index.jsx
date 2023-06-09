import React from "react";
import { Box, Heading, useColorMode, Button, Text  } from "@chakra-ui/react";
import "./style.css";

const Title = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const txtColor = colorMode.toString()+ ".txtColor"

    return(
        <div className="title">
            <Box maxW='20rem'>
                <Heading color={txtColor} mb={0}>Rafael Bettini Dias</Heading>
                <Heading color={txtColor} as='h4' size={"md"} mb={4}>Desenvolvedor React</Heading>
                <Text color={txtColor} fontSize='xl'>
                    fqfqkq njndniqw nd njif dvjd njd fvfq frff 
                </Text>
            </Box>
        </div>
    )
}

export default Title;