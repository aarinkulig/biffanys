// menu page javascript

// $(".hidden").hide();

window.onload = function () {
    window.scrollTo(0, 0);
  };

  $(".timeSlots").hide();

  // If all parts of the form have been filled in correctly, then when the user selects the submit button, it should respond with a success message
  
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

  $("#datepicker").datepicker({
    onSelect: function(dateText, inst) {
        $(".timeSlots").show();
    }
});

  $(".btn").on("click", function (event) {
    $(this).css("background-color","#0303fc");
    event.preventDefault();
  })
  
  $("#submit").on("click", function (event) {
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
    } else if(!$("#datepicker").val()){
        $("#email").css("border", "black solid 1px");
      $("#fname").css("border", "black solid 1px");
      $("#lname").css("border", "black solid 2px");
      alert("Please enter a date for your reservation!");
      }else {
      $("#success_message").text("Thank you for dining with us! Check your email for more information about your reservation. See you real soon!");
      $("#email").css("border", "black solid 1px");
      $("#fname").css("border", "black solid 1px");
      $("#lname").css("border", "black solid 2px");
      $("#email").val("");
      $("#fname").val("");
      $("#lname").val("");
      $("#checkbox").prop("checked", false);
    }
  });


  

  
 
  