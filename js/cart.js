/* ═══════════════════════════════════════
   NOVAPLAY — Logique panier & UI
   ═══════════════════════════════════════ */

let cart = [];

/* ── Formatage prix ── */
function fmt(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

/* ── Ajouter au panier ── */
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  if (cart.find(x => x.id === id)) {
    showToast("Déjà dans le panier !");
    return;
  }
  cart.push(p);
  updateCartCount();
  renderDrawerItems();
  showToast("✓ " + p.name + " ajouté au panier");
}

/* ── Retirer du panier ── */
function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartCount();
  renderDrawerItems();
}

/* ── Mise à jour du compteur nav ── */
function updateCartCount() {
  const n = cart.length;
  const cnt = document.getElementById("cart-count");
  if (!cnt) return;
  cnt.textContent = n;
  cnt.style.display = n > 0 ? "inline-block" : "none";
}

/* ── Rendu des items dans le drawer ── */
function renderDrawerItems() {
  const wrap   = document.getElementById("drawer-items");
  const footer = document.getElementById("drawer-footer");
  if (!wrap) return;

  if (cart.length === 0) {
    wrap.innerHTML = `
      <div class="drawer-empty">
        <div class="big">🛒</div>
        Ton panier est vide
      </div>`;
    if (footer) footer.style.display = "none";
    return;
  }

  wrap.innerHTML = cart.map(p => `
    <div class="cart-item">
      <div class="ci-icon">${p.icon}</div>
      <div class="ci-info">
        <div class="ci-name">${p.name}</div>
        <div class="ci-price">${fmt(p.price)}</div>
      </div>
      <button class="ci-remove" onclick="removeFromCart('${p.id}')">✕</button>
    </div>
  `).join("");

  const total = cart.reduce((s, p) => s + p.price, 0);
  const totalEl = document.getElementById("total-price");
  if (totalEl) totalEl.textContent = fmt(total);

  if (footer) footer.style.display = "flex";

  /* Boutons de paiement */
  const btnStripe = document.getElementById("btn-stripe");
  const btnPaypal = document.getElementById("btn-paypal");

  if (btnStripe) {
    btnStripe.onclick = () => {
      const url = cart.length === 1 ? cart[0].stripe : "#";
      if (url && url !== "#") window.open(url, "_blank");
      else showToast("Configure le lien Stripe dans js/products.js");
    };
  }
  if (btnPaypal) {
    btnPaypal.onclick = () => {
      const url = cart.length === 1 ? cart[0].paypal : "#";
      if (url && url !== "#") window.open(url, "_blank");
      else showToast("Configure le lien PayPal dans js/products.js");
    };
  }
}

/* ── Ouvrir / fermer le drawer ── */
function openDrawer() {
  document.getElementById("drawer")?.classList.add("open");
  document.getElementById("overlay")?.classList.add("open");
}
function closeDrawer() {
  document.getElementById("drawer")?.classList.remove("open");
  document.getElementById("overlay")?.classList.remove("open");
}

/* ── Toast notification ── */
function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2400);
}

/* ── Init au chargement ── */
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderDrawerItems();

  /* Lien actif dans la nav */
  const path = window.location.pathname;
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") && path.endsWith(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});
