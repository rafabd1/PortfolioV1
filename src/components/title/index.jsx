import React from "react";
import { Box, Heading, useColorMode, Button, Text  } from "@chakra-ui/react";
import "./style.css";

const Title = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const titleColor = colorMode.toString()+ ".title"
    const subTitleColor = colorMode.toString()+ ".subTitle"
    const bodyColor = colorMode.toString()+ ".body"

    return(
        <div className="title">
            <Box 
                maxW='25rem'
                p={4}
                backdropFilter={'blur(8px)'}
                borderRadius="md"
                border={'1px solid rgba(255, 255, 255, 0.08)'}
                backgroundColor= {'rgba(255, 255, 255, 0.08)'}     
            >
                <Heading color={titleColor} mb={0}>Rafael Bettini Dias</Heading>
                <Heading color={subTitleColor} as='h4' size={"md"} mb={4}>Desenvolvedor Node Js</Heading>
                <Text color={bodyColor} fontSize=''>
                    Desenvolvedor Node.js júnior em busca de oportunidades na área de desenvolvimento web e mobile.
                </Text>
            </Box>
        </div>
    )
}

export default Title;