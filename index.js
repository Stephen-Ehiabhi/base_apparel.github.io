 //selecting the btn element
let btn = document.querySelector('.btn');
let error = document.querySelector('.error');
let email = document.querySelector('.email');
let errormsg = document.querySelector('.errormsg');

//adding event listener to the btn element
btn.addEventListener('click',()=>{


//styling the error elements display to block
error.style.display = "block";

//styling the errormsg elements display to block
errormsg.style.display = "block";

//styling the emails element border color to red
email.style.borderColor = "red";

//styling the emails element border width to 2px
email.style.borderWidth = "1px";

//styling the btn box shadow to 2px 2px 4px solid
btn.style.boxShadow = "2px 2px 4px black";


});