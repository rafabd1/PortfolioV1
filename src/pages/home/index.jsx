import React, {useEffect, useState, useRef} from "react";
import { Box, Heading, useColorMode, Button, Text  } from "@chakra-ui/react";
import { MinusIcon } from '@chakra-ui/icons'
import { Scrollama, Step } from 'react-scrollama';
import Title from "../../components/title";
import "./style.css";
import Socials from "../../components/socials";
import Projects from "../../components/projects";
import About from "../../components/about";
import Experience from "../../components/experience";



const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [isMobile, setIsMobile] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [lastStep, setLastStep] = useState(0);
    const [offset, setOffset] = useState(0.3);


    useEffect(() => {
        const checkIsMobile = () => {
          const mediaQuery = window.matchMedia('(max-width: 768px)');
          setIsMobile(mediaQuery.matches);
        };
        checkIsMobile();
    
        window.addEventListener('resize', checkIsMobile);
    
        return () => {
          window.removeEventListener('resize', checkIsMobile);
        };
      }, []);

    const onStepEnter = ({ data }) => {
      setCurrentStep(data);
      if(data == 1 && lastStep == 0){
        setOffset(0.9);
      }
    };

    const onStepExit = ({ data }) => {
      setLastStep(data);
      if(currentStep == 2){
        setOffset(0.3);
      }
    };
    
    return(
        <div>
            <div className="main">
              <Title />
              <Box>
                <div
                  className="line"
                  style={{top: '40%', width: `${currentStep == 0 ? 5 : 2}%` }}
                ><span className="text" style={{left: `${currentStep == 0 ? 25.3 : 22.3}%`}}>SOBRE</span></div>
                <div
                  className="line"
                  style={{top: '45%', width: `${currentStep == 1 ? 5 : 2}%` }}
                  ><span className="text" style={{left: `${currentStep == 1 ? 25.3 : 22.3}%`}}>PROJETOS</span></div>
                <div
                  className="line"
                  style={{top: '50%', width: `${currentStep == 2 ? 5 : 2}%` }}
                  ><span className="text" style={{left: `${currentStep == 2 ? 25.3 : 22.3}%`}}>EXPERIÊNCIA</span></div>
              </Box>
              <Socials />
              <div className="content">
                <Scrollama offset={offset}  onStepEnter={onStepEnter} onStepExit={onStepExit}>
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
                  <Step data={2} key={2}>
                    <div>
                      {!isMobile ? <Experience /> : null}
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