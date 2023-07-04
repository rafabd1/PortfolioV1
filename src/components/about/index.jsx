import React from "react";
import "./style.css";
import { Box } from "@chakra-ui/react";

const About = () => {
    return(
        <Box 
            p={4}
            marginBottom={20}
            width="70%"
        >
            <h1>About</h1>
            <p>
                I'm a software developer from Brazil. I'm currently working at <a href="https://www.avenuecode.com/" target="_blank" rel="noreferrer">Avenue Code</a> as a Frontend Developer.
            </p>
            <p>
                I'm passionate about technology and I'm always looking for new challenges and opportunities to learn something new.
            </p>
            <p>
                I'm currently working with ReactJS, React Native and NodeJS.
            </p>
        </Box>
    )
}

export default About;