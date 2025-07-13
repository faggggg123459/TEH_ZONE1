const products = [
  {
    name: "iPhone 15 Pro",
    price: "49 999",
    image:
      "https://img.jabko.ua/image/cache/catalog/products/2023/09/122300/1-1397x1397.jpg.webp",
    category: "phones",
  },
  {
    name: "Galaxy S24",
    price: "42 999",
    image:
      "https://img.jabko.ua/image/cache/catalog/products/2024/01/190944/54sdsds-1397x1397.jpeg.webp",
    category: "phones",
  },
  {
    name: "iPhone 13",
    price: "25 499",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSpgrBdv6kjlXkUc7XLD1fO2ExctHX_KCVB0znAqPbJo1WIQj_uVmIxljwl51G3QQbNwDIbzKW4tMS6uJZqOSYUYiNZDYVs4I16XH45yUr2aQmHFxIhg4NW5g",
    category: "phones",
  },

  {
    name: "MacBook Air",
    price: "59 999",
    image:
      "https://www.istore.ua/upload/iblock/dae/vx1r87f6vjou28rstfvf2qxz1wqnnzk9/MRXV3_6_is.png",
    category: "laptops",
  },
  {
    name: "Legion 5",
    price: "47 000",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRtRruTizaS1iV2EJJysKAOqa2wWyj9M7PUtPj-NDZ1zk3gyi7BfYDy2_Q19KvxOxNjUFjwY_mryjJ1jDBAcGHTJQ5zROfrxLVaUGjiz_Mi",
    category: "laptops",
  },
  {
    name: "HP Pavilion",
    price: "22 499",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR2687UIGrimszbD7TaiMFE7GKGiHqwWCXrfpp9kqGtGSTuqQDUn361hGl4sMnOS2iCRbWuaEEpe-P8JyEEBa_F8uIfJ4eg4kGM-4qwJSY",
    category: "laptops",
  },

  {
    name: "PlayStation 5",
    price: "23 999",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQh_BlYzmL0f7QM3S-jlE-BBc37pKUpxXXW7bjs8MNp_9H1FO6XVkIpgOPIPncFZayNLH1gixLkxvBpn0uVtG8m2bBp-bNbWc_BBTAj8L51bDc9Qn9TT-WQiA",
    category: "pcs",
  },
  {
    name: "Xbox Series X",
    price: "22 999",
    image:
      "https://yabloki.ua/media/cache/sylius_shop_product_original/f8/b5/igrova-pristavka-microsoft-xbox-series-x-1tb-889842640816_800647e8-9450-472b-aa62-ecc2e61df9d0-4.png.webp",
    category: "pcs",
  },
  {
    name: "ПК RTX 4060",
    price: "38 499",
    image:
      "data:image/jpeg;base64,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",
    category: "pcs",
  },
  {
    name: "ПК RTX 4060",
    price: "38 499",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISERUSEBIVFRUVFxYVFxcWFRUVFxUVFhUWFhcVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0dHR0tKy03LSstLSstLS0tLS0tLS0tLS0rLS0tLS0tLS0rKystLS0tLS0tKystKy0tLS4tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAwIEAQUGBwj/xABOEAABAwEDBggICwYEBwEAAAABAAIDEQQhMQUSQVFxsQYTImFykaHBIzIzUoGy0dIVJENic3SCk7PC8BQ0QpLD4QdUg9NEU2Nko8TxFv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAgICAwEAAwAAAAAAAAABAhEDMRIhBBNBUQUiMv/aAAwDAQACEQMRAD8A8SRRZQFWoAshZCkxhOAVakYCkrUVhJxuVyOytbortW5jXTHC1qS07ECMbU+cX11qACul8WAFJoWQ1TzVV0I2qb2XKbGqYarGoq0WWxkmgvJTHsoVtsi2L5R2xveVvTWk4LHmtA6+codCtkY0mRzRiU0z4tc6FLdCrUloGgdarSSk/wBk0niS+JJcAmOCW4JpmwsqBTCFGijFQUHv1J0kV29JLVLLGaUsUTCFEqac6gQophCiQmmUEKVEKaC0xkRKZGAntXOR3mLEVnGm9W42gYJbE5q6SO2M0Y1E5o0oal2o3ALTp+Kb23fr9algNTQEBqjCAaphuCkGpjG3pSgNTA1YdI0YkBJdb2DCpS5SJcpFgRAkZxoK9i2/7RQANAA0ably8lvJwAHakvtDz/EdguCn2yM/dJ+OlmtHnPA5iQOxNfYJAK5hpfeLxcK3nRcuTh8ZvSG8L2DJY5B2jcU+2sXnv5HAObdXQbwdBB0gpbgu/tPB+J5aWVjIJ8Smac4itW4c9RShJ568rljJ8lneWStY6l+cwkXGtDQgam9fMr9v9Wc++40zgluCt50ZwLm7RX9YjrCx+zV8VzTsKvnjV+zGqYZVOZDRW2WeiHMXfDGdl9qpaqc0dDzLYPCRI2q3nhuOdUCFAhOcFAhefTFLIUaJlFEhTTCFFlZohTQXE6ittVKisWd+jqXKPTFtic1JanNXSOsNakWg3p7VUnPjHalayuoiXAYlRfamjC9UaKQauXnXm+2nuth0CnakumccSUZizhqWbbWLlb2WAVIMKlnrAeiARrIaFkuWKoBnjt6Td4XsWTRyD0u4rx2Lx29Ju8L2TJ7eQel3FIzV+IXhcvw5Hxl4+Y1dVCLwuX4dj407otVRwsI8UV0s32b3uxRhB5N2hnaLP71PSUyDFu2PfZFizYM/0/8A01GkopnUxdgOf+Fh59L+1WIZXOreCBo5s4jEcwS7Ibur8OzqxEfG2DerLpEJKaMEh4Vilw2JTwvqTp2qpM3Sq5CuOCrPbRcs8dXbmUVEhMUSFy0zUELNEJpkgBZCKKQC4PUuWd9Rzqy1a2N1DVbGN1RULUdcTa3KpMOSdisuwSZhyTsVy6XLprmBSop2Zta11V3K/ZcmOkvANN/pNwXn3p42sQtvLkN41b+4IiyK+hqAK4Eup2DaEl30jTFZaFbtFhLH5hIJrS7DAe1K4q+g0qqXRYorb8ly6BXs7Cq7rO5h5QI2pqpLL0Wzx29Ju8L2bJw5B6Q9Urxpnjt6Td4XteTW8g9IeqrEq5A28bVy/DwfGX9Fq62IYLluG370djN6I4FhFajDjhGNgdD3RqVnj8Xme2P0t/Zq/huSbC0kRfWKnnPgvaVbsktQwC/OtLiTsEftKjRdnup0s30hkHulWIDc7ZT0hwB7UPhAkaBeP2l1/wDpt9rkrJrqx11h565Qe9EPpcNiS8KbTcsOK+rj072qzgkyNqrT2pDglm451VookJrwoELhYxUKITeLQppFSikAgBTawnALzPUiE+zSUNDgVFsJ5kwRDn3LUam1xyXOOSdiyx91+hZmHJOwq3prLojJFlMsgYP4ru3+y9byRwcq0Na24LzrgS341H9r1XL6J4IxMLdFRoXg58OTKf6HDhJxZclm9OJtvBB2YSGrzC1QMcQHOcM/NjIDGAhxaM2tRW8aaacV3WVuE1ufPNaY7S5jYZHMbDXweaxxGa6PB1aXk334i5aRlhjBzmxsBJzrmgXkaFrg4s8J/tdvLyT3/HJ5SZ4egBucNzQNuC6jg5wWIYJHjluwGOa32laq2Q1m+2NzR7V7rkTI4IAop8jkuEkn68vNM8p44/rzt/BuuhaDLGRg25wqOdel/wCIPCaDJrmQss/HzPGeQ5+Y1jK0qSATUkGg5ly9stUVugFphBYDnNcxxqY5GAEsqByqhzSDdUOvoQV9H/G4eV8c+6z8L4vNeSzKx5HaIMyYN+c3qJC9oyaOQekPVXkOWG0tX2mdy9fycOQekPVXHkx8c8p/K9WXa9HiFzHDOP43U/8AT3rqGXU11XM8MxW1gfR71hl5xZH0MJGHHnfCrdkaBxRbeP2hx7IlVgcKQgf5g74VYybIWiJpwNoPYIvak00uMY3OYK4Wkjb4Nt6p5L8l6HfiNRZbRnvjPnWlx6mRDvUckeRHRd+IxdOWy5ejIxYKKqLivoY9Ru0EpTyNKi+ZuvqvSXTDn3Jaz7Sc3V/dDI9aSX8w370C1EHlYEdV5XLOs1YzVhZ41usdaFnaEAagB+takgBSAXB7gApAIAUwFVACjJUA0wKYAiUck7FL0l6WOClpEdpjc7CtOsEd69v4LZW4ufNd4rx2rwCzC/Zeu7yDwiDmhkpo8YO1/wB12+Hlh7wz/Xb4PNxyZcXJ1k9Jy7/h/ZZ5nWgTvja858kbQCHO0lpPi103FcKymrVuPsWxky7Jm0zqimtc3KC80ZM0Z1A0h0lzhqo4Ct56lfk8H1STe3n+XxTj1JltWtjPD11vA6g09/Yvfciyii+fsqAicipvduAv7V6VwH4TcdEA4+EjoHjXqeNu8FfK+Rhbqz8ebCbqp/jJwbnkmjtcEbpW8XxUjWAuc3NcXNdmi8g5xHNTnWg4O2KSCxP45pa6WUvDDcWtDA0ZwOBJrdqAXqdryxyCAdC87ymw8ouddeetfT/xfj/3ndafW+F8fDDfLneunl+WG1tg6ce8L2Cx8lpHzu4ryLKYa61AtOD4+wheuWG9h6XcuHNl5cmV/tr5PJd5WrURrRctwyNLbX6PeunjuI2rmOGprbB/p+subDz2zPA4kjE2g74ViwurxNf8yd0KhY3V4m4X2rUBphwpgp5PI8BcP3o67roefeo0xks3wfWH+rAn5G8iOi/8SNKybSsF3/EP04cmBNyPTihTDNfz/KRoilLO6pFdJwuSSVKTxjtO9RX0cemwhCwluktZSrQLxs7yntCTaReNneVixilIQhRFpriOf9a06N4OHUsualuiXLWnu1YsgKQCqslcMbx29atRSB2HVpRZUwFiUck7EwBYlHJOwpely6KsbQW6K1O3Ro04Ky1o5v7VN9e9UIxcnwROc7NaCSbgACSdgC4PC2ELdIuN19+P6/st/DaIs5pEchJIc2r68q9oNC46lzcLCtzkchkrHPNAHVNAa9SoLfHI9/GiN1K5+BwIBqeal6o2O3PhkEkVQR2jSDzLrMptD42mzmYvIa12eKMzQzNoDmipFAMb71pTA+EtcWgOxBzho2FQ6bX/APbgij4pK/NpTtIWlyrwidMC1rHNHPj2JXFNzmuLQQa3EgaDcakaqqMsUdagmu0Y+zBWXXTp9uWtbczUiVtcc5u8L2ixHkV+d3LyK2UEo0kFncvWcmOqw9IblI51fbeQuV4Z/vn3e9dU3ELlOGZ+N/yb0R53YfkPrX+ymZPHkPrR3QpdhHkfrP8Asp9kIHFD/uT2CJRpHJ4vh+sv9WBMyN5EdF/4kSsxwAGMjD9pPayL2KtkYeCHRf8AiRJEa6XxjtO9RUpfGO071DFfR3qNbCkAhoUwFmRlkBV7XiNneVbAVW2eMNneVcp6ZJQhCwNm01CC1KhdQ01709Yl3H0Z7LLUt0asKJCtiWIx2hzcbx2q0ZWuaaHRhp6lVLVAsWLPTN3IZDh6VeyYaTD7WPRcqMGHpTh412tcHjbmraAAm68VAxOOC3OTbS5kZGeAHszDyRXMz8+gdtANcVobMKUJPoWwDm4Z3YepBu7ZlWSaFsBe3MjOcM4GteVgQCT4xVMRh+aHOFwxINBWpNBtJVNr83DFXoy5jQ4C8HDm0oKZiaXkONADcaV7FGeyR6Jh/K5XILcxsue6POGJadPMVsncIbNd8UZjrJrzc3/xGbbPx5/lSENno1wcKtvAI1aCvU8lDwZ6Q3LzTLEofaM5ooCWbgvSsm+TPS/Ki1sG4hcpwz/e/QzeupiN4XL8MP3v+Teg89sJ8j9ZP9FSsjaGHT8ZduhS7EfI/We+FPye66Ea7QewRe1I0uRNoIm6rUPUYq2SPJ+h/wCJEiyzlxi57S49TIvasZHPgh0X/iRrfJZcvRWtl8Y7TvQApPHKO071kBerGIy0KYClHETgFYZZdZXWRCAFUt3jDZ3lbcRgaKnnWLQwHEAqZezTRLK2n7KzzR2oWPGorPCex1RVKRCaGnpXCeq+h1TkIQuihYcFlS4okG7QpekvRcRGbpzq81Ke1XGUDwW1pU0qRWnORdVVIS0imF6sgdhXleJdZGDQ1TnEYA4KpY5gLiO1PJANw7UZXYJW3F19PRX06FspXgipeBWlBnG7XW69aMPGpPZLhh6b0Fria0DXAkmlBeebbVStFmdEW1FRo5NBW4EEkaCaV5lUzjjX2qMsztJJ5iaoNbbL5hzlurWNS9MsPiHpdy8umPhB0m7wvUbL4h6XchVuI3hcvwyPxr+Teunh0bVy3DA/G/5N6o4GytI4m7C0X818OKnYARxPNaDXqhSbIPI/WDviU7APIfTu3RLKp5OBrD9PJpHmw+xOyQKRDov5/lGaQq+TRfB9LL6sKfkfyI6LvxGoMNsVTUnG+72p7IGjAdd6lnKINcF9PGTQnnKQCGtosrVVgBLmGCZVQkwWUpSFFCjKqAFksGOpRZemryvo2L8OYQCGjqCaKah1Ba2zSUNNB3q3nrUqxbjFUuVxzXbCkNlop2mWrHU1Hcl6Muq1hGnnTbPLR1+FVWs8lLlMVqvK8C61x0YbFYY936oqLGnWOuisMiPnN6wqi2Hn9UWWOuVfiiNIUmgjSOtEWuNSZH/q5YmlqxozRnAuq4G8g0u9F6qPeedFLnf4QbW9y9RsLvB/aHqryZz/AAgr5zd4Xqtgd4P7X5UiVsYcQuV4YH43/JvXUQYhcrwwPxo7Gb0HBWX5H6fviTrELoPpnf00qx/I/Td8afZX+RaMOOdfszBco0jYm0MPNLL6rPYm5I8kB8134gT3NFWEYcfJTYWH2JOS/Jjou/ETpE2gn2p7RTBRabgs1X1Z0MkrFVglRJSqlVYJUM5RLllKXnLKlQIURVY2gUqqJKKryvoMOTo5KhJqiKTNdXQcfagttaVJ7qNdTUVKqhaDyXbCrelvTWQm/rVkFUonXqznrzR4FhrlPPVTPWc9VFvOCyJuc9ZVQk0roOnXTGixnoLhnPnHrUXzfOPZ7FUzlguRS3yeFHSbvC9XsDvB/b/KvIyfCt6Td4Xq9gPg/t/lSJW3s5XK8LxW0nY1dLZzeuX4YvpaHEaAD1IkcVYm+R+mI9NY0yxwkcRzSvFefkKbQBcDhOHDYSAPXb1Jsb7hQ/KcYPtUu/8AIOpSNGAXxtH/ADpAPQ0gb0nJfkx0T+IfYpE3VBwc549LXe92Kdn/AIqYcrtleVvPLyuy1kG5YJRW5QcV9KdRdJFyjnKBcoFyUTLlEuUC5QLllKbnISc5CjLdjK8nmxfcQ+6j4Yk82L7iH3Vqs9Gevmbb3W1+GJPNi+4h91HwvJ5sX3EPurVcYomZNm63HwzJqi+5h91JtuV5HRvaRHQtIuiiBvGghtQtU60JMk9RTWrs3VOJ1CrTXjWl2axOkdmxjOJ0Yb1CezPYSHtIIuodaItgqQWuqQpiU602NvNMCxrAMMTz313pNyottBTG2rmQ0tUCCEkWkKYkB0qorv8AKDpN3heo2F3g/tflXlrvKDpN3hem2B3g/tdyQra2d14XMcMD4d/RC6OA3hcxwtd4Z5+b3KpHLMxb0metCpWf+HY3+l7FBjsDzjVoMXsWI30A2N/p+xZaPcbjsPqlNs5veNv4svsVKSe43jD8rlKK2taXVvrX13n81UG3jyvIAABHcAL4YibtZLb1L4Zl1RfcQ+6tSHoz03RtvhmTVF9xD7qx8MSaovuIfdWqz0Z6bo2vwxJ5sX3EPuo+GJPNi+4h91arPRnpuja/C8nmxfcQ+6harPQm6EF6iXlLzkZygHOKW4lMqiqCs6qWaq4sFoQVYpXsNWOc0jSCQesImme81e4uPOSVYMYUTEEFYOOtZ4wpxhUTCghxg1KQeNfZ7FgwqJiKBnpCzRJLCgVGCCzCeU3aN4XpdkfSO/zvyrgrDa7OIyJWuz7s1wFaEelTyplYPAEbpMLwbhXCtMPSrPSX26+2cKYYqZpzzX+GmaKY36fQuTynl2W0OLi0CuhoPPdu6lo70yIub4pIrjRNi2GynAEdm/0JD61zXOA9NwUHAnEk7SSsiJRU7XE1po2QSc4FElp5k4RqQagi2RyY2QoARVBMPKkHpdUVQOz0Z6TVFUDs9CTnLKCKEIQCEIQCEIQCEIQCEIQYRRZQgjmozApIQRzAjMCkhBHMWc1ZQgxRZQhAIQhAIQhAIQhAIQhAIQhBhCEIBCEIBCEIBBQhAIQhAIQhBlYKEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIBCEIP/2Q==",
    category: "pсs",
  },
];



const cart = [];

function addToCart(name) {
  const price = products[name];
  alert(`${name} додано до кошика!\nЦіна: ${price} ₴`);
}



function createProductCard(name, price, imgUrl) {
  return `
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow">
        <img src="${imgUrl}" alt="${name}" class="card-img-top">
        <div class="card-body text-center">
          <h5 class="card-title">${name}</h5>
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
    pcs: document.getElementById("pcs-list")
  };

  products.forEach(p => {
    categories[p.category].innerHTML += createProductCard(p.name, p.price, p.image);
  });
}

function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) item.qty += 1;
  else cart.push({ name, price, qty: 1 });

  updateCart();
}

function updateCart() {
  const list = document.getElementById("cart-items");
  document.getElementById("cart-count").textContent = cart.reduce((t, i) => t + i.qty, 0);
  list.innerHTML = cart.length === 0
    ? '<li class="list-group-item text-center">Кошик порожній</li>'
    : cart.map((item, i) => `
      <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
        <strong>${item.name}</strong>
        <div>
          <button onclick="decreaseQty(${i})">−</button>
          <span>${item.qty}</span>
          <button onclick="increaseQty(${i})">+</button>
        </div>
        <span>${item.price} ₴</span>
        <button class="btn btn-sm btn-outline-danger ms-2" onclick="removeFromCart(${i})">×</button>
      </li>
    `).join('');
}

function increaseQty(i) {
  cart[i].qty++;
  updateCart();
}
function decreaseQty(i) {
  if (--cart[i].qty < 1) cart.splice(i, 1);
  updateCart();
}
function removeFromCart(i) {
  cart.splice(i, 1);
  updateCart();
}
function clearCart() {
  cart.length = 0;
  updateCart();
}
function toggleCart() {
  const modal = new bootstrap.Modal(document.getElementById("cartModal"));
  updateCart();
  modal.show();
}

// LOGIN
function openLoginModal() {
  new bootstrap.Modal(document.getElementById("loginModal")).show();
}
function register() {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  if (u && p) {
    localStorage.setItem("user", JSON.stringify({ u, p }));
    document.getElementById("login-msg").textContent = "Реєстрація успішна! Тепер увійдіть.";
  }
}
function login() {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const saved = JSON.parse(localStorage.getItem("user"));
  if (saved && saved.u === u && saved.p === p) {
    localStorage.setItem("loggedInUser", u);
    updateAuthState();
    bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
  } else {
    document.getElementById("login-msg").textContent = "Невірні дані!";
  }
}
function logout() {
  localStorage.removeItem("loggedInUser");
  updateAuthState();
}
function updateAuthState() {
  const user = localStorage.getItem("loggedInUser");
  const welcome = document.getElementById("welcome-user");
  if (user) {
    welcome.textContent = `👋 Вітаємо, ${user}`;
    welcome.classList.remove("d-none");
    document.getElementById("loginBtn").classList.add("d-none");
    document.getElementById("logoutBtn").classList.remove("d-none");
  } else {
    welcome.classList.add("d-none");
    document.getElementById("loginBtn").classList.remove("d-none");
    document.getElementById("logoutBtn").classList.add("d-none");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateAuthState();
});
function openLoginModal() {
  const modal = new bootstrap.Modal(document.getElementById("loginModal"));
  document.getElementById("login-msg").textContent = "";
  modal.show();
}

function register() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    document.getElementById("login-msg").textContent = "Реєстрація успішна! Тепер увійдіть.";
  } else {
    document.getElementById("login-msg").textContent = "Заповніть всі поля!";
  }
}

function login() {
  const inputName = document.getElementById("username").value.trim();
  const inputPass = document.getElementById("password").value.trim();
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.username === inputName && user.password === inputPass) {
    localStorage.setItem("loggedInUser", inputName);
    updateAuthState();
    bootstrap.Modal.getInstance(document.getElementById("loginModal")).hide();
  } else {
    document.getElementById("login-msg").textContent = "Невірні дані!";
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  updateAuthState();
}

function updateAuthState() {
  const user = localStorage.getItem("loggedInUser");
  const welcome = document.getElementById("welcome-user");
  const loginBtn = document.getElementById("loginBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    welcome.textContent = `👋 Вітаємо, ${user}`;
    welcome.classList.remove("d-none");
    loginBtn.classList.add("d-none");
    logoutBtn.classList.remove("d-none");
  } else {
    welcome.classList.add("d-none");
    loginBtn.classList.remove("d-none");
    logoutBtn.classList.add("d-none");
  }
}

document.addEventListener("DOMContentLoaded", updateAuthState);
