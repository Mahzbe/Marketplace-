// Mock server data
const products = [
  {
    name: "Product 1",
    image: "(link unavailable)",
    link: "#"
  },
  {
    name: "Product 2",
    image: "(link unavailable)",
    link: "#"
  }
];

// Display products on the buyer's page
document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("product-container");
  products.forEach((product) => {
    productContainer.innerHTML += `
      <div class="product">
        <h3>${product.name}</h3>
        <img src="${product.image}" alt="${product.name}">
        <a href="${product.link}">Buy Now</a>
      </div>
    `;
  });
});

// Handle form submission on the seller's page
document.getElementById("sell-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const image = document.getElementById("image").value;
  const link = document.getElementById("link").value;

  // Add new product to mock server data
  products.push({ name, image, link });

  // Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("image").value = "";
  document.getElementById("link").value = "";
});










