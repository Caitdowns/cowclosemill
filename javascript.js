var images = document.querySelectorAll("#imagegallery img");

var popup = document.getElementById("gallerypopup");
var popupimage = document.getElementById("gallerypopupimage");

popup.addEventListener("click", function () {
  popup.classList.remove("active");
});

images.forEach(function (image) {
  image.addEventListener("click", function () {
    popup.classList.add("active");
    popupimage.src = image.src;
  });
});
