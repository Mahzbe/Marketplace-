// Get the form and store container elements
const form = document.getElementById('add-store-form');
const storeContainer = document.getElementById('store-container');

// Add an event listener to the form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the form data
    const storeName = document.getElementById('store-name').value;
    const storeImage = document.getElementById('store-image').files[0];
    const storeLink = document.getElementById('store-link').value;

    // Create a new store element
    const storeElement = document.createElement('div');
    storeElement.className = 'product';
    storeElement.innerHTML = `
        <h3>${storeName}</h3>
        <p>Store Description</p>
        <button><a href="${storeLink}" target="_blank">Visit Store</a></button>
    `;

    // Add the store image
    const storeImageElement = document.createElement('img');
    storeImageElement.src = URL.createObjectURL(storeImage);
    storeImageElement.style.width = '100px';
    storeImageElement.style.height = '100px';
    storeElement.appendChild(storeImageElement);

    // Add the store element to the store container
    storeContainer.appendChild(storeElement);

    // Reset the form
    form.reset();
});
