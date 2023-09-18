import React from "react";
import { Box,useColorMode, Heading, Text, Highlight  } from "@chakra-ui/react";


const About = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bodyColor = colorMode.toString()+ ".body"

    return(
        <Box 
            p={4}
            mb={"8rem"}
            width="70%"
            backdropFilter={'blur(8px)'}
            borderRadius="md"
            border={'1px solid rgba(255, 255, 255, 0.08)'}
            backgroundColor= {'rgba(255, 255, 255, 0.08)'}     
        >
            <Text color={bodyColor} fontSize=''>
                <Highlight
                    query={['React Native', 'Java', 'React', 'Python', 'Inteligência Artificial']}
                    styles={{ color: "#F7FAFC", fontWeight: "bold" }}
                >
                    Tenho experiência em desenvolvimento de aplicativos móveis utilizando React Native, assim como programação web com Java, VueJs e principalmente React. 
                    Também possuo conhecimentos básicos em Python na área de Data Science e Inteligência Artificial.
                </Highlight>
            </Text>
            <br/>
            <Text color={bodyColor} fontSize=''>
                <Highlight
                    query={['']}
                    styles={{ color: "#F7FAFC", fontWeight: "bold" }}
                >
                    Abaixo estão alguns projetos que desenvolvi e que estão disponíveis no meu GitHub.
                </Highlight>
            </Text>

        </Box>
    )
}

export default About;