let formEl=document.querySelector(".formation");
let centuryOfBirth=document.getElementById("century");
let yearOfBirth=document.getElementById("year");
let monthOfBirth=document.getElementById("month");
let birthday=document.getElementById("day");
let gender=document.getElementById("yeah")
let buttonEl=document.getElementById("button-el");
let akanEl=document.getElementById("akan");
console.log(akanEl)
let maleNames={"Sunday":"Kwasi",
               "Monday":"Kwadwo",
               "Tuesday":"Kwabena",
               "Wednesday":"Kwaku",
               "Thursday":"Yaw",
               "Friday":"Kofi",
               "Saturday":"Kwame"
}
let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
//the variables below are grabbed from spans that will in turn render error messages upon invalid input
let render=document.querySelector(".render");
let render2=document.querySelector(".render2");
let render3=document.querySelector(".render3");
let render4=document.querySelector(".render4");
let render5=document.querySelector(".render5")
//submit event handler on the form element
formEl.addEventListener("submit",(x)=>{
        x.preventDefault();
       checkedInputs();
       
})
//click event handler for the button 
buttonEl.addEventListener("click",()=>{
    nameAllocated();
});
//The following function checks valid user input
function checkedInputs(){
    let century=centuryOfBirth.value;
    let year=yearOfBirth.value;
    let month=monthOfBirth.value;
    let day=birthday.value;
    if(century=""||century<1||century>21){
        render.innerText="Invalid input try again";
    }else if(year<0||year>99){
        render2.innerText="Invalid input try again";
    }else if(month<1||month>12){
        render3.innerText="Invalid input try again";
    }else if(day==""){
        render4.innerText="Invalid input try again";
    }
    else{
        render5.innerText="Valid input, you will receive your akan name shortly";
    }
}
//The function below gives a name according to the Akan naming system
function nameAllocated(){
    let genders=gender.value;
    let dayBorn=birthday.value;
    if(genders==="Male"&&dayBorn==="Sunday"){
        akanEl.innerText=`${maleNames.Sunday}`;
    }else if(genders==="Male"&&dayBorn==="Monday"){
        akanEl.innerText=`${maleNames.Monday}`;
   }else if(genders==="Male"&&dayBorn==="Tuesday"){
        akanEl.innerText=`${maleNames.Tuesday}`;
   }else if(genders==="Male"&&dayBorn==="Wednesday"){
        akanEl.innerText=`${maleNames.Wednesday}`; 
   }else if(genders==="Male"&&dayBorn==="Thursday"){
        akanEl.innerText=`${maleNames.Thursday}`;
   }else if(genders==="Male"&&dayBorn==="Friday"){
        akanEl.innerText=`${maleNames.Friday}`;
   }else if(genders==="Male"&&dayBorn==="Saturday"){
        akanEl.innerText=`${maleNames.Saturday}`;
   }else if(genders==="Female"&&dayBorn==="Sunday"){
        akanEl.innerText=`${femaleNames[0]}`;
   }else if(genders==="Female"&&dayBorn==="Monday"){
        akanEl.innerText=`${femaleNames[1]}`;
   }else if(genders==="Female"&&dayBorn==="Tuesday"){
        akanEl.innerText=`${femaleNames[2]}`;
   }else if(genders==="Female"&&dayBorn==="Wednesday"){
        akanEl.innerText=`${femaleNames[3]}`;
   }else if(genders==="Female"&&dayBorn==="Thursday"){
        akanEl.innerText=`${femaleNames[4]}`;
   }else if(genders==="Female"&&dayBorn==="Friday"){
        akanEl.innerText=`${femaleNames[5]}`; 
   }else if(genders==="Female"&&dayBorn==="Saturday"){
         akanEl.innerText=`${femaleNames[6]}`;
   }else{
        akanEl.innerText="Invalid entry please try again";
   }
}