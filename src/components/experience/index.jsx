import React from "react";
import { SimpleGrid, Box, Link, Heading, Text, useColorMode, Divider } from '@chakra-ui/react';
import {
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Projects = () => {
    const [jobs, setJobs] = React.useState([
        {"date": "Dez/2021 - Dez/2022",
        "company": "Prefeitura de São José dos Campos",
        "role": "Estagiário",
        "description": "Acompanhamento de projetos de manutenção de sistemas, rede e equipamentos, suporte ao usuário, entre outras atividades.",
        "technologies": []}
    ]);

    const { colorMode, toggleColorMode } = useColorMode()
    const titleColor = colorMode.toString()+ ".title"
    const bodyColor = colorMode.toString()+ ".body"
    const titleB = colorMode.toString()+ ".titleB"
    const tag = colorMode.toString()+ ".tag"
    
    return (
        <div className="jobs">
            <SimpleGrid columns={1} spacing={5}>
                <Divider width={"70%"} mb={5}/>
                {jobs.map((job) => (
                    <Box  mb={"4"} key={job}>
                        <Box p={1}>
                            <Text color={titleColor} fontSize={'xs'}>{job.date}</Text>
                        </Box>
                        <Box         
                            p={4}
                            width={'70%'}
                            borderRadius="md"
                            overflow="hidden"
                            border={'1px solid rgba(255, 255, 255, 0.08)'}
                            transition="background-color 0.2s, border-color 0.2s"
                            backdropFilter={'blur(8px)'}
                            backgroundColor= {'rgba(255, 255, 255, 0.08)'}            
                        >
                            <Heading as={'h3'} size={"sm"} mb={1} color={titleB}>
                                {job.role} - {job.company}
                            </Heading>
                            <Text color={bodyColor} fontSize='md'>
                                {job.description}
                            </Text>
                            {
                                job.technologies.length > 0 && job.technologies.map((tech) => (
                                    <Tag
                                    size={'md'}
                                    key={tech}
                                    borderRadius='full'
                                    variant='solid'
                                    backgroundColor= 'rgba(255, 255, 255, 0.1)'
                                    marginRight={1}
                                    mt={3}
                                    >
                                        <TagLabel color={tag}>{tech}</TagLabel>
                                    </Tag>
                                ))
                            }
                        </Box>
                    </Box>           
                ))}
              <Link display={"flex"} alignItems={"center"} href="https://www.linkedin.com/in/rafael-b-990835209/" target="_blank">
                <Text fontSize={"xl"} mt={5} color={titleColor}>
                  Veja mais no meu perfil do Linkedin
                </Text>
                <ArrowForwardIcon mt={5} ml={2} w={6} h={6} color={bodyColor}/>
              </Link>
              <Box mb={10}></Box>
            </SimpleGrid>
        </div>
      );

}

export default Projects;