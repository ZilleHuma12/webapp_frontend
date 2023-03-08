import axios from "axios";

const API_URL = 'http://localhost:3001/api/user'


// Register New user
const register = async (userData) => {
  console.log("data in api..", userData);
  const response = await axios.post(`${API_URL}/signup`, userData);
console.log("respoinse", response.data);
  // if (response.data) {
  //   localStorage.setItem("user", JSON.stringify(response.data.token));
  // }
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData)
console.log("response login", response);
  if(response.data){
    localStorage.setItem('user', JSON.stringify(response.data.token))
  }
  return response.data
}
// Login user
const getUser = async (user) => {
  const response = await axios
  .post(`${API_URL}/getuser/${user}`)
console.log("response login", response);
  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authApi = {
    login,
    logout,
    register,
    getUser
}

export default authApi