import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

// action type
// 3 get generated: products/productsFetch/pending, /fulfilled, /rejected
// actual function to get data

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const res = await axios.get("http://localhost:5000/products");
    return res?.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.items = action.payload;
    });
    builder.addCase(productsFetch.rejected, (state) => {
      state.status = "rejected";
    });
  },
});

export default productSlice.reducer;
