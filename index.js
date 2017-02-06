var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    var key = Object.keys(cart[i])[0]
    total += cart[i][key]
  }
  return total;
}

const addToCart = (item) => {
  // we have item that is a string
  // we need a price that is a random number between 1 and 100
  // we need to be able to store an object with the item as a key and the price into our cart
  // then we need to "log" our string that the item has been added.
  // then we return the cart.

  var price = Math.floor(Math.random() * 100) + 1;
  var itemAndPrice = {[item]: price}
  cart.push(itemAndPrice);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

const viewCart = () => {
  if (!cart.length)
    console.log("Your shopping cart is empty.")
  else {
    var msg = "In your cart, you have "
    var array = []
    cart.forEach((itemObject, index) => {
      // cart = [{puppy: 40}, {iPad: 24}]
      // itemObject = {puppy: 40}
      var key = Object.keys(itemObject)[0] // "puppy"
      var price = itemObject[key] // object[key] === value // itemObject["puppy"]
      // create a string and store in an array that we won't create in our forEach loop but above it so it doesn't get reset to [] each loop
      array.push(`${key} at $${price}`) // puppy at 42
    });
    msg += array.join(', ') + "."
    console.log(msg);
  }
}

const removeFromCart = (item) => {
  // lets make a for loop that looks for an item and acts as if it finds that item (don't worry about the else)
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(num){
  if(!num){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`)
    cart = [];
    return cart;
  }
}
