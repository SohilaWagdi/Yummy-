
 let mealsArr;

async function homePg() {
    let responseH = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
    let myHome = await responseH.json();
    mealsArr = myHome.meals; 
    displayAllMeals();
  }
  homePg();


function displayAllMeals(){
    let cartona = ``
    for(let i = 0 ; i<mealsArr.length ; i++){

        cartona += `
        <div class="col-md-3 p-4">
       
        <div class="item position-relative  overflow-hidden rounded-2"
        onclick="detailsPg('${mealsArr[i].strMeal}')" >
        <img class = "w-100 rounded-2 " src="${mealsArr[i].strMealThumb}" />
           <div class="itemLayer position-absolute d-flex align-items-center rounded-2  text-black p-2">
           <h3>${mealsArr[i].strMeal}</h3>
       </div>
         
          </div>
       </div>`
    }

    document.getElementById('demo').innerHTML = cartona;
}


let mealsDetailsArr ;
async function detailsPg(index) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${index}`);
    let mainMeal = await response.json();
    mealsDetailsArr = mainMeal.meals;
    displayDetailsPg();
  }



function displayDetailsPg(){
    let cartona = ``
    for(let v = 0 ; v<mealsDetailsArr.length ; v++){

    
     cartona =` <div class="col-md-4">
    <img src="${mealsDetailsArr[v].strMealThumb}" class="w-100"/>
    <h2>${mealsDetailsArr[v].strMeal}</h2>

</div>

<div class="col-md-8">
    <h2>Instructions</h2>
    <p>
    ${mealsDetailsArr[v].strInstructions}
    </p>
    <h3><span class="fw-bolder">Area: </span>${mealsDetailsArr[v].strArea}</h3>
    <h3><span class="fw-bolder">Category: </span>${mealsDetailsArr[v].strCategory}</h3>
    <h3>Recipes:</h3>
    <ul class="list-unstyled d-flex g-3 flex-wrap">
    <li class="alert alert-info m-2 p-2">${mealsDetailsArr[v].strIngredient1}    </li>
    <li class="alert alert-info  m-2 p-2">${mealsDetailsArr[v].strIngredient2}    </li>
    <li class="alert alert-info  m-2 p-2">${mealsDetailsArr[v].strIngredient3}    </li>
    <li class="alert alert-info  m-2 p-2">${mealsDetailsArr[v].strIngredient4}    </li>
    <li class="alert alert-info  m-2 p-2">${mealsDetailsArr[v].strIngredient5}    </li>
        </ul>
        <h3>Recipes :</h3>
        <ul class="list-unstyled d-flex g-3 flex-wrap">
        <li class="alert alert-danger m-2 p-1">${mealsDetailsArr[v].strTags}</li>

        </ul>
    <a target="_blank" href="${mealsDetailsArr[v].strSource}" class="btn btn-success me-2">Source</a>
    <a target="_blank" href="${mealsDetailsArr[v].strYoutube}" class="btn btn-danger ">Youtube</a>
</div>`

document.getElementById("demo").innerHTML=cartona;

    }

}






let categArr ;
async function categories(){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  let catPg = await response.json();
  categArr=catPg.categories;
  // console.log(categArr);
  displayCategories();
}
// categories();

 let itemsArr ;
 async function catItems(item){
   let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`)
   let myitem = await response.json();
   itemsArr =myitem.meals ;
   displayItems();
 }
// catItems('Beef')

function displayCategories(){
  let cartona =``
  for( var i = 0 ; i<categArr.length ; i++){
    cartona +=`<div  class="col-md-3 p-4">

    <div  class="item position-relative bg-info overflow-hidden rounded-2" 
    onclick=" catItems('${categArr[i].strCategory}')" >
        
        <img id="link" class = "w-100 rounded-2 " src="${categArr[i].strCategoryThumb}" />
           <div class="itemLayer position-absolute text-center text-black p-2">
           <h3>${categArr[i].strCategory}</h3>
           <p>${categArr[i].strCategoryDescription} </p>
       </div>
         
          </div>

</div>
    `
  }
  document.getElementById('demo').innerHTML = cartona;
}

