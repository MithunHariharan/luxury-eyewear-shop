// ==========================================
// TEMPORARY PRODUCT DATA
// ==========================================

const products = [

    {
        id: 1,
        name: "Aurelia",
        category: "optical",
        description: "Polished Black • Signature Collection",
        price: 690,
        style: ""
    },

    {
        id: 2,
        name: "Monaco",
        category: "sun",
        description: "Tortoise • Sun Collection",
        price: 790,
        style: "gold"
    },

    {
        id: 3,
        name: "Luna",
        category: "optical",
        description: "Champagne • Atelier Collection",
        price: 620,
        style: "gold"
    },

    {
        id: 4,
        name: "Noir",
        category: "sun",
        description: "Black • Classic Collection",
        price: 850,
        style: "dark"
    },

    {
        id: 5,
        name: "Élan",
        category: "optical",
        description: "Dark Havana • Signature Collection",
        price: 740,
        style: ""
    },

    {
        id: 6,
        name: "Sienna",
        category: "sun",
        description: "Amber • Sun Collection",
        price: 810,
        style: "gold"
    }

];


// ==========================================
// SHOPPING CART
// ==========================================

let cart = [];


// ==========================================
// DISPLAY PRODUCTS
// ==========================================

function renderProducts() {

    const filter =
        document.getElementById("productFilter").value;

    const productContainer =
        document.getElementById("products");


    const filteredProducts =
        products.filter(function(product) {

            if (filter === "all") {
                return true;
            }

            return product.category === filter;

        });


    productContainer.innerHTML =
        filteredProducts.map(function(product) {

            return `

                <article class="product">

                    <div class="product-image">

                        <div class="product-frame ${product.style}">
                        </div>

                    </div>


                    <div class="product-info">

                        <div>

                            <h3>
                                ${product.name}
                            </h3>

                            <p>
                                ${product.description}
                            </p>

                            <button
                                class="add-button"
                                onclick="addToCart(${product.id})">

                                Add to bag

                            </button>

                        </div>


                        <span class="product-price">

                            AED ${product.price}

                        </span>

                    </div>

                </article>

            `;

        }).join("");

}


// ==========================================
// ADD PRODUCT TO CART
// ==========================================

function addToCart(productId) {

    const product =
        products.find(function(item) {

            return item.id === productId;

        });


    if (!product) {
        return;
    }


    const existingItem =
        cart.find(function(item) {

            return item.id === productId;

        });


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            quantity: 1

        });

    }


    updateCart();

    openCart();

}


// ==========================================
// UPDATE CART
// ==========================================

function updateCart() {

    const cartCount =
        document.getElementById("cartCount");


    const cartItems =
        document.getElementById("cartItems");


    const cartTotal =
        document.getElementById("cartTotal");


    const totalQuantity =
        cart.reduce(function(total, item) {

            return total + item.quantity;

        }, 0);


    cartCount.textContent =
        totalQuantity;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="empty-cart">

                Your bag is currently empty.

            </p>

        `;

    } else {

        cartItems.innerHTML =
            cart.map(function(item) {

                return `

                    <div class="cart-row">

                        <div>

                            <strong>
                                ${item.name}
                            </strong>

                            <br>

                            <small>
                                ${item.quantity}
                                × AED ${item.price}
                            </small>

                        </div>


                        <strong>

                            AED
                            ${item.quantity * item.price}

                        </strong>

                    </div>

                `;

            }).join("");

    }


    const totalPrice =
        cart.reduce(function(total, item) {

            return total +
                (item.price * item.quantity);

        }, 0);


    cartTotal.textContent =
        "AED " + totalPrice;

}


// ==========================================
// OPEN CART
// ==========================================

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("active");


    document
        .getElementById("cartOverlay")
        .classList.add("active");

}


// ==========================================
// CLOSE CART
// ==========================================

function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("active");


    document
        .getElementById("cartOverlay")
        .classList.remove("active");

}


// ==========================================
// CHECKOUT
// ==========================================

function checkout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;
    }


    alert(

        "Checkout is ready to be connected to your online payment system."

    );

}


// ==========================================
// NEWSLETTER
// ==========================================

function subscribe(event) {

    event.preventDefault();


    alert(
        "Thank you for subscribing!"
    );


    event.target.reset();

}


// ==========================================
// START WEBSITE
// ==========================================

renderProducts();

updateCart();
