//obj in obj

var person={
    name:"ram",
    getName:function(){
        return this.name
    }
}
console.log(person.getName());


//global in server side
global.console.log("hello")

/// in client side 4- WINDOW in inspect- console
window.console.log("hello")

