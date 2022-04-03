import React, { useReducer, useState } from 'react';
import { createProduct, uploadImages } from '../api/calls';
import { uploadImagesReq } from '../api/requests';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/sellStyles.css';

function CreateProduct() {
  //for redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const created = useSelector((state) => state.product.created);

  //form data
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState('');
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const [submitting, setSubmitting] = useState(false);

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const imagesData = new FormData();

    for (let i = 0; i < images.length; i++) {
      imagesData.append('productImages', images[i]); //appends actual file object to form data
    }

    const imageUrlsReq = await uploadImagesReq.post(
      '/products/imageupload',
      imagesData
    );

    const imageUrls = imageUrlsReq.data;

    createProduct(
      { title, description, price, condition, stock, imageUrls },
      dispatch,
      navigate
    );
  };

  return (
    <div className='wrapper'>
      <h1 id='pageTitle'>Just a couple questions</h1>
      <form onSubmit={handleCreateProduct}>
        <fieldset>
          <label>
            <p>Add Title</p>
            <input
              id='productTitle'
              name='name'
              type='text'
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            <p>Price</p>
            <input
              name='price'
              type='number'
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Pictures</p>
            <input
              name='pictures'
              onChange={(e) => setImages(e.target.files)}
              type='file'
              multiple
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Condition</p>
            <select
              name='condition'
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value=''>--New or used?--</option>
              <option value='new'>New</option>
              <option value='used'>Used</option>
            </select>
          </label>
          <label>
            <p>Available Stock</p>
            <input
              id='stock'
              type='number'
              name='stock'
              onChange={(e) => setStock(e.target.value)}
              step='1'
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Description</p>
            <textarea
              id='des'
              name='des'
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Describe your item thoroughly, buyers love information.'
            />
          </label>
        </fieldset>
        <button id='sell-button' type='submit' disabled={submitting}>
          DONE
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
