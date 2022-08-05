var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var properties=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1){
        if(obj1.key==obj2.key){
            continue;
        }
        else{
            properties=false;
            break;
        }
    }
}
else{
    properties=false;
}
console.log(properties);
    