import axios from "axios";

const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRAPI_APP_KEY,
  },
};

const baseURL = process.env.REACT_APP_DEV_URL;

export const api = axios.create({
  baseURL,
  params,
});

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const makePaymentRequest = axios.create({
  baseURL,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_STRAPI_APP_KEY,
  },
});
