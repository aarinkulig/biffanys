// start of onlineOrders javascript

window.onload = function () {
    window.scrollTo(0, 0);
  };
  //   when the page is reset, it will scroll back up to the top

$(".hide").hide();
// hide all of the item modifiers until clicked

totalPrice = [];
let total = 0;



$(".fa-angle-up_1").on("click", function () {
  $(".hide1").toggle();
  $(".fa-angle-up_1").toggleClass("fa-flip-vertical");
});
// toggles the hide class, flips the arrow upside down
$(".cartBtn1").on("click", function(event){
        event.preventDefault();
      // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Deviled Eggs $<span id='itemPrice1'>4.99</span></li>");
    totalPrice.push($("#itemPrice1").text());
    total += Number((Number($("#itemPrice1").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for 1st card

$(".fa-angle-up_2").on("click", function () {
    
  $(".hide2").toggle();
  $(".fa-angle-up_2").toggleClass("fa-flip-vertical");
});

$(".cartBtn2").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Buffalo Wings $<span id='itemPrice2' id='p1'>5.99</span></li>");
    totalPrice.push($("#itemPrice2").text());
    total += Number((Number($("#itemPrice2").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for 2nd card


$(".fa-angle-up_3").on("click", function () {
  $(".hide3").toggle();
  $(".fa-angle-up_3").toggleClass("fa-flip-vertical");
});

$(".cartBtn3").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Poppers $<span id='itemPrice3'>6.99</span></li>");
    totalPrice.push($("#itemPrice3").text());
    total += Number((Number($("#itemPrice3").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
//functionality for the 3rd card

$(".fa-angle-up_4").on("click", function () {
  $(".hide4").toggle();
  $(".fa-angle-up_4").toggleClass("fa-flip-vertical");
});

$(".cartBtn4").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Fried Pickles $<span id='itemPrice4'>4.99</span></li>");
    totalPrice.push($("#itemPrice4").text());
    total += Number((Number($("#itemPrice4").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 4th card

$(".fa-angle-up_5").on("click", function () {
  $(".hide5").toggle();
  $(".fa-angle-up_5").toggleClass("fa-flip-vertical");
});

$(".cartBtn5").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Nachos $<span id='itemPrice5'>6.99</span></li>");
    totalPrice.push($("#itemPrice5").text());
    total += Number((Number($("#itemPrice5").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 5th card

$(".fa-angle-up_6").on("click", function () {
  $(".hide6").toggle();
  $(".fa-angle-up_6").toggleClass("fa-flip-vertical");
});

$(".cartBtn6").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Fried Calamari $<span id='itemPrice6'>8.99</span></li>");
    totalPrice.push($("#itemPrice6").text());
    total += Number((Number($("#itemPrice6").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 6th card

$(".fa-angle-up_7").on("click", function () {
  $(".hide7").toggle();
  $(".fa-angle-up_7").toggleClass("fa-flip-vertical");
});
$(".cartBtn7").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Meatloaf $<span cid='itemPrice7'>16.99</span></li>");
    totalPrice.push($("#itemPrice7").text());
    total += Number((Number($("#itemPrice7").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 7th card


$(".fa-angle-up_8").on("click", function () {
  $(".hide8").toggle();
  $(".fa-angle-up_8").toggleClass("fa-flip-vertical");
});

$(".cartBtn8").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Rehydrated Pizza $<span id='itemPrice8'>15.99</span></li>");
    totalPrice.push($("#itemPrice8").text());
    total += Number((Number($("#itemPrice8").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 8th card

$(".fa-angle-up_9").on("click", function () {
  $(".hide9").toggle();
  $(".fa-angle-up_9").toggleClass("fa-flip-vertical");
});

$(".cartBtn9").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Burgers $<span id='itemPrice9'>14.99</span></li>");
    totalPrice.push($("#itemPrice9").text());
    total += Number((Number($("#itemPrice9").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 9th card


$(".fa-angle-up_10").on("click", function () {
  $(".hide10").toggle();
  $(".fa-angle-up_10").toggleClass("fa-flip-vertical");
});

$(".cartBtn10").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Upscale TV Dinner $<span id='itemPrice10'>13.99</span></li>");
    totalPrice.push($("#itemPrice10").text());
    total += Number((Number($("#itemPrice10").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 10th card

$(".fa-angle-up_11").on("click", function () {
  $(".hide11").toggle();
  $(".fa-angle-up_11").toggleClass("fa-flip-vertical");
});

$(".cartBtn11").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Sloppy Joes $<span id='itemPrice11'>13.99</span></li>");
    totalPrice.push($("#itemPrice11").text());
    total += Number((Number($("#itemPrice11").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 11th card

$(".fa-angle-up_12").on("click", function () {
  $(".hide12").toggle();
  $(".fa-angle-up_12").toggleClass("fa-flip-vertical");
});

$(".cartBtn12").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Lasagna $<span id='itemPrice12'>17.99</span></li>");
    totalPrice.push($("#itemPrice12").text());
    total += Number((Number($("#itemPrice12").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 12th card

$(".fa-angle-up_13").on("click", function () {
  $(".hide13").toggle();
  $(".fa-angle-up_13").toggleClass("fa-flip-vertical");
});

$(".cartBtn13").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Jello $<span id='itemPrice13'>7.99</span></li>");
    totalPrice.push($("#itemPrice13").text());
    total += Number((Number($("#itemPrice13").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 13th card

$(".fa-angle-up_14").on("click", function () {
  $(".hide14").toggle();
  $(".fa-angle-up_14").toggleClass("fa-flip-vertical");
});

$(".cartBtn14").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li id='itemPrice14'>Ice Cream Soda $<span class='itemPrice'>3.99</span></li>");
    totalPrice.push($("#itemPrice14").text());
    total += Number((Number($("#itemPrice14").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 14th card

$(".fa-angle-up_15").on("click", function () {
  $(".hide15").toggle();
  $(".fa-angle-up_15").toggleClass("fa-flip-vertical");
});

$(".cartBtn15").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li id='itemPrice15'>Bostom Cream Pie $<span class='itemPrice'>4.99</span></li>");
    totalPrice.push($("#itemPrice15").text());
    total += Number((Number($("#itemPrice15").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 15th card

$(".fa-angle-up_16").on("click", function () {
  $(".hide16").toggle();
  $(".fa-angle-up_16").toggleClass("fa-flip-vertical");
});

$(".cartBtn16").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Pineapple Upside Down Cake $<span id='itemPrice16'>5.99</span></li>");
    totalPrice.push($("#itemPrice16").text());
    total += Number((Number($("#itemPrice16").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 16th card

$(".fa-angle-up_17").on("click", function () {
  $(".hide17").toggle();
  $(".fa-angle-up_17").toggleClass("fa-flip-vertical");
});

$(".cartBtn17").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Ice Cream Sundae $<span id='itemPrice17'>4.99</span></li>");
    totalPrice.push($("#itemPrice17").text());
    total += Number((Number($("#itemPrice17").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 17th card

$(".fa-angle-up_18").on("click", function () {
  $(".hide18").toggle();
  $(".fa-angle-up_18").toggleClass("fa-flip-vertical");
});

$(".cartBtn18").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Chocolate Malt $<span id='itemPrice18'>3.99</span></li>");
    totalPrice.push($("#itemPrice18").text());
    total += Number((Number($("#itemPrice18").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 18th card

$(".fa-angle-up_19").on("click", function () {
  $(".hide19").toggle();
  $(".fa-angle-up_19").toggleClass("fa-flip-vertical");
});

$(".cartBtn19").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Pepsi Free $<span id='itemPrice19'>1.99</span></li>");
    totalPrice.push($("#itemPrice19").text());
    total += Number((Number($("#itemPrice19").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 19th card

$(".fa-angle-up_20").on("click", function () {
  $(".hide20").toggle();
  $(".fa-angle-up_20").toggleClass("fa-flip-vertical");
});

$(".cartBtn20").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Tab $<span id='itemPrice20'>1.99</span></li>");
    totalPrice.push($("#itemPrice20").text());
    total += Number((Number($("#itemPrice20").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 20th card

$(".fa-angle-up_21").on("click", function () {
  $(".hide21").toggle();
  $(".fa-angle-up_21").toggleClass("fa-flip-vertical");
});

$(".cartBtn21").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Milk... Chocolate $<span id='itemPrice21'>1.99</span></li>");
    totalPrice.push($("#itemPrice21").text());
    total += Number((Number($("#itemPrice21").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 21st card

$(".fa-angle-up_22").on("click", function () {
  $(".hide22").toggle();
  $(".fa-angle-up_22").toggleClass("fa-flip-vertical");
});

$(".cartBtn22").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Coffee $<span id='itemPrice22'>1.99</span></li>");
    totalPrice.push($("#itemPrice22").text());
    total += Number((Number($("#itemPrice22").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 22nd card

$(".fa-angle-up_23").on("click", function () {
  $(".hide23").toggle();
  $(".fa-angle-up_23").toggleClass("fa-flip-vertical");
});

$(".cartBtn23").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Sweet Tea $<span id='itemPrice23''>1.99</span></li>");
    totalPrice.push($("#itemPrice23").text());
    total += Number((Number($("#itemPrice23").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 23rd card

$(".fa-angle-up_24").on("click", function () {
  $(".hide24").toggle();
  $(".fa-angle-up_24").toggleClass("fa-flip-vertical");
});

$(".cartBtn24").on("click", function(event){
    event.preventDefault();
  // stops the form from submitting on button click
    $(".orderList").append("<li class='list-items'>Cocktails $<span id='itemPrice24'>8.99</span></li>");
    totalPrice.push($("#itemPrice24").text());
    total += Number((Number($("#itemPrice24").text())).toFixed(2));
    $("#orderTotal").text("$"+total);
    window.scrollTo(0, 0);

})
// functionality for the 24th card

  
// When the user tries to checkout, they will receive a failure message
$("#orderSubmit").on("click",function(event){
    alert("Sorry! It looks like we are experiencing some technical difficulties. Please call to place your order!")
    event.stopDefault()
})



// end of onlineOrders javascript

