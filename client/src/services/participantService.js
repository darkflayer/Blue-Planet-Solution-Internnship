import axios from 'axios';

const API_URL = 'http://localhost:5000/api/participants';

export const registerParticipant = async (data) => {
    return await axios.post(`${API_URL}/register`, data);
};

export const getAllParticipants = async () => {
    return await axios.get(API_URL);
};
