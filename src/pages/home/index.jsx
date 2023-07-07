import React, {useEffect, useState} from "react";
import { Box, Heading, useColorMode, Button, Text  } from "@chakra-ui/react";
import { MinusIcon } from '@chakra-ui/icons'
import { Scrollama, Step } from 'react-scrollama';
import Title from "../../components/title";
import "./style.css";
import Socials from "../../components/socials";
import Projects from "../../components/projects";
import About from "../../components/about";


const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [isMobile, setIsMobile] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

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

    const onStepEnter = ({ data }) => {
      setCurrentStep(data);
      console.log(data);
    };
    
    return(
        <div>
            <div className="main">
              <Title />
              <Box>
                <div
                  className="line"
                  style={{top: '40%', width: `${currentStep == 0 ? 5 : 2}%` }}
                />
                <div
                  className="line"
                  style={{top: '45%', width: `${currentStep == 1 ? 5 : 2}%` }}
                />
                <div
                  className="line"
                  style={{top: '50%', width: `${currentStep == 2 ? 5 : 2}%` }}
                />
              </Box>
              <Socials />
              <div className="content">
                <Scrollama offset={0.3} onStepEnter={onStepEnter}>
                  <Step data={0} key={0}>
                    <div>
                      <About />
                    </div>       
                  </Step>
                  <Step data={1} key={1}>
                    <div>
                      {!isMobile ? <Projects /> : null}
                    </div>      
                  </Step>         
                </Scrollama>
              </div>
              
            </div>
            {isMobile ? <Projects /> : null}

            
        </div>
        
    )
}

export default Home;