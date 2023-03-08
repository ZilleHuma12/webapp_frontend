import axios from "axios";

const API_URL = "http://localhost:3001/api/products";

// Add New Product
const addProduct = async (data) => {
  const response = await axios.post(`${API_URL}/addproduct`, data);

  return response.data;
};

// Get All Products
const getProdcuts = async () => {
  const response = await axios.get(`${API_URL}/getproducts`);

  return response.data;
};

const productApi = {
  addProduct,
  getProdcuts,
};

export default productApi;
