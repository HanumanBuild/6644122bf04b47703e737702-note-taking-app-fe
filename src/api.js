import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const signupUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/signup`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};

export const fetchNotes = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/api/notes`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Fetching notes failed:', error);
    throw error;
  }
};