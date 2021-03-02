/* eslint-disable no-loop-func */
// create the table
const table = document.createElement('table');
table.style.border = '1px solid #000';
table.style.backgroundColor = 'black';
table.style.width = '100%';
document.querySelector('body').appendChild(table);
// header row
const tableHeaderTr = document.createElement('tr');
tableHeaderTr.style.border = '1px solid #000';
table.appendChild(tableHeaderTr);
// header
const tableHeader = document.createElement('th');
tableHeader.innerHTML = 'Star Wars';
tableHeader.colSpan = '5';
tableHeaderTr.appendChild(tableHeader);

const information = [
  'Name',
  'Height',
  'Hair Color',
  'Planet Name',
  'Planet population',
];

// sub heading row
const subHeaderTr = document.createElement('tr');
subHeaderTr.style.border = '1px solid #000';
table.appendChild(subHeaderTr);

// sub headings
information.forEach((subHeaderText) => {
  const subHeader = document.createElement('th');
  subHeader.innerHTML = subHeaderText;
  subHeaderTr.appendChild(subHeader);
});

for (let i = 1; i <= 10; i++) {
  fetch(`https://swapi.dev/api/people/${i}/`, {})
    .then((response) => response.json())
    .then((jsonObject) => {
      const dataTr = document.createElement('tr');
      table.appendChild(dataTr);
      dataTr.style.border = '1px solid #000';
      // name
      const name = document.createElement('th');
      name.innerHTML = jsonObject.name;
      dataTr.appendChild(name);
      // Height
      const height = document.createElement('th');
      height.innerHTML = jsonObject.height;
      dataTr.appendChild(height);
      // Hair Color
      const hairColor = document.createElement('th');
      hairColor.innerHTML = jsonObject.hair_color;
      dataTr.appendChild(hairColor);

      // Homeworld
      const homeworldAPI = jsonObject.homeworld;
      fetch(homeworldAPI, {})
        .then((response) => response.json())
        .then((homeworldObj) => {
          // planet name
          const planetName = document.createElement('th');
          planetName.innerHTML = homeworldObj.name;
          dataTr.appendChild(planetName);
          // planet population
          const population = document.createElement('th');
          population.innerHTML = homeworldObj.population;
          dataTr.appendChild(population);
        })
        .catch((error) => {
          document.write(error);
        });

      const ths = document.querySelectorAll('tr');
      ths.forEach((th) => {
        th.style.backgroundColor = 'cornflowerblue';
      });
    })
    .catch((error) => {
      document.write(error);
    });
}
