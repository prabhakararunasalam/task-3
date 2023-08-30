//https://restcountries.com/v3.1/all
let xhr=new XMLHttpRequest();
console.log(xhr);

xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload= function() {
    const Data = JSON.parse(xhr.response);
    console.log(Data);
    console.log(xhr.status);
    for(i=0; i<Data.length; i++){
        console.log("Name :", Data[i].name.common);
        console.log("flag :", Data[i].flags.png);
    }
      


}