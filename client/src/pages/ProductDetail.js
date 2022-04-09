//import React from 'react';
import testLogo from '../Images/testLogo.png';
import '../styles/productDetailStyles.css';
import ItemView, { showItems } from '../components/ItemView'
import Carousel from "react-elastic-carousel";
import raw from '../items.txt';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../api/calls';
import nullImage from '../Images/nullImage.png';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    getAllProducts(dispatch);
  }, []);
  loadInfo(products);

  function loadInfo(products){
    fetch(raw)
    .then(r => r.text())
    .then(text => {
      
      var textArr = text.split("\n");
      
      var product = products.find(x => x._id.toLowerCase().includes(window.location.pathname.split('/')[2]));
      if(typeof product != 'undefined' && products)
      {
        console.log(product.title);
        var nameReplacer = document.getElementsByClassName("itemName");
        nameReplacer[0].innerHTML = nameReplacer[0].innerHTML.replace("Loading...", product.title);
        var priceReplacer = document.getElementsByClassName("itemName");
        priceReplacer[0].innerHTML = priceReplacer[0].innerHTML.replace("$Loading...", "$" + product.price);
        var countReplacer = document.getElementsByClassName("count");
        countReplacer[0].innerHTML = countReplacer[0].innerHTML.replace("Loading...", "Amount Left: " + product.stock);
        var descReplacer = document.getElementsByClassName("desc");
        descReplacer[0].innerHTML = descReplacer[0].innerHTML.replace("Loading...", product.description);

       }
    });
  
  }

  const item = products.find(x => x._id.toLowerCase().includes(window.location.pathname.split('/')[2]))
  

  return (
    <div className='detail-con'>
        
        <div className="item-details">
          <p className='itemName'>
          <p>
            <a className="price">Loading...</a> 
            <p>
            <a className="count">Loading...</a> 
            </p>
            </p>
            <button class="button">Add to Cart</button>
            <button class="instantButton">Buy Now</button>

          </p>
          <ItemView className="item-detail-child" product={item}>
            
          </ItemView>
        </div>
        <p class = "desc">
              <a className="desc" id="desc">Loading...</a> 
        </p>
    </div> 
    
  );
};

export default ProductDetail;
