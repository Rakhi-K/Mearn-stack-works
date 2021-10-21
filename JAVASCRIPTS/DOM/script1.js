//get element by ID
var litem= document.getElementById("item");
litem.style.color="red"


//GET ELEMENT BY CLASSNAME
var items=document.getElementsByClassName("section")
for(let item of items){
    item.style.color="blue"
}


// document.texContent- change text
// document.getElementById("htwo").textContent="Document Object Model"


//document.innerHTML= <em></em>-  used for text styling 
// document.getElementById("htwo").innerHTML="<em>Document Object Model</em>"



//  queryselector(li)- for one element - first li is selected
//<li class="section">document.querySelector("li")</li>


//  queryselectorAll(li)- for all element - all li is selected
//<li class="section">document.querySelectorAll("li")</li>


//for class name- . used
//<li class="section">document.querySelectorAll(.classname)</li>



//for id=#
//<li class="section">document.querySelector("#htwo")</li>