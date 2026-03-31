const products = [
  { id: "p1", name: "Concrete Mixer" },
  { id: "p2", name: "Excavator" },
  { id: "p3", name: "Bulldozer" }
];

const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});