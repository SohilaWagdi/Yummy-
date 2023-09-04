
let inputByName = document.querySelector('.byFL');
inputByName.addEventListener('input',function(){
  // console.log('11111',eventinfo.target.getAttribute('byName'))
  mealName(this.value)
})

let inputByLetter = document.querySelector('.byFletter');
inputByLetter.addEventListener('input',function(){
  // console.log('33333',eventinfo.target.getAttribute('byLetter'))
  mealFletter(this.value);
})




let mealSbn ;
async function mealName(name) {
        let sresponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        let byNameMeal = await sresponse.json();
        mealSbn = byNameMeal.meals;  
          
        // console.log('22222',mealSbn[0].strMeal);
        displayFName();

}
// mealName('Sushi')

let mealSBf;
async function mealFletter(letter){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
  let byFirstL = await response.json();
  mealSBf = byFirstL.meals;

  // console.log('hya du ???',mealSBf);
  displayFletter();
}



function displayFName(){
  let cartona = ``
  for(var i =0 ;i<mealSbn.length ; i++){
  cartona += `     <div class="col-md-3 p-4">
  <a  href="../Meal Details/index.html" target="_blank">
  <div class="item position-relative  overflow-hidden rounded-2 ">
  <img class = "w-100 rounded-2 " src="${mealSbn[i].strMealThumb}" />
     <div class="itemLayer position-absolute d-flex align-items-center rounded-2  text-black p-2">
     <h3>${mealSbn[i].strMeal}</h3>
 </div>
   
    </div>
</a>
 </div>
`
  }
document.getElementById('fName').innerHTML = cartona;
}


function displayFletter(){
 let cartona = ``
  for(var i =0 ;i<mealSBf.length ; i++){
    cartona += `
    
    <div class="col-md-3 p-4">
      <a  href="../Meal Details/index.html" target="_blank">
      <div class="item position-relative  overflow-hidden rounded-2 ">
      <img class = "w-100 rounded-2 " src="${mealSBf[i].strMealThumb}" />
         <div class="itemLayer position-absolute d-flex align-items-center rounded-2  text-black p-2">
         <h3>${mealSBf[i].strMeal}</h3>
     </div>
       
        </div>
    </a>
     </div>
    `

  }
 document.getElementById('fName').innerHTML = cartona;

}

