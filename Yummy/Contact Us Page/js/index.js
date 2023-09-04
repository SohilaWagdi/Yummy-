

let urName = document.getElementById('name');
let urEmail =  document.getElementById('email');
let urPhone =  document.getElementById('phone');
let urAge =  document.getElementById('age');
let urPassword =  document.getElementById('password');
let renterPassword =  document.getElementById('repassword');
let contactBody =  document.querySelector('.contactUs');


let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click' , function(){
  console.log("say hello .. ");
  inputInfo();
  allInputsValid();

})

// urName.addEventListener('keyup', function(){
 
//     nameVaildation();

// })
urEmail.addEventListener('keyup', function(){

  
   emailVaildation();
})
urPhone.addEventListener('keyup', function(){

 
   phoneVaildation();
})
urAge.addEventListener('keyup', function(){

   ageVaildation();
})
urPassword.addEventListener('keyup', function(){

   passwordVaildation();
})


// function allInputsValid (){
//   if (nameVaildation()==true){
//       console.log("mission co,mplte")


//     }
// }

let inputsArr =[];

function inputInfo(){
  if (nameVaildation()==true){
     var data ={
    nameData : urName.value ,
    emailData : urEmail.value ,
    phoneData : urPhone.value ,
   ageData : urAge.value ,
    passwordData : urPassword.value ,
    repassData : renterPassword.value ,
   
  }
  inputsArr.push(data);
   console.log(inputsArr)
  }else
 console.log(" msh sa777")
   
}


var nameRegex = /^[a-zA-Z ]*$/
function nameVaildation(){
  if (nameRegex.test(nameData.value)==true){
    urName.style.border="2px green solid"
    urName.style.boxShadow="0 0 0.5rem green"
    document.getElementById("name").classList.add("d-none");

    return true;
  }else{
    urName.style.border="2px red solid"
    urName.style.boxShadow="0 0 0.5rem red"
    return false;
  }
}
var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function emailVaildation (){
  if (emailRegex.test(emailData.value)){
    return true;
  }else{
    return false;
  }
}
var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
// console.log(phoneRegex.test ('0123456789'))
function phoneVaildation (){
  if (phoneRegex.test(phoneData.value)){
    return true;
  }else{
    return false;
  }
}
var ageRegex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
function ageVaildation (){
  if (ageRegex.test(ageData.value)){
    return true;
  }else{
    return false;
  }
}
var passRegex = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;
// console.log(passRegex.test ('s123456789'))
function passwordVaildation (){
  if (passRegex.test(passwordData.value)){
    return true;
  }else{
    return false;
  }
}





 
