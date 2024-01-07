let dob = document.getElementById("dob");
let buttn = document.getElementById("dobButton");
let show = document.getElementById("ageShow");



buttn.addEventListener("click",function(){
    const currentDate =  new Date();
    const currentYear =  currentDate.getFullYear();
    const dateOfBirth =  new Date(dob.value);
    const age = currentYear-dateOfBirth.getFullYear()-1;
    console.log(age);
    if(isNaN(age) || age < 0 ){alert("Please enter your birthday");}
    else{
        show.innerText = `Your age is ${age} year old`;

    }
});
