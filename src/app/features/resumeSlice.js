import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  resumeData: null,
  loading: false,
  error: null,
};

// const url = "http://localhost:7654/resumes";
const url = `${import.meta.env.VITE_API_URL}resumes`;

export const fetchResumeData = createAsyncThunk("resume", async () => {
  try {
    console.log("Fetching resume data from:", url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const resumeData = await response.json();
    console.log("Personal Info fetched successfully:", resumeData);

    return resumeData;
  } catch (error) {
    console.error("Error fetching Personal Info data:", error.message);
    throw error; // Re-throw the error so it goes to the rejected action
  }
});

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResumeData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchResumeData.fulfilled, (state, action) => {
        state.loading = false;
        state.resumeData = action.payload.data;
      })
      .addCase(fetchResumeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default resumeSlice.reducer;
