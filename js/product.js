const displayCartProduct = () => {
  const cart = getCart();
  for (const product in cart) {
    displayProduct(product, cart[product]);
  }
};

const calculateProduct = () => {
  const productNameElement = document.getElementById("product-name");
  const productNameValue = productNameElement.value;
  const productPriceElement = document.getElementById("product-price");
  const productPriceValue = productPriceElement.value;
  if (!productNameValue || !productPriceValue) {
    return;
  }

  //   display in the local storage
  addCartToStorage(productNameValue, productPriceValue);

  //   display in the ui
  displayProduct(productNameValue, productPriceValue);

  productNameElement.value = "";
  productPriceElement.value = "";
};

const displayProduct = (name, value) => {
  const ul = document.getElementById("product-details");
  const li = document.createElement("li");
  li.innerText = `Name: ${name} Price: ${value}`;
  ul.appendChild(li);
};

const addCartToStorage = (name, value) => {
  const cart = getCart();
  if (cart[name]) {
    cart[name] = parseInt(cart[name]) + value;
  } else {
    cart[name] = parseInt(value);
  }
  console.log(cart);
  const cartStringyfied = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringyfied);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let myObj;
  if (cart) {
    myObj = JSON.parse(cart);
  } else {
    myObj = {};
  }
  return myObj;
};
displayCartProduct();
