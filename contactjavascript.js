var submit = document.getElementById("submit");
submit.addEventListener("submit", function () {
  var fname = document.getElementById("fname").value;
  var enquiry = document.getElementById("enquiry").value;
  alert(
    `Thankyou for contacting us regarding your ${enquiry} enquiry ${fname}. We will be in touch with you soon.`
  );
});
