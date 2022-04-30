export function searchBar() {
  let searchInput = document.getElementById("search-box");
  let filter = searchInput.value.toUpperCase();
  let table = document.getElementById("Patients_body_table");
  let tr = table.getElementsByTagName("tr");

  console.log("am intrat in functie");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

export function searchBar2() {
  let searchInput = document.getElementById("search-box2");
  let filter = searchInput.value.toUpperCase();
  let table = document.getElementById("Patients_body_table");
  let tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

export function filterTable() {
  let dropdown, table, rows, cells, country, filter;
  dropdown = document.getElementById("hospitalDropdown");
  table = document.getElementById("Patients_body_table");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;

  for (let row of rows) {
    cells = row.getElementsByTagName("td");
    country = cells[1] || null;
    if (filter === "All" || !country || filter === country.textContent) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}
