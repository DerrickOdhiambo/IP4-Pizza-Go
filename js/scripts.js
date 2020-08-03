// user interface
//funtion for oprning and closing the side navigation bar
function openSlideMenu(){
  document.getElementById('menu').style.width = '250px';
  document.getElementById('sidenav').style.marginLeft = '250px';
}
function closeSlideMenu(){
  document.getElementById('menu').style.width = '0';
  document.getElementById('sidenav').style.marginLeft = '0';
}



// $(document).ready('onclick', function(event){
//   event.preventDefault();
 
// function onPickUp(){
//   var size = document.getElementById("size").value;
//   var crustType = document.getElementById("crust").value;
//   var topping = document.getElementById("pizzaType").value;
//   var numberOfPizza = document.getElementById("number").value;

//   var form = document.getElementById("formOrder");
//   form.addEventListener('submit', (event) =>{
//     event.preventDefault();

//     console.log(size, crustType, topping, numberOfPizza)
//   })
  
//   var
// }    

// })

// busines logic
//contructor function
//

function Pizza(sizeOfPizza, crustType, toppingSelected, numberOfPizza){
  this.sizeOfPizza = size;
  this.crustType = crust;
  this.toppingSelected = toppings;
  this.numberOfPizza = number;
}

//user interface
$(document).ready(function(){
  
  $('button#pickUp').click(function(){
    event.preventDefault();
    var pizzaSize = parseInt($("select#size").val());
    var crustType = parseInt($("select#crust").val());
    var choiceToppings = parseInt($("select#toppings").val());
    var numberOfPizza = parseInt($("input#number").val());
    console.log(pizzaSize, crustType, choiceToppings, numberOfPizza)

    var getPizza = new Pizza(pizzaSize, crustType, choiceToppings, numberOfPizza)
    console.log(getPizza)

    var total = (pizzaSize + crustType + choiceToppings) * numberOfPizza;

    var pizzaSizeChoice = $("#size option:selected").text();
    var crustTypeChoice = $("#crust option:selected").text();
    var toppingsChoice = $("#toppings option:selected").text();
    console.log(pizzaSizeChoice, crustTypeChoice, toppingsChoice)

    var result = `Your pizza worth is: \n Pizza size: ${pizzaSizeChoice} for Ksh. ${pizzaSize} <br> Crust type : ${crustTypeChoice} for Ksh ${crustType} \n Toppings : ${toppingsChoice} for Ksh. ${choiceToppings}\n Number of Pizza : ${numberOfPizza} \n Your total amount is : Ksh. ${total}`
    var res = result.replace(/\n/g, "<br>");
    $("#totalAmount").html(res);
    $("#totalAmount").slide(1300);
    
  })
})



























  // var pizzaSize = parseInt(document.getElementById("size").value);
  // var crustType = parseInt(document.getElementById("crust").value);
  // var choiceToppings = parseInt(document.getElementById("toppings").value);
  // var numberOfPizza = parseInt(document.getElementById("number").value);
  
  // $()
  // var getPizza = new Pizza();
  // console.log(getPizza)

  // var total = (pizzaSize + crustType + choiceToppings) * numberOfPizza;
  // var pizzaSizeChoice =pizzaSize.options[pizzaSize.selectedIndex].text;
  // console.log(pizzaSizeChoice)
  // document.getElementById('output').innerHTML = `Your total bill is Ksh. ${total}`;