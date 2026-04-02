import { products } from "../data/db.js";

const cartItems = JSON.parse(localStorage.getItem("cartItems"));
const cartItemsElement = document.querySelector(".card");

if (!cartItems || cartItems.length === 0) {
  cartItemsElement.innerHTML = "<p>No items in the cart</p>";
} else {
  for (let i = 0; i < cartItems.length; i++) {
    const cartItemId = cartItems[i].id;
    const cartItemQuantity = cartItems[i].id;

    const cartItem = products.find((p) => p.id === cartItemId);
    console.log(cartItem);

    const cartItemElement = createCartItem(cartItem, cartItemQuantity);
    cartItemsElement.appendChild(cartItemElement);
  }
}

function createCartItem(cartItem, quantity) {
  const article = document.createElement("article");
  article.classList.add("cart-item");
  const itemImage = document.createElement("div");
  itemImage.classList.add("item-image");
  article.appendChild(itemImage);

  const itemName = document.createElement("h2");
  itemName.classList.add("item-name");
  itemName.textContent = cartItem.title;
  article.appendChild(itemName);

  const itemMeta = document.createElement("p");
  itemMeta.classList.add("item-meta");
  itemMeta.textContent = `Qty: ${quantity}`;
  article.appendChild(itemMeta);

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("item-price");
  itemPrice.textContent = `$${cartItem.price}`;
  article.appendChild(itemPrice);
  return article;
}

{
  /* <article class="cart-item">
            <div class="item-image"></div>
            <div>
             <div>
              <h2 class="item-name">Linen Overshirt</h2>
             <div>
              <p class="item-meta">Qty: 1</p>            
            </div>
            <p class="item-price">$79.00</p>
          </article> */
}
