
var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    // console.log(result);

    
        for (var i=0;i<result.length;i++){
            console.log(`
                ${result[i].name}
                ${result[i].region}
                 ${result[i].subregion}
                ${result[i].population}`);
//                 var divi=document.createElement("h1");
// document.body.append(divi); 
// divi.innerHTML=`${result[i].region}`;
        } 

    }


    
