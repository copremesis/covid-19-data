
function with_bind() {
//Use .bind() javascript
let obj = {name:"Niladri"};
let greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
};
//creates a bound function that has same body and parameters
let bound = greeting.bind(obj);
console.dir(bound); ///returns a function
console.log("Output using .bind() below ");
console.log(bound("Newtown","KOLKATA","WB")); //call the bound function
}
with_bind.call();

function with_closure() {

///use closure instead
let obj = {name:"Niladri"};
let greeting = (a,b,c) => {
    return "welcome "+obj.name+" to "+a+" "+b+" in "+c;
};
//creates a bound function that has same body and parameters
let bound = greeting.bind(obj);
console.dir(bound); ///returns a function
console.log("Output using .bind() below ");
console.log(bound("Newtown","KOLKATA","WB")); //call the bound function
}

with_closure.call();
