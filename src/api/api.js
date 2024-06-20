import axios from "axios";

export const fetchDentists = async () => {
  try {
    const resultado = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return resultado.data;
  } catch (error) {
    console.error("Error fetching dentists:", error);
    throw error;
  }
};