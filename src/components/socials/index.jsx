import React from "react";
import './style.css';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IconButton } from '@chakra-ui/react'


const Socials = () => {

    return(
        <div className="socials">
            <IconButton 
                fontSize={"2rem"}
                variant={"ghost"}
                aria-label='Github' 
                icon={<AiFillGithub />} 
                onClick={() => window.open("https://github.com/Rafael-BD")}
            />
            <IconButton 
                marginX={"0.5rem"}
                fontSize={"2rem"}
                variant={"ghost"}
                aria-label='Linkedin' 
                icon={<AiFillLinkedin />} 
                onClick={() => window.open("https://www.linkedin.com/in/rafael-b-990835209/")}
            />
        </div>
    )
}

export default Socials;