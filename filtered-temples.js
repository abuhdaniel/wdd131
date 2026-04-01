const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, USA",
    dedicated: "1893",
    area: 253000,
    image: "images/salt-lake.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Hawaii, USA",
    dedicated: "1919",
    area: 42100,
    image: "images/laie.jpg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004",
    area: 17500,
    image: "images/accra.jpg"
  },
  {
    name: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005",
    area: 11500,
    image: "images/aba.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019",
    area: 41000,
    image: "images/rome.jpg"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980",
    area: 52000,
    image: "images/tokyo.jpg"
  },
  {
    name: "Manti Utah Temple",
    location: "Utah, USA",
    dedicated: "1888",
    area: 74792,
    image: "images/manti.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017",
    area: 44000,
    image: "images/paris.jpg"
  },
  {
    name: "Freiberg Germany Temple",
    location: "Germany",
    dedicated: "1985",
    area: 21000,
    image: "images/freiberg.jpg"
  },
  {
    name: "Bern Switzerland Temple",
    location: "Switzerland",
    dedicated: "1955",
    area: 35546,
    image: "images/bern.jpg"
  }
];

// Display function
function displayTemples(list) {
  const container = document.getElementById("temple-container");
  container.innerHTML = "";

  list.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.image}" alt="${temple.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// Filter function
function filterTemples(type) {
  let filtered = temples;

  if (type === "old") {
    filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
  } else if (type === "new") {
    filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
  } else if (type === "large") {
    filtered = temples.filter(t => t.area > 90000);
  } else if (type === "small") {
    filtered = temples.filter(t => t.area < 20000);
  }

  displayTemples(filtered);
}

// Event listeners
["home", "old", "new", "large", "small"].forEach(id => {
  document.getElementById(id).addEventListener("click", (e) => {
    e.preventDefault();
    filterTemples(id === "home" ? "all" : id);
  });
});

// Initial load
displayTemples(temples);

// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;