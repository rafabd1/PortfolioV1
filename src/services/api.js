import { request } from 'graphql-request';

const endpoint = 'http://localhost:3001/graphql';

export const getRepositories = async () => {
    const query = `
        query {
            repos {
            name
            description
            url
            }
        }
    `;

    try {
        const data = await request(endpoint, query);
        return data.repos;
    } 
    catch (error) {
        console.log('Falha ao obter os repositórios');
    }
    
};