function displayItems(){
  let cartona =``
  for( var i = 0 ; i<itemsArr.length ; i++){

    cartona +=`
    <div class="col-md-3 p-4">
    <div class="item position-relative  overflow-hidden rounded-2"
    onclick="detailsPg('${mealsArr[i].strMeal}')" >
    <img class = "w-100 rounded-2 " src="${itemsArr[i].strMealThumb}" />
       <div class="itemLayer position-absolute d-flex align-items-center rounded-2  text-black p-2">
       <h3>${itemsArr[i].strMeal}</h3>
   </div>
     
      </div>
   </div>`
  }
  document.getElementById('demo').innerHTML = cartona;
}











let ingradArr ;
async function ingredients(){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  let ingrdPg = await response.json();
  ingradArr=ingrdPg.meals;
  console.log(ingradArr);
  displayIngredients();

}



function displayIngredients(){
  let cartona =``
  for( var i = 0 ; i<20 ; i++){
    cartona +=`<div class="col-md-3">

    <div class="text-center rounded-circle"
    onclick="ingItems('${ingradArr[i].strIngredient}')"
    >
    <i id="icon"class="fa-solid fa-house-laptop fa-4x" ></i>
    <h3>${ingradArr[i].strIngredient}</h3>
    <p class="info-ing"> ${ingradArr[i].strDescription}</p>

</div>
</div>
    `
  }
  document.getElementById('demo').innerHTML = cartona;
}


let allItemsArr;

async function ingItems(item){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${item}`)
  let intData = await response.json()
allItemsArr = intData.meals
  console.log(allItemsArr)
  displayNItems();
}


function displayNItems(){
  let cartona =``
  for( var i = 0 ; i<allItemsArr.length ; i++){

    cartona +=`
    <div class="col-md-3 p-4">
    <div class="item position-relative  overflow-hidden rounded-2 "
    onclick="detailsPg('${mealsArr[i].strMeal}')" >
    <img class = "w-100 rounded-2 " src="${allItemsArr[i].strMealThumb}" />
       <div class="itemLayer position-absolute d-flex align-items-center rounded-2  text-black p-2">
       <h3>${allItemsArr[i].strMeal}</h3>
   </div>
     
      </div>
   </div>`
  }
  document.getElementById('demo').innerHTML = cartona;
}






let areaArr ;
async function area(){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
  let areaPg = await response.json();
  areaArr=areaPg.meals;
  console.log(areaArr);
   displayArea();

}




let countryArr ;
async function country(countryName){
  let cresponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryName}`)
let countries = await cresponse.json();
countryArr= countries.meals ;
displayCountry();
}




function displayCountry(){
  let cartona =``
  for( var i = 0 ; i<countryArr.length ; i++){

    cartona +=`
    <div class="col-md-3 p-4">
   
    <div class="item position-relative  overflow-hidden rounded-2 "
    onclick="detailsPg('${mealsArr[i].strMeal}')">
    <img class = "w-100 rounded-2 " src="${countryArr[i].strMealThumb}" />
       <div class="itemLayer position-absolute d-flex align-items-center rounded-2  text-black p-2">
       <h3>${countryArr[i].strMeal}</h3>
   </div>
     
      </div>
   </div>`
  }
  document.getElementById('demo').innerHTML = cartona;
}






function displayArea(){
  let cartona =``
  for( var i = 0 ; i<areaArr.length ; i++){
    cartona +=`<div class="col-md-3">
    <div class="text-center rounded-circle">
    <i class="fa-solid fa-house-laptop fa-4x"
    onclick=" country('${areaArr[i].strArea}')"></i>
    <h3>${areaArr[i].strArea}</h3>

</div>
</div>
    `
  }
  document.getElementById('demo').innerHTML = cartona;
}









$('#mainNav .open-close-icon ').click(function(){
  let clsbarinnerWidth = $('#navLinks').innerWidth();
 if($('#mainNav').css ('left')== '0px') {
  $('#mainNav').animate({'left':-clsbarinnerWidth},500); 
 
 $('.open-close-icon').removeClass("fa-x");
  $('.open-close-icon').addClass("fa-align-justify");
 }else{
  $('#mainNav').animate({'left':'0px'},500);
 $('.open-close-icon').removeClass("fa-align-justify");
  $('.open-close-icon').addClass("fa-x");
    $('.links li').removeClass("d-none");
 
  $('.links li').addClass("d-block");
  // $('.links li').eq(0).slideUp(10000);
 
 }
 











 
})















