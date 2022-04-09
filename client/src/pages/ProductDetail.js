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
        var countReplacer = document.getElementsByClassName("count");
        countReplacer[0].innerHTML = countReplacer[0].innerHTML.replace("Loading...", "Amount Left: " + product.stock);
        var descReplacer = document.getElementsByClassName("desc");
        descReplacer[0].innerHTML = descReplacer[0].innerHTML.replace("Loading...", product.description);
        // var imgReplacer = document.getElementsByTagName("img");
        // {
        //   for(var i = 0; i < imgReplacer.length; i++)
        //   {
        //     if(product.images.length == 0)
        //     {
        //       imgReplacer[i].src = nullImage;
        //     }
        //     else
        //       //document.getElementsByTagName("imgCarousel")[0].append("<div'><img  src='" + product.images[i] + "'></div>");   
        //       imgReplacer[i].src = product.images[i];          
        //   }
        // }

      }

      // var item = document.getElementsByClassName("item-detail-child");
      // var listItem = document.createElement(showItems(("../Images/Items/" + textArr[pathArray[2]] + "_0.jpeg"),("../Images/Items/" + textArr[pathArray[2]] + "_1.jpeg"),("../Images/Items/" + textArr[pathArray[2]] + "_2.jpeg"),("../Images/Items/" + textArr[pathArray[2]] + "_3.jpeg")));
      // item[0].parentNode.replaceChild(listItem, item[0]);
      // console.log(item);
    });
  
  }

  const item = products[window.location.pathname.split('/')[2]]

  return (
    <div className='detail-con'>
        
        <div className="item-details">
          <p className='itemName'>Loading...
          <p>
            <a className="price">$Loading...</a> 
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
