import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  statsData: null,
  loading: false,
  error: null,
};

// const url = "http://localhost:7654/stats";
const url = `${import.meta.env.VITE_API_URL}stats`;

export const fetchStatsData = createAsyncThunk("stats", async () => {
  try {
    console.log("Fetching Stats data from:", url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const statsData = await response.json();
    console.log("Stats Data fetched successfully:", statsData);

    return statsData;
  } catch (error) {
    console.error("Error fetching Stats data:", error.message);
    throw error; // Re-throw the error so it goes to the rejected action
  }
});

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStatsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStatsData.fulfilled, (state, action) => {
        state.loading = false;
        state.statsData = action.payload.data;
      })
      .addCase(fetchStatsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default statsSlice.reducer;
