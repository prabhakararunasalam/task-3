//https://restcountries.com/v3.1/all
let xhr=new XMLHttpRequest();
console.log(xhr);
//geting data from the api

xhr.open("GET","https://restcountries.com/v3.1/all");
//send request
xhr.send();
//load the api
//and apply the function and get the data what we need
xhr.onload= function() {
    const Data = JSON.parse(xhr.response);
    console.log(xhr.response);
    console.log(Data);
    console.log(xhr.status);
    for(i=0; i<Data.length; i++){
        console.log(`
        Name : ${Data[i].name.common}
        flag : ${Data[i].flags.png}
        region : ${Data[i].region}
        subregion : ${Data[i].subregion}
        population : ${Data[i].population}
        `)
    
        }
      


}