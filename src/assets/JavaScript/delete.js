export function deleteRow(){
	var table = document.getElementById('tableAdmin');
	var rowCount = table.rows.length;
	if(rowCount > '2'){
		table.deleteRow(rowCount-1);
		rowCount--;
	}
	else{
		alert('There should be atleast one row');
	}
}