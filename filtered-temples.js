const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, USA",
    dedicated: "1893",
    area: 253000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Hawaii, USA",
    dedicated: "1919",
    area: 42100,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple.jpg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004",
    area: 17500,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple.jpg"
  },
  {
    name: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005",
    area: 11500,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019",
    area: 41000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple.jpg"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980",
    area: 52000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple.jpg"
  },
  {
    name: "Manti Utah Temple",
    location: "Utah, USA",
    dedicated: "1888",
    area: 74792,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017",
    area: 44000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple.jpg"
  },
  {
    name: "Freiberg Germany Temple",
    location: "Germany",
    dedicated: "1985",
    area: 21000,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/freiberg-germany-temple.jpg"
  },
  {
    name: "Bern Switzerland Temple",
    location: "Switzerland",
    dedicated: "1955",
    area: 35546,
    image: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple.jpg"
  }
];

// DISPLAY FUNCTION
function displayTemples(templeList) {
  const container = document.getElementById("temple-container");
  container.innerHTML = "";

  templeList.forEach(temple => {
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

// FILTER FUNCTION
function filterTemples(type) {
  let filtered = [];

  if (type === "old") {
    filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
  } else if (type === "new") {
    filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
  } else if (type === "large") {
    filtered = temples.filter(t => t.area > 90000);
  } else if (type === "small") {
    filtered = temples.filter(t => t.area < 10000);
  } else {
    filtered = temples;
  }

  displayTemples(filtered);
}

// EVENT LISTENERS
document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault();
  filterTemples("all");
});

document.getElementById("old").addEventListener("click", (e) => {
  e.preventDefault();
  filterTemples("old");
});

document.getElementById("new").addEventListener("click", (e) => {
  e.preventDefault();
  filterTemples("new");
});

document.getElementById("large").addEventListener("click", (e) => {
  e.preventDefault();
  filterTemples("large");
});

document.getElementById("small").addEventListener("click", (e) => {
  e.preventDefault();
  filterTemples("small");
});

// LOAD ALL ON PAGE LOAD
displayTemples(temples);

// FOOTER INFO
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;