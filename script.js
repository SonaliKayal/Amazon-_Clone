// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Show the current slide
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-play the carousel
setInterval(nextSlide, 5000);

// Add event listeners for next/prev buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Show the first slide initially
showSlide(currentSlide);

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-play the slider
setInterval(nextSlide, 5000);

// Add event listeners for next/prev buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Show the first slide initially
showSlide(currentSlide);

// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save the theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// Search Suggestions
const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('search-suggestions');

searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    if (query.length > 2) {
        searchSuggestions.innerHTML = `<p>Suggestions for "${query}"</p>`;
        searchSuggestions.style.display = 'block';
    } else {
        searchSuggestions.style.display = 'none';
    }
});

// Shopping Cart
let cart = [];
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').innerText;
        const productPrice = parseFloat(product.querySelector('p').innerText.replace('$', ''));
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

document.getElementById('cart').addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

document.getElementById('close-cart').addEventListener('click', () => {
    cartModal.style.display = 'none';
});

function updateCart() {
    cartCount.innerText = cart.length;
    cartItems.innerHTML = cart.map(item => `<li>${item.name} - $${item.price.toFixed(2)}</li>`).join('');
    cartTotal.innerText = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
}
// Quick Actions - Add to Cart and Quick View
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Added to Cart!');
    });
});
// Product Detail Modal Logic
const productModal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

document.querySelectorAll('.quick-view').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const productCard = button.closest('.product-card');
    
    // Extract product data
    const product = {
      image: productCard.querySelector('img').src,
      title: productCard.querySelector('h3').innerText,
      price: productCard.querySelector('.price').innerText,
      rating: productCard.querySelector('.stars').outerHTML,
      reviews: productCard.querySelector('.reviews').innerText
    };

    // Inject into modal
    modalBody.innerHTML = `
      <div class="modal-image">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="modal-details">
        <h2>${product.title}</h2>
        <div class="modal-rating">
          ${product.rating} ${product.reviews}
        </div>
        <div class="modal-price">${product.price}</div>
        <p class="modal-description">Product description would go here. In a real app, this would come from your database.</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    `;

    // Open modal
    productModal.style.display = 'block';
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  productModal.style.display = 'none';
});

// Close when clicking outside content
window.addEventListener('click', (e) => {
  if (e.target === productModal) {
    productModal.style.display = 'none';
  }
});
document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Quick View: Product details will be shown here.');
    });
});
// Update the updateCart() function
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
    // Rest of your existing code...
}

// Load cart on page load
window.addEventListener('load', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) cart = JSON.parse(savedCart);
    updateCart();
});
// In your main script.js (or auth.js)
function updateAuthState() {
    const userGreeting = document.getElementById('user-greeting');
    const isLoggedIn = localStorage.getItem('user'); // Check auth status
    
    if (isLoggedIn) {
        userGreeting.textContent = `Hello, ${JSON.parse(isLoggedIn).name}`;
        userGreeting.href = "#"; // Link to account page
    } else {
        userGreeting.textContent = "Hello, Sign in";
        userGreeting.href = "signin.html";
    }
}

// Call on page load
updateAuthState();

// Handle sign-in button click
document.getElementById('user-greeting').addEventListener('click', (e) => {
    // Only prevent default if you want to add custom behavior
    // e.preventDefault(); 
    window.location.href = 'signin.html';
});