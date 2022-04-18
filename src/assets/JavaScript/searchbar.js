export function searchBar() {

  let searchInput = document.getElementById("search-box");
  let filter = searchInput.value.toUpperCase();
  let table = document.getElementById("patientsTable");
  let tr = table.getElementsByTagName("tr");

  console.log('am intrat in functie');

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
    let table = document.getElementById("patientsTable");
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

