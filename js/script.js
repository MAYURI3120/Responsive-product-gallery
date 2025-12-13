const products = [
    {
        id: 1,
        title: "Wireless Headphones",
        price: "₹2,999",
        image: "images/headphone.jpg",
        description: "High quality wireless headphones with noise cancellation."
    },
    {
        id: 2,
        title: "Smart Watch",
        price: "₹4,999",
        image: "images/smartphone.jpg",
        description: "Smart watch with fitness tracking features."
    },
    {
        id: 3,
        title: "Bluetooth Speaker",
        price: "₹1,799",
        image: "images/bluetooth_speaker.jpg",
        description: "Portable Bluetooth speaker with deep bass."
    },
    {
        id: 4,
        title: "Laptop Bag",
        price: "₹1,299",
        image: "laptop_bag/p4.jpg",
        description: "Water-resistant laptop bag with multiple compartments."
    },
    {
        id: 5,
        title: "Wireless Mouse",
        price: "₹699",
        image: "images/mouse.jpg",
        description: "Ergonomic wireless mouse with long battery life."
    },
    {
        id: 6,
        title: "USB-C Hub",
        price: "₹1,999",
        image: "images/usbhub.jpg",
        description: "Multi-port USB-C hub for laptops."
    }
];

const container = document.getElementById("productContainer");

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="price">${product.price}</p>
        <button onclick="openModal(${product.id})">View Details</button>
    `;

    container.appendChild(card);
});

function openModal(id) {
    const product = products.find(p => p.id === id);

    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    overlay.innerHTML = `
        <div class="modal">
            <span class="close-btn">&times;</span>
            <img src="${product.image}">
            <h2>${product.title}</h2>
            <p class="price">${product.price}</p>
            <p>${product.description}</p>
        </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector(".close-btn").onclick = function () {
        overlay.remove();
    };

    overlay.onclick = function (e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    };
}