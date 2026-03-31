// Product array (required for dynamic select)
const products = [
  { id: "p1", name: "Concrete Mixer" },
  { id: "p2", name: "Excavator" },
  { id: "p3", name: "Bulldozer" },
  { id: "p4", name: "Crane" }
];

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("product");

  // Safety check (prevents errors if element not found)
  if (!select) return;

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;        // required: id as value
    option.textContent = product.name; // display name
    select.appendChild(option);
  });
});