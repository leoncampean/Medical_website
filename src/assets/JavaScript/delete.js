export function deleteRow(){
	var table = document.getElementById('tableAdmin');
	var rowCount = table.rows.length;
	if(rowCount > '1'){
		table.deleteRow(rowCount-1);
		rowCount--;
	}
	else{
		// alert('Use forum bellow to add new users or');
	}
}

export function deleteRow2(){
	var table = document.getElementById('patientsTable');
	var rowCount = table.rows.length;
	if(rowCount > '1'){
		table.deleteRow(rowCount-1);
		rowCount--;
	}
	else{
		// alert('Use forum bellow to add new users or');
	}
}
