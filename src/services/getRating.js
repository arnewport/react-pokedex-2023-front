import { API_BASE_URL } from "../config";

export const getRating = async (id) => {
    try {
        const URL = `${API_BASE_URL}/api/pokemon/rating/` + id;
    
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Request failed')
        }

        const rating = await response.text();
        return parseFloat(rating);

      } catch (error) {
        throw new Error('Fetch error: ' + error);
      }
}