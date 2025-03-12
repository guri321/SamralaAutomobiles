

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Message sent!');
    contactForm.reset();
});


function toggleSearchBar() {
const searchBar = document.getElementById('search-bar');
searchBar.style.display = searchBar.style.display === 'block' ? 'none' : 'block';
}

function performSearch() {
const query = document.getElementById('search-input').value;
alert(`Searching for: ${query}`);
}

function toggleLoginForm() {
const loginForm = document.getElementById('login-form');
loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
}

function handleLogin(event) {
event.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

// Here you would normally handle the login process, e.g., send credentials to a server
// For this example, we'll just display an alert and hide the login form

if (username === 'admin' && password === 'admin') {
    alert('Login successful!');
} else {
    alert('Invalid username or password.');
}

document.getElementById('login').reset();
toggleLoginForm();
}

function toggleSection(sectionId) {
const section = document.getElementById(sectionId);
section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

function addProduct(categoryId) {
const productName = prompt("Enter the product name:");
const productImageURL = prompt("Enter the product image URL:");
if (productName && productImageURL) {
    const category = document.getElementById(categoryId);
    const productsList = category.querySelector('.products-list');
    const productItem = document.createElement('li');
    const productImage = document.createElement('img');
    productImage.src = productImageURL;
    productImage.alt = productName;
    productItem.appendChild(productImage);
    productItem.appendChild(document.createTextNode(productName));
    productsList.appendChild(productItem);
}
}


