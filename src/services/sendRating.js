import { API_BASE_URL } from "../config";

export const sendRating = async (id, rating) => {
    try {
      const URL = `${API_BASE_URL}/api/pokemon/add`;
      const data = {
        id: id,
        rating: rating,
      };
  
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        });
  
      if (!response.ok) {
        throw new Error('Request failed')
      }
    } catch (error) {
      throw new Error('Fetch error: ' + error);
    }
  };
  