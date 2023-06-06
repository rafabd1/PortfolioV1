import React from "react";
import { styled, Heading, useColorMode, Button  } from "@chakra-ui/react";

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const txtColor = colorMode.toString()+ ".txtColor"
    
    return(
        <div>
            <h1>{colorMode}</h1>
            <Heading color={txtColor}>HOME</Heading>

        </div>
    )
}

export default Home;