// Get the form and store container elements
const form = document.getElementById('add-store-form');
const storeContainer = document.getElementById('store-container');

// Add an event listener to the form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get the form data
    const storeName = document.getElementById('store-name').value;
    const storeImage = document.getElementById('store-image').files[0];
    const storeLink = document.getElementById('store-link').value;
    const storeDescription = document.getElementById('store-description').value;

    // Validate store data
    if (!storeName || !storeImage || !storeLink || !storeDescription) {
        alert('Please fill in all fields');
        return;
    }

    // Create a new store element
    const storeElement = document.createElement('div');
    storeElement.className = 'product';
    storeElement.innerHTML = `
        <h3>${storeName}</h3>
        <p>${storeDescription}</p>
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

    // Post store data to FusionAuth
    const url = 'http://localhost:9011/api/store';
    const headers = {
        'Content-Type': 'application/json',
    };
    const storeData = {
        "store": {
            "name": storeName,
            "image": storeImage,
            "link": storeLink,
            "description": storeDescription,
        },
    };

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(storeData),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    // Reset the form
    form.reset();
});
