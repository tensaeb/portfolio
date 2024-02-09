import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  contactData: null,
  loading: false,
  error: null,
};

const contactUrl = "http://localhost:7654/contact"; // Update the URL accordingly

export const sendContact = createAsyncThunk(
  "sendContact",
  async (contactData) => {
    try {
      console.log("Sending contact data to:", contactUrl);

      const response = await fetch(contactUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Contact data sent successfully:", responseData);

      return responseData;
    } catch (error) {
      console.error("Error sending contact data:", error.message);
      throw error; // Re-throw the error so it goes to the rejected action
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contactData = action.payload.data;
      })
      .addCase(sendContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactSlice.reducer;
