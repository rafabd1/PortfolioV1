import React from "react";
import { format, set } from 'date-fns';
import { SimpleGrid, Box, Link, Skeleton, Stack, Heading, Text, useColorMode, Divider } from '@chakra-ui/react';
import {
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { getRepositories } from "../../services/api";
import Activity from "../../components/activity";

const Projects = () => {
    const [repositories, setRepositories] = React.useState([]);
    const { colorMode, toggleColorMode } = useColorMode()
    const titleColor = colorMode.toString()+ ".title"
    const bodyColor = colorMode.toString()+ ".body"
    const titleB = colorMode.toString()+ ".titleB"
    const tag = colorMode.toString()+ ".tag"

    React.useEffect(() => {
        const fetchRepositories = async () => {
          const fetchedRepositories = await getRepositories();
          setRepositories(fetchedRepositories);
        };
      
        if (!repositories || repositories.length === 0) {
          fetchRepositories();
        }
      }, []);
    
    return (
        <div className="projects">
          {
          repositories.length > 0 ? (
            <SimpleGrid columns={1} spacing={5}>
              <Divider width={"70%"} mb={5}/>
              {repositories.map((repo) => (
                <Link
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  textDecoration="none"
                  _hover={{ textDecoration: 'none' }}
                  width="70%"
                >
                  <Box display={"flex"} mb={"3"}>
                    <Box p={2}>
                      <Text color={titleColor} fontSize={'xs'}>{format(new Date(repo.createdAt), 'MMM/yyyy')}</Text>
                    </Box>
                    <Box         
                      p={4}
                      width={'100%'}
                      borderRadius="md"
                      overflow="hidden"
                      border={'1px solid rgba(255, 255, 255, 0.08)'}
                      transition="background-color 0.2s, border-color 0.2s"
                      backdropFilter={'blur(8px)'}
                      _hover={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',                 
                        }}
                    >
                      <Heading as={'h3'} size={"sm"} mb={1} color={titleB}>
                        {repo.name}
                      </Heading>
                      <Text color={bodyColor} fontSize='md'>
                        {repo.description}
                      </Text>
                      {
                        repo.technologies.length > 0 && repo.technologies.map((tech) => (
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
                  
                </Link>
              ))}
              <Box mt={6} display={"flex"}>
                  <Box ml={"9%"}/>
                  <Activity />
                </Box>
              
              <Link display={"flex"} alignItems={"center"} href="https://github.com/Rafael-BD?tab=repositories" target="_blank">
                <Text fontSize={"xl"} mt={5} color={titleColor}>
                  Veja mais no meu repositório do GitHub
                </Text>
                <ArrowForwardIcon mt={5} ml={2} w={6} h={6} color={bodyColor}/>            
              </Link>
              <Box mb={10}></Box>
            </SimpleGrid>
          ) 
          : (
            <Stack>
              <Skeleton height='20px' width='500px'/>
              <Skeleton height='20px' width='500px'/>
              <Skeleton height='20px' width='500px'/>
              <br/>
              <Skeleton height='20px' width='500px'/>
              <Skeleton height='20px' width='500px'/>
              <Skeleton height='20px' width='500px'/>
              <br/>
              <Skeleton height='20px' width='500px'/>
              <Skeleton height='20px' width='500px'/>
              <Skeleton height='20px' width='500px'/>           
            </Stack>
            
          )}
        </div>
      );

}

export default Projects;