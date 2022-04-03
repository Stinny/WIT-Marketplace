import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    imageUrls: [],
    isLoading: false,
    error: false,
    created: false,
  },
  reducers: {
    //get product
    getProductStart: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    //create a product
    createProductStart: (state) => {
      state.isLoading = true;
      state.error = false;
      state.created = false;
    },
    createProductSuccess: (state, action) => {
      state.isLoading = false;
      state.products.push(action.payload);
      state.created = true;
    },
    createProductFailure: (state) => {
      state.isLoading = false;
      state.error = true;
      state.created = false;
    },
    uploadImageStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    uploadImageSuccess: (state, action) => {
      state.loading = false;
      state.imageUrls = action.payload;
    },
    uploadImageFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  createProductStart,
  createProductSuccess,
  createProductFailure,
  uploadImageStart,
  uploadImageSuccess,
  uploadImageFailure,
} = productSlice.actions;

export default productSlice.reducer;
