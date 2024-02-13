import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  personalInfoData: null,
  loading: false,
  error: null,
};

const url = `${import.meta.env.VITE_API_URL}personalInfo`;

// const url = `${api_url}personalInfo`;

console.log("====================================");
console.log("URL: ", url);
console.log("====================================");

export const fetchPersonalInfoData = createAsyncThunk(
  "personalInfo",
  async () => {
    try {
      console.log("Fetching data from:", url);

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const personalInfoData = await response.json();
      console.log("Personal Info fetched successfully:", personalInfoData);

      return personalInfoData;
    } catch (error) {
      console.error("Error fetching Personal Info data:", error.message);
      throw error; // Re-throw the error so it goes to the rejected action
    }
  }
);

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonalInfoData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPersonalInfoData.fulfilled, (state, action) => {
        state.loading = false;
        state.personalInfoData = action.payload.data;
      })
      .addCase(fetchPersonalInfoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default personalInfoSlice.reducer;
