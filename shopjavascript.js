// SHOPPING CART EFFORT
// Create items library
const products = [
  {
    Name: "Cards",
    Price: 5,
    Picture: "CowCloseImages/Cards.jpg",
    addedToCart: false,
  },
  {
    Name: "Chalk Boards",
    Price: 20,
    Picture: "CowCloseImages/Chalkboards.jpg",
    addedToCart: false,
  },
  {
    Name: "Bird Feeders",
    Price: 15,
    Picture: "CowCloseImages/Bird Feeder.jpg",
    addedToCart: false,
  },
  {
    Name: "Bread Feeder",
    Price: 10,
    Picture: "CowCloseImages/Bread Feeder.jpg",
    addedToCart: false,
  },
  {
    Name: "Bird House",
    Price: 25,
    Picture: "CowCloseImages/Bird House.jpg",
    addedToCart: false,
  },
  {
    Name: "Trugs",
    Price: 55,
    Picture: "CowCloseImages/Trugs.jpg",
    addedToCart: false,
  },
  {
    Name: "Clock",
    Price: 50,
    Picture: "CowCloseImages/Clocks.png",
    addedToCart: false,
  },
  {
    Name: "Desk Organiser",
    Price: 120,
    Picture: "CowCloseImages/Organiser.jpg",
    addedToCart: false,
  },
];

// Filter based on cost
const priceLessThan50 = products.filter((product) => product.Price <= 50);

const priceLessThan50Names = priceLessThan50.map((product) => product.Name);

console.log(priceLessThan50Names);

// Calling products to page

// Get the product page container (where we want to put our new elements)
var productpage = document.getElementById("productpage");

// Then for each product (in the products array)
products.forEach(function (productdetails) {
  // Create a div
  var item = document.createElement("div");
  item.className = "card";

  // Product Image
  var productimage = document.createElement("img");
  productimage.src = productdetails.Picture;

  // Product Name
  var productname = document.createElement("p");
  productname.innerText = productdetails.Name;
  productname.className = "productname";

  // Product Price
  var productprice = document.createElement("p");
  productprice.innerText = "£" + productdetails.Price;
  productprice.className = "productprice";

  // Add our element to the bottom of the page
  item.append(productimage);
  item.append(productname);
  item.append(productprice);
  productpage.append(item);
});
