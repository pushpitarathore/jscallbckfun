//call back function
//hello pushpita how are you
function sayName(name,callback){
    console.log("hello " + name);
    callback("pushpita");
}
function sayhow(name){  //formal argument
    console.log("how are you " + name);
}
//call the function
sayName("pushpita",sayhow);  //actual argument

function hello(){
    console.log("hello wold");
}
function sayHii(n){ //formal argument
    console.log("hii "+ n);
}
//call the function
setTimeout(hello,2000); //2000 = 2sec
sayHii("pushpita"); //actual argument