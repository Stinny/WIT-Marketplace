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
      console.log(textArr[1]);
      
      var pathArray = window.location.pathname.split('/');
      var product = products[pathArray[2]];
      if(typeof product != 'undefined' && products)
      {
        console.log(product.title);
        var nameReplacer = document.getElementsByClassName("itemName");
        nameReplacer[0].innerHTML = nameReplacer[0].innerHTML.replace("Loading...", product.title);
        var priceReplacer = document.getElementsByClassName("itemName");
        priceReplacer[0].innerHTML = priceReplacer[0].innerHTML.replace("$Loading...", "$" + product.price);
        var imgReplacer = document.getElementsByTagName("img");
        if(product.images.length == 0)
        {
          imgReplacer[i].src = nullImage;
        }
        else
        {
          for(var i = 0; i < imgReplacer.length; i++)
          {
            document.getElementsByTagName("imgCarousel")[0].append("<div'><img  src='" + product.images[i] + "'></div>");             
          }
        }

      }

      // var item = document.getElementsByClassName("item-detail-child");
      // var listItem = document.createElement(showItems(("../Images/Items/" + textArr[pathArray[2]] + "_0.jpeg"),("../Images/Items/" + textArr[pathArray[2]] + "_1.jpeg"),("../Images/Items/" + textArr[pathArray[2]] + "_2.jpeg"),("../Images/Items/" + textArr[pathArray[2]] + "_3.jpeg")));
      // item[0].parentNode.replaceChild(listItem, item[0]);
      // console.log(item);
    });
  
  }
  


  return (
    <div className='detail-con'>
        
        <div className="item-details">
          <p className='itemName'>Loading...
          <p>
            <a clasName="price">$Loading...</a> 
            </p>
            <button class="button">Add to Cart</button>
            <button class="instantButton">Buy Now</button>
          </p>
          <ItemView className="item-detail-child">
            
            
          </ItemView>
        </div>
          
    </div> 
    
  );
};

export default ProductDetail;
