import BaseURL from "./BaseURL.js";
import { GetAllUsers } from "./function.js";

GetAllUsers(`${BaseURL}/users`)
.then(res=>console.log(res.response))

let rergisterForm = document.querySelector(".registerForm")
let name = document.querySelector("#name")
let surName = document.querySelector("#surName")
let emailInput = document.querySelector("#exampleInputEmail1")
let password = document.querySelector("#exampleInputPassword1")


rergisterForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(name.value.trim()!="" && surName.value.trim()!="" && emailInput.value.trim()!="" && password.value.trim()!=""){
        GetAllUsers(`${BaseURL}/users`)
        .then(res=>{
            let users= res.data
            let FindedUsers = users.find(user=> emailInput.value==user.emailInput)
            console.log(FindedUsers);
            
            
        })
    }else{
        alert ("butun bosluqlar dolmalidi")
    }
})