// edit the row
export function editRow() {
  var table = document.getElementById("patientsTable"),
    rIndex;

  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      rIndex = this.rowIndex;
      console.log(rIndex);

      document.getElementById("fname").value = this.cells[0].innerHTML;
      document.getElementById("lname").value = this.cells[1].innerHTML;
      document.getElementById("age").value = this.cells[2].innerHTML;
    };
  }

    table.rows[rIndex].cells[0].innerHTML =
    document.getElementById("fname").value;
    table.rows[rIndex].cells[1].innerHTML =
    document.getElementById("lname").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("age").value;
}
