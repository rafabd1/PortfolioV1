import { request } from 'graphql-request';
import { extractTechnologies } from '../utils/extractTechnologies';

const endpoint = 'http://localhost:3001/graphql';

export const getRepositories = async () => {
    const query = `
    query {
        repos {
            name
            description
            url
            createdAt
            primaryLanguage
        }
    }
    `;

    try {
        const data = await request(endpoint, query);     
        const repos = [] 
        data.repos.map((repo, index) => {
            repos.push({
                name: repo.name,
                description: repo.description,
                url: repo.url,
                createdAt: repo.createdAt,
                primaryLanguage: repo.primaryLanguage,
                technologies: extractTechnologies(repo)
            })
        });
        return repos;
    } 
    catch (error) {
        console.log('Falha ao obter os repositórios');
    } 
};

