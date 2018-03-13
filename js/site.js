//JS Validated

jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('#age-verification').prop('checked', true);
});

document.getElementById("submit").addEventListener("click", confirm);
function confirm(event){
  if((document.getElementById("fullname").value === "") 
     || (document.getElementById("email").value === "" ))
  {
    alert("Please fill out your name and your email address.");
    return false;
  }
  else
  {
    alert("Thank you for entering the giveaway. Good luck!");
    return true;
  }
}
