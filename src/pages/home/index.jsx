import React, {useEffect, useState} from "react";
import { Box, Heading, useColorMode, Button, Text  } from "@chakra-ui/react";
import Title from "../../components/title";
import "./style.css";
import Socials from "../../components/socials";
import Projects from "../../components/projects";

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
          const mediaQuery = window.matchMedia('(max-width: 768px)');
          setIsMobile(mediaQuery.matches);
        };
    
        checkIsMobile(); // Verificar inicialmente
    
        // Adicionar listener para verificar quando a tela for redimensionada
        window.addEventListener('resize', checkIsMobile);
    
        // Limpar listener quando o componente for desmontado
        return () => {
          window.removeEventListener('resize', checkIsMobile);
        };
      }, []);
    
    return(
        <div>
            <div className="main">
            <Title />
            <Socials />
            {!isMobile ? <Projects /> : null}
            </div>
            {isMobile ? <Projects /> : null}

            
        </div>
        
    )
}

export default Home;