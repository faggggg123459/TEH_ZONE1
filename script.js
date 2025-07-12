// Статичний список товарів
const products = [
  // Телефони
  {
    name: "iPhone 15 Pro",
    price: "49 999",
    image: "img/iphone15.jpg",
    category: "phones",
  },
  {
    name: "Samsung Galaxy S24",
    price: "42 999",
    image: "img/galaxy_s24.jpg",
    category: "phones",
  },
  {
    name: "Redmi Note 13",
    price: "11 499",
    image: "img/redmi13.jpg",
    category: "phones",
  },

  // Ноутбуки
  {
    name: "MacBook Air M2",
    price: "59 999",
    image: "img/macbook_air.jpg",
    category: "laptops",
  },
  {
    name: "Lenovo Legion 5",
    price: "36 999",
    image: "img/legion5.jpg",
    category: "laptops",
  },
  {
    name: "HP Pavilion",
    price: "22 499",
    image: "img/hp_pavilion.jpg",
    category: "laptops",
  },

  // ПК / Консолі
  {
    name: "PlayStation 5",
    price: "23 999",
    image: "img/ps5.jpg",
    category: "pcs",
  },
  {
    name: "Xbox Series X",
    price: "22 999",
    image: "img/xbox.jpg",
    category: "pcs",
  },
  {
    name: "ПК RTX 4060",
    price: "38 499",
    image: "img/gaming_pc.jpg",
    category: "pcs",
  },
];

const cart = [];

function createProductCard(name, price, imgUrl) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow">
        <img src="${imgUrl}" alt="${name}" class="card-img-top">
        <div class="card-body text-center">
          <h5 class="card-title">${name}</h5>
          <div class="rating mb-2">★★★★★</div>
          <p class="fw-bold text-success">${price} ₴</p>
          <button class="btn btn-buy" onclick="addToCart('${name}', '${price}')">До кошика</button>
        </div>
      </div>
    </div>
  `;
}

function renderProducts() {
  const categories = {
    phones: document.getElementById("phones-list"),
    laptops: document.getElementById("laptops-list"),
    pcs: document.getElementById("pcs-list"),
  };

  products.forEach((product) => {
    const html = createProductCard(product.name, product.price, product.image);
    categories[product.category].innerHTML += html;
  });
}

document.addEventListener("DOMContentLoaded", renderProducts);

function addToCart(name, price) {
  const existing = cart.find((item) => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  updateCartCount();
  updateCartItems();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  updateCartItems();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.reduce(
    (total, item) => total + item.qty,
    0
  );
}

function updateCartItems() {
  const list = document.getElementById("cart-items");
  list.innerHTML = "";

  if (cart.length === 0) {
    list.innerHTML =
      '<li class="list-group-item text-center">Кошик порожній</li>';
    return;
  }

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center flex-wrap";
    li.innerHTML = `
      <div class="fw-bold">${item.name}</div>
      <div class="cart-item-qty">
        <button onclick="decreaseQty(${index})">−</button>
        <span>${item.qty}</span>
        <button onclick="increaseQty(${index})">+</button>
      </div>
      <div><strong>${item.price} ₴</strong></div>
      <button class="btn btn-sm btn-outline-danger ms-2" onclick="removeFromCart(${index})">×</button>
    `;
    list.appendChild(li);
  });
}

function increaseQty(index) {
  cart[index].qty += 1;
  updateCartCount();
  updateCartItems();
}

function decreaseQty(index) {
  if (cart[index].qty > 1) {
    cart[index].qty -= 1;
  } else {
    cart.splice(index, 1);
  }
  updateCartCount();
  updateCartItems();
}

function clearCart() {
  cart.length = 0;
  updateCartCount();
  updateCartItems();
}

function toggleCart() {
  const modal = new bootstrap.Modal(document.getElementById("cartModal"));
  updateCartItems();
  modal.show();
}

function openSupport() {
  alert("Зв’яжіться з нами: info@tehzone.com або +38 (093) 123 45 67");
}
