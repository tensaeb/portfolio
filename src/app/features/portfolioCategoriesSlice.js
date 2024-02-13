import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  portfolioCatData: null,
  loading: false,
  error: null,
};

// const url = "http://localhost:7654/portfolio-categories";
const url = `${import.meta.env.VITE_API_URL}portfolio-categories`;

export const fetchPortfolioCatData = createAsyncThunk(
  "portfolioCategories",
  async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const portfolioCatData = await response.json();
      return portfolioCatData;
    } catch (error) {
      console.error("Error fetching Personal Info data:", error.message);
      throw error; // Re-throw the error so it goes to the rejected action
    }
  }
);

const portfolioCategorySlice = createSlice({
  name: "portfolioCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioCatData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPortfolioCatData.fulfilled, (state, action) => {
        state.loading = false;
        state.portfolioCatData = action.payload.data;
      })
      .addCase(fetchPortfolioCatData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default portfolioCategorySlice.reducer;
