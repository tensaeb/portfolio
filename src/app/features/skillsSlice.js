import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  skillsData: null,
  loading: false,
  error: null,
};

const url = "http://localhost:7654/skills";
// const url = import.meta.env.API_URL;

export const fetchSkillsData = createAsyncThunk("skills", async () => {
  try {
    console.log("Fetching Skills data from:", url);

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const skillsData = await response.json();
    console.log("Skills Data fetched successfully:", skillsData);

    return skillsData;
  } catch (error) {
    console.error("Error fetching Skills data:", error.message);
    throw error; // Re-throw the error so it goes to the rejected action
  }
});

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkillsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSkillsData.fulfilled, (state, action) => {
        state.loading = false;
        state.skillsData = action.payload.data;
      })
      .addCase(fetchSkillsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default skillsSlice.reducer;
