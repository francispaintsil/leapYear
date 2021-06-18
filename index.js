
let year= document.getElementById("yearInput");
let button= document.getElementById("pressButton");
let outPut = document.getElementById("outPutt");
button.addEventListener("click", function pressBtn(){

let leapBoolean = (year.value % 100 === 0 ? year.value % 400 === 0: year.value % 4 === 0);

if(year.value === '' || year.value === 0){
    alert('Enter a valid year');
    return;
}
if(leapBoolean){

    alert(`${year.value} is a leap Year!`);
}else{
    alert(`${year.value} not a leap year`);
}

})
