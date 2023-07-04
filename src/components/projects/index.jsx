import React from "react";
import { SimpleGrid, Box, Link, Skeleton, Stack } from '@chakra-ui/react';
import { getRepositories } from "../../services/api";
import "./style.css";

const Projects = () => {
    const [repositories, setRepositories] = React.useState([]);

    React.useEffect(() => {
        const fetchRepositories = async () => {
          const fetchedRepositories = await getRepositories();
          setRepositories(fetchedRepositories);
          console.log(fetchedRepositories);
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
              {repositories.map((repo) => (
                <Link
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  textDecoration="none"
                  _hover={{ textDecoration: 'none' }}
                  width="70%"
                >
                  <Box         
                    p={4}
                    borderRadius="md"
                    overflow="hidden"
                    transition="background-color 0.2s, border-color 0.2s"
                    _hover={{ 
                      backdropFilter: 'blur(8px)', 
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      
                      }}
                  >
                    <h3>{repo.name}</h3>
                    <p>{repo.description}</p>
                  </Box>
                </Link>
              ))}
            </SimpleGrid>
          ) 
          : (
            <Stack>
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
            </Stack>
          )}
        </div>
      );

}

export default Projects;