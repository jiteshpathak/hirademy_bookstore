import axios from 'axios';

const API_BASE_URL = 'https://softwium.com/api';

export const getAllBooks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/books`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getBookById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/books/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
