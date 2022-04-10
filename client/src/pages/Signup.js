import React from 'react';
import '../styles/signupStyles.css';

const Signup = () => {
  //Form validation
  document.addEventListener("DOMContentLoaded", () => {

    //Get required fields and buttons
    const btn =document.querySelector("#sign-up-btn");
    const required = document.querySelectorAll(".required");
    btn.addEventListener('click', validateForm);      //Add Listener to submit form

    function validateForm(e) {
      //Set back fields to default no highlight style
      required[0].classList.remove("highlight");
      required[1].classList.remove("highlight");
      required[2].classList.remove("highlight");
      required[3].classList.remove("highlight");

      //Check if name is blank
      if (required[0].value === "" || required[0].value == null) {
        required[0].classList.add("highlight");
        e.preventDefault();
      }
      //Check if last name is blank
      if(required[1].value === "" || required[1].value == null) {
        required[1].classList.add("highlight");
        e.preventDefault();
      }
      //Check if email is blank
      if(required[2].value === "" || required[2].value == null) {
        required[2].classList.add("highlight");
        e.preventDefault();
      }
      //Check if email is not a WIT email
      if (!required[2].value.includes("@wit.edu") && required[2].value != "") {
        required[2].classList.add("highlight");
        alert("You must use a WIT email address")
        e.preventDefault();
      }
      //Check if password is blank
      if (required[3].value === "" || required[3].value == null) {
        required[3].classList.add("highlight");
        e.preventDefault();
      }
    }
  });

  return (
    <div className='signup-con'>
      <div className='signup-wrap'>
        <form id='signUpForm'>
        <h2>WIT Marketplace Signup</h2>
        <div className='name-con'>
          <input type='text' className='name-in required' placeholder='First'/>
          <input type='text' className='name-in required' placeholder='Last'/>
        </div>

        <div className='inputs-con'>
          <input type='email' placeholder='WIT email ' className='signup-in required'/>
          <input type='password' placeholder='Password' className='signup-in required'/>
        </div>

        <button id='sign-up-btn' type='submit' className='signup-btn'>
          SIGNUP
        </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
