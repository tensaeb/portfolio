import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const url = "http://localhost:7654/personalInfo";
// const url = import.meta.env.API_URL;

export const fetchData = createAsyncThunk("personalInfo", async () => {
  try {
    console.log("Fetching data from:", url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data fetched successfully:", data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Re-throw the error so it goes to the rejected action
  }
});

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default personalInfoSlice.reducer;
