import React from "react";
import { getRepositories } from "../../services/api";

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
        <div>
          {
          repositories.length > 0 ? (
            <ul>
              {}
            </ul>
          ) 
          : (
            <p>A lista de repositórios está vazia.</p>
          )}
        </div>
      );

}

export default Projects;