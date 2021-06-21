
let year= document.getElementById("yearInput");
let button= document.getElementById("pressButton");
let outPut = document.getElementById("outPutt");
button.addEventListener("click", function pressBtn(){
let h1 = document.querySelector("h1");
h1.innerText = "Welcome! Enter a year"
let leapBoolean = (year.value % 100 === 0 ? year.value % 400 === 0: year.value % 4 === 0);

if(year.value === '' || year.value === 0){
    h1.innerText='Enter a valid year';
    return;
}
if(leapBoolean){

    h1.innerText=`${year.value} is a leap Year!`;
}else{
    h1.innerText=`${year.value} not a leap year`;
}

})
