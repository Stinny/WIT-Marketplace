import React from 'react';
import testLogo from '../Images/testLogo.png';
import '../styles/productDetailStyles.css';
import ItemView, { showItems } from '../components/ItemView'
import Carousel from "react-elastic-carousel";
import raw from '../items.txt';

const ProductDetail = () => {

  fetch(raw)
  .then(r => r.text())
  .then(text => {
    var textArr = text.split("\n");
    console.log(textArr[1]);
    var pathArray = window.location.pathname.split('/');
    var nameReplacer = document.getElementsByClassName("itemName");
    nameReplacer[0].innerHTML = nameReplacer[0].innerHTML.replace("Loading...", textArr[pathArray[2] * 2]);
    var priceReplacer = document.getElementsByClassName("itemName");
    priceReplacer[0].innerHTML = priceReplacer[0].innerHTML.replace("$Loading...", "$" + textArr[pathArray[2] * 2 + 1]);
    // var item = document.getElementsByClassName("item-detail-child");
    // var listItem = document.createElement(showItems(("../Images/Items/" + textArr[pathArray[2]] + "_0.jpeg"),("../Images/Items/" + textArr[pathArray[2]] + "_1.jpeg"),("../Images/Items/" + textArr[pathArray[2]] + "_2.jpeg"),("../Images/Items/" + textArr[pathArray[2]] + "_3.jpeg")));
    // item[0].parentNode.replaceChild(listItem, item[0]);
    // console.log(item);
  });

  



  return (
    <div className='detail-con'>
        
        <div className="item-details">
          <p className='itemName'>Loading...
          <p>
            <a clasName="price">$Loading...</a> 
            <button class="button">Add to Cart</button></p>
            <button class="instantButton">Buy Now</button>
          </p>
          <ItemView className="item-detail-child">
            
            
          </ItemView>
        </div>
          
    </div> 
    
  );
};

export default ProductDetail;
