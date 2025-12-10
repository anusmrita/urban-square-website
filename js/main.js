// SAMPLE PROPERTY DATA
const properties = [
  {
    id: 101,
    title: "3BHK Luxury Apartment",
    price: 7500000,
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1560448075-bb4caa6c0f14"
  },
  {
    id: 102,
    title: "Premium Office Space",
    price: 12000000,
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80"
  },
  {
    id: 103,
    title: "Villa in Gated Community",
    price: 25000000,
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914"
  }
];

// Render Property Cards
function renderProperties(list) {
  const container = document.getElementById("propertyList") || document.getElementById("featuredContainer");

  if (!container) return;

  container.innerHTML = list.map(p => `
    <div class="property-card">
      <img src="${p.image}" />
      <h3>${p.title}</h3>
      <p>₹${p.price.toLocaleString()}</p>
      <p>${p.location}</p>
      <a class="btn" href="property.html?id=${p.id}">View Details</a>
    </div>
  `).join("");
}

// Sorting Logic
function sortProperties(list, type) {
  if (type === "low-high") return list.sort((a,b) => a.price - b.price);
  if (type === "high-low") return list.sort((a,b) => b.price - a.price);
  return list;
}

// Sorting Event Listener
document.getElementById("sortSelect")?.addEventListener("change", function() {
  renderProperties(sortProperties(properties, this.value));
});

// Property Details Page Logic
if (window.location.pathname.includes("property.html")) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const property = properties.find(p => p.id === id);

  document.getElementById("propertyDetails").innerHTML = `
    <img src="${property.image}" style="width:100%; border-radius:10px;">
    <h1>${property.title}</h1>
    <h3>₹${property.price.toLocaleString()}</h3>
    <p>Location: ${property.location}</p>
  `;
}

// Render on Home + Listings page
renderProperties(properties);
