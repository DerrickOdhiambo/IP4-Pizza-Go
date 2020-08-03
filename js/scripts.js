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




//contructor function
var size, crust, toppings, number;
const total = 0;

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
    $(".menu-list").hide();
    $(".btn").show();
  })
  $("button#button").click(function(event){
    event.preventDefault();
    $("#formOutput").append("Thank you for trusting us. Enjoy our Delicious Pizza and see you soon!")
  })
})

//prototype
Pizza.prototype.total = function(){
  return getPizza.total;
}

$(document).ready(function(){
  $("button#delivery").click(function(event){
    event.preventDefault();
    // $("#totalAmount").hide();
    $("#button").hide();
    $(".delivery-form").show();
    $("button#confirm-delivery").click(function(event){
      event.preventDefault();

      var userLocation = $("input#location").val();
      var userName = $("input#name").val();

      var deliverPizzaTotal = new Pizza(total);
      console.log(deliverPizzaTotal.total);
      
      var totalSum = `Thank you ${userName} for trusting us. Your order will be delivered at ${userLocation} soon`;
      $("#formOutput").text(totalSum)
      $(".delivery-form").hide();
    })
  })
})
