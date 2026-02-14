let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function updateCount() {
  const count = document.getElementById('wishlist-count');
  if (count) count.textContent = wishlist.length;
}

function addToWishlist(item) {
  wishlist.push(item);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateCount();
  alert("Added to wishlist ✨");
}

function loadWishlistPage() {
  const container = document.getElementById('wishlist-items');
  const hiddenInput = document.getElementById('wishlist-input');

  if (!container) return;

  container.innerHTML = '';
  wishlist.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;
    container.appendChild(div);
  });

  hiddenInput.value = wishlist.join(', ');
}

document.addEventListener('DOMContentLoaded', () => {
  updateCount();
  loadWishlistPage();
});
