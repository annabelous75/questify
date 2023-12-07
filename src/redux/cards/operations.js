import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://questify-backend.goit.global/'; // Замініть на свій базовий URL

// Операція для редагування картки
const editCard = createAsyncThunk('cards/editCard', async ({ cardId, updatedData }) => {
  try {
    const { data } = await axios.patch(`/card/${cardId}`, updatedData);
    return { updatedCard: data }; 
  } catch (error) {
    console.error(error.message);
    throw error;
  }
});

// Операція для видалення картки
const deleteCard = createAsyncThunk('cards/deleteCard', async cardId => {
  try {
    await axios.delete(`/card/${cardId}`);
    return { deletedCardId: cardId }; // Ідентифікатор видаленої картки
  } catch (error) {
    // Обробка помилок
    console.error(error.message);
    throw error;
  }
});

// Операція для отримання всіх карток користувача
const getAllCards = createAsyncThunk('cards/getAllCards', async () => {
  try {
    const { data } = await axios.get('/card');
    return { cards: data }; // Масив усіх карток користувача
  } catch (error) {
    // Обробка помилок
    console.error(error.message);
    throw error;
  }
});

// Операція для позначення картки як завершеної
const completeCard = createAsyncThunk('cards/completeCard', async cardId => {
  try {
    const { data } = await axios.patch(`/card/complete/${cardId}`);
    return { completedCard: data }; // Інформація про позначену як завершену картку
  } catch (error) {
    // Обробка помилок
    console.error(error.message);
    throw error;
  }
});

const cardOperations = {
  editCard,
  deleteCard,
  getAllCards,
  completeCard,
};

export default cardOperations;
