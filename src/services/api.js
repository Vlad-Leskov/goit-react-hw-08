import axios from "axios";

const BASE_URL = "https://connections-api.goit.global";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const fetchContacts = async () => {
  const response = await axios.get(`${BASE_URL}/contacts`);
  return response.data;
};

export const addContact = async (newContact) => {
  const response = await axios.post(`${BASE_URL}/contacts`, newContact);
  return response.data;
};

export const deleteContact = async (contactId) => {
  await axios.delete(`${BASE_URL}/contacts/${contactId}`);
  return contactId;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}/users/signup`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${BASE_URL}/users/login`, userData);
  return response.data;
};

export const logoutUser = async () => {
  await axios.post(`${BASE_URL}/users/logout`);
};
