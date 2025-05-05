import axios from 'axios';

export const fetchRandomCatFact = async () => {
    try {
        const response = await axios.get('https://catfact.ninja/fact');
        return response.data.fact;
    } catch (error) {
        console.error('Error fetching cat fact:', error);
        throw new Error('Failed to fetch cat fact');
    }
};