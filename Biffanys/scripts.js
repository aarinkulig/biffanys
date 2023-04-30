// menu page javascript

// $(".hidden").hide();

window.onload = function () {
  window.scrollTo(0, 0);
};
//   when the page is reset, it will scroll back up to the top

$(".card").on("click", function () {
  $(".shown").hide(); //hides the carousel after a card has been clicked
  if ($(window).width() > 600) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".rightSide").offset(),
      },
      0
    );
  } else {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".rightSide").offset(),
      },
      0
    );
  }
});
// doesn't work for mobile

$("#randall").on("mouseover", function () {
  $(".newName").text("Randall");
});
// changes the name of the burger to Randall when you hover over it

$("#card_mc_6").on("click", function () {
  setTimeout(function () {
    $(".garfield").attr(
      "src",
      "https://cdn.vox-cdn.com/thumbor/DTRZv9ac_FDnMhldGGFLRZ2cxTE=/0x0:1280x640/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/19410683/maxresdefault.jpg"
    );
  }, 5000);
});
// executes a function that changes the image from lasagna to garfield with lasagna after 5 seconds when you click on the lasagna page

$(".first").on("mouseover", function () {
  $(".first").text("hundredth ones");
});
// changes the text from first ones to hundredth ones for legal reasons
// menu page javascript

// special events page javascript

$("#disclaimer").on("mouseover", function () {
  alert(
    "Biffany's Inc. is required by law to inform you, that you CAN in fact lose."
  );
});

// I need to validate that the form is correctly filled out with the following criteria, it needs to have the right number of characters in each box, if not, it will highlight that box red and prompt the user to correct the error. The checkbox needs to be checked, if not, the borders will need to highlight red

// If all parts of the form have been filled in correctly, then when the user selects the submit button, it should respond with a success message

var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

$(".cardBtn").on("click", function (event) {
  event.preventDefault();
  // prevents the button from performing default action
  // if the email is blank when the button is submitted, it will pop up with an alert
  if (!testEmail.test($("#email").val())) {
    $("#email").css("border", "red solid 2px");
    alert("Please enter a valid email address.");
    // if first name doesn't have a value, the same thing
  } else if (!$("#fname").val()) {
    $("#fname").css("border", "red solid 2px");
    alert("Please enter your first name.");
    $("#email").css("border", "black solid 1px");
    // if last name doesn't have a value, the same thing
  } else if (!$("#lname").val()) {
    $("#lname").css("border", "red solid 2px");
    alert("Please enter your last name.");
    $("#fname").css("border", "black solid 1px");
    // If the checkbox isn't check, then run the following code
  } else if (!$("#checkbox").is(":checked")) {
    alert("Please agree to the terms and conditions.");
    $("#lname").css("border", "black solid 2px");
  } else {
    $("#success_message").text("Thanks for subscribing!");
    $("#email").css("border", "black solid 1px");
    $("#fname").css("border", "black solid 1px");
    $("#lname").css("border", "black solid 2px");
    $("#email").val("");
    $("#fname").val("");
    $("#lname").val("");
    $("#checkbox").prop("checked", false);
  }
});

// end of special events javascript

