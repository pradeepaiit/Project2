//DOM

const form = document.querySelector("#contact-form");

//input values

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const telephone = document.querySelector("#telephone");
const Address = document.querySelector("#Address");
const Message = document.querySelector("#Message");

const validAddress = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
const validName = /^[a-zA-Z]+[a-zA-Z]+$/;
const validMessage = /^[^<][\s\S]+$/;

/*form.setAttribute("novalidate", true); */
form.onsubmit = submitForm;

function submitForm(event)
{
 event.preventDefault();

 if(inputValid(validAddress,  Address) && inputValid(validName, lname) && inputValid(validName, fname) && inputValid(validMessage, Message))
 {
console.log('Name: ${fname.value}\nName: ${lname.value}\nAddress: ${Address.value}\nMessage: ${Message.value}');
modal.style.display = "block"
 }
 else
 {
   console.log("INVALID")
 }
}

function inputValid(regex, input) //input validation
{
  console.log(regex.test(input.value))
  return regex.test(input.value);
}

//Modal

let modalBtn = document.getElementById("start-button")
let modal = document.querySelector(".popup")
let exitBtn = document.querySelector(".exit-button")

exitBtn.onclick = function()
{
  modal.style.display = "none"
}