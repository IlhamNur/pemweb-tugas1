const products = [
  {
    id: 1,
    name: "Perabotan Ruang Tamu (Kayu)",
    price: "Rp 7.000.000,-",
    stock: 3,
    img: "img/produk-1-sm.jpg",
    link: "detail.html#produk-1",
  },
  {
    id: 2,
    name: "Perabotan Ruang Tamu (Logam)",
    price: "Rp 6.000.000,-",
    stock: 4,
    img: "img/produk-2-sm.jpg",
    link: "detail.html#produk-2",
  },
  {
    id: 3,
    name: "Perabotan Ruang Makan (Kayu)",
    price: "Rp 4.000.000,-",
    stock: 5,
    img: "img/produk-3-sm.jpg",
    link: "detail.html#produk-3",
  },
  {
    id: 4,
    name: "Perabotan Ruang Makan (Logam)",
    price: "Rp 3.500.000,-",
    stock: 5,
    img: "img/produk-4-sm.jpg",
    link: "detail.html#produk-4",
  },
  {
    id: 5,
    name: "Tempat Tidur Besar (Kayu)",
    price: "Rp 2.500.000,-",
    stock: 8,
    img: "img/produk-5-sm.jpg",
    link: "detail.html#produk-5",
  },
  {
    id: 6,
    name: "Tempat Tidur Besar (Logam)",
    price: "Rp 2.000.000,-",
    stock: 10,
    img: "img/produk-6-sm.jpg",
    link: "detail.html#produk-6",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // ===== PRODUK GRID LOGIC =====
  const produkGrid = document.getElementById("produkGrid");
  const searchInput = document.getElementById("searchInput");
  const cartCount = document.getElementById("cart-count");
  let cart = 0;

  if (produkGrid && searchInput && cartCount) {
    function renderProducts(filter = "") {
      produkGrid.innerHTML = "";
      products
        .filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach((p) => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
                <img src="${p.img}" alt="${p.name}">
                <div class="card-content">
                    <h4>${p.name}</h4>
                    <p class="harga">${p.price}</p>
                    <p class="stok">Tersedia: ${p.stock}</p>
                    <a href="${p.link}" target="_blank" class="btn-detail">Detail</a>
                    <button class="btn-cart">Tambah ke Keranjang</button>
                </div>
            `;
          const cartBtn = card.querySelector(".btn-cart");
          cartBtn.addEventListener("click", () => {
            cart++;
            cartCount.textContent = cart;
          });
          produkGrid.appendChild(card);
        });
    }

    searchInput.addEventListener("input", (e) =>
      renderProducts(e.target.value)
    );
    renderProducts();
  }

  // ===== THEME TOGGLE =====
  const toggleBtn = document.querySelector(".theme-toggle");
  if (toggleBtn) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme);

    const updateButtonText = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      toggleBtn.textContent = currentTheme === "dark" ? "☀️" : "🌙";
    };
    updateButtonText();

    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateButtonText();
    });
  }

  // ===== NAVBAR ACTIVE LINK =====
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
