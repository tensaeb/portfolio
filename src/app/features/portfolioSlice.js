import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  portfolioData: null,
  loading: false,
  error: null,
};

const url = "http://localhost:7654/portfolios";
// const url = import.meta.env.API_URL;

export const fetchPortfolioData = createAsyncThunk("portfolios", async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const portfolioData = await response.json();
    return portfolioData;
  } catch (error) {
    console.error("Error fetching Personal Info data:", error.message);
    throw error; // Re-throw the error so it goes to the rejected action
  }
});

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPortfolioData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPortfolioData.fulfilled, (state, action) => {
        state.loading = false;
        state.portfolioData = action.payload.data;
      })
      .addCase(fetchPortfolioData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default portfolioSlice.reducer;
