import axios from 'axios';

//axios instance for making HTTP calls
//to our server
export const apiReq = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const uploadImagesReq = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type':
      'multipart/form-data; boundary=----WebKitFormBoundaryyEmKNDsBKjB7QEqu',
  },
});
