//let response=fetch(api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let api_key='48f37cf1f422925a49866d316756a826';
let url='https://api.openweathermap.org/data/2.5/';
let txtBox=document.getElementById('sBox');
txtBox.addEventListener('keypress',display);

function display(event){
console.log(event.keyCode);
if(event.keyCode===13)
{
    getResults(txtBox.value);
}
}

function getResults(cityName)
{
    console.log("from get results"+cityName);
    fetch(url+"weather?q="+cityName+"&units=metric&appid="+api_key)
    .then(weather=>weather.json())
    .then(response=>displayResponse(response));
}



function displayResponse(response){
console.log("Display "+response);
console.log(response.name);
console.log(response.main.temp);
console.log("DEmo  "+response.weather[0].description);

let city=document.querySelector('.city');

let temp=document.querySelector('.temp');
let str1=response.main.temp_min;
let str2=response.main.temp_max;
let str=str1+"/"+str2;
temp.innerText=str;
console.log("Temp   "+str);
let day=document.querySelector('.day');
city.innerText=response.name;
//Sunday March 13 2022
let wind=document.querySelector('.condition');
wind.innerText+=response.wind.speed;



day.innerText=response.weather[0].description;

console.log(str);

}

function dateFunction(){
    let date=document.querySelector('.date');
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let dt=new Date();
let str=dt.toLocaleString("en-us", options);
date.innerText=str;

}