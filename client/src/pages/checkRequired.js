
  document.addEventListener('DOMContentLoaded', function () {
    const submit1 = document.getElementsByClassName("name-in");
    console.log(submit1);
    const submit2 = document.getElementsByClassName("WIT email");
    const submit3 = document.getElementsByClassName("Password");
    document.getElementsByClassName('signup-btn').addEventListener("click", function(event){
        if(submit1[0].value == "")
        {
            submit1[0].classList.add("isEmpty");
            event.preventDefault();
        }
        else
        {
            document.getElementsByClassName("required")[0].classList.remove("isEmpty");
        }
        if(submit1[1].value == "")
        {
            document.getElementsByClassName("name-in")[1].classList.add("isEmpty");
            event.preventDefault();
        }
        else
        {
            document.getElementsByClassName("name-in")[1].classList.remove("isEmpty");
        }
        if(submit2[0].value == "")
        {
            document.getElementsByClassName("WIT email")[0].classList.add("isEmpty");
            event.preventDefault();
        }
        else
        {
            document.getElementsByClassName("WIT email")[0].classList.remove("isEmpty");
        }
        if(submit3[0].value == "")
        {
            document.getElementsByClassName("Password")[0].classList.add("isEmpty");
            event.preventDefault();
        }
        else
        {
            document.getElementsByClassName("Password")[0].classList.remove("isEmpty");
        }
        
  });
  })