// api.js
import axios from 'axios';

const baseURL = 'https://questify-backend.goit.global';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  register: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/login', userData);
      return response.data;
      
    } catch (error) {
      console.error('Помилка автентифікації:', error);
      throw error;
    }
  },
  
  

  logout: async () => {
    try {
      await axiosInstance.post('/auth/logout');
    } catch (error) {
      throw error;
    }
  },

 
   refreshTokens: async (sid) => {
  try {
    const response = await axiosInstance.post('/auth/refresh', { sid });
    return response.data; 
  } catch (error) {
    throw error;
  }
   },


   createCard: async (cardData) => {
    try {
      const response = await axiosInstance.post('/card', cardData, {
        headers: {
          'Content-Type': 'application/json',
          // You may need to include additional headers if required by the server
        },
      });
  
      console.log('Response:', response);
  
      if (response.status === 201) {
        // Successful operation, return the created card
        return response.data.createdCard;
      } else {
        // Handle other status codes if needed
        console.error('Unexpected status code:', response.status);
        throw new Error('Unexpected status code');
      }
    } catch (error) {
      // Handle request error
      console.error('Error:', error.message);
      console.error('Response Data:', error.response.data);
      throw error;
    }
  },
  
  

  editCard: async (cardId, cardData) => {
    try {
      const response = await axiosInstance.patch(`/card/${cardId}`, cardData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteCard: async (cardId) => {
    try {
      await axiosInstance.delete(`/card/${cardId}`);
    } catch (error) {
      throw error;
    }
  },

  getCards: async () => {
    try {
      // Отримайте токен аутентифікації з вашого місця зберігання (наприклад, локальні сховища або cookies)
      const authToken = 'your_auth_token'; // Замініть це значення на реальний токен
  
      const response = await axiosInstance.get('/card', {
        headers: {
          Authorization: `Bearer ${authToken}`,
          // Інші необхідні заголовки можуть бути додані тут
        },
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  completeCard: async (cardId) => {
    try {
      const response = await axiosInstance.patch('/card/complete', { cardId });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default api;
