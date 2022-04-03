import { apiReq, uploadImagesReq } from './requests';
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  createProductStart,
  createProductSuccess,
  createProductFailure,
  uploadImageStart,
  uploadImageSuccess,
  uploadImageFailure,
} from '../redux/products';

//gets all products from API
export const getAllProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await apiReq.get('/products');
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

//gets a single product from the API
export const getSingleProduct = async (productId, dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await apiReq.get(`/products/${productId}`);
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

//sends form data to API to create a product
export const createProduct = async (data, dispatch, navigate) => {
  dispatch(createProductStart());
  try {
    const res = await apiReq.post('/products/create', data);
    dispatch(createProductSuccess(res.data));
    navigate('/');
  } catch (err) {
    dispatch(createProductFailure());
  }
};

//sends images to upload to our S3 bucket
export const uploadImages = async (images, dispatch) => {
  dispatch(uploadImageStart());
  try {
    const res = await uploadImagesReq.post('/products/imageupload');
    dispatch(uploadImageSuccess(res.data));
  } catch (err) {
    dispatch(uploadImageFailure());
  }
};
