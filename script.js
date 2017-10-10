//výpočet veku
var btnDelete = document.createElement('input');
btnDelete.type = "button";
btnDelete.value = "Delete";
btnDelete.onclick = deleteRow;
form.appendChild(btnDelete);

var addForm = document.createElement('div');
form.appendChild(addForm);

function createRow(){
	var name = document.getElementById('name').value;
	var age = parseInt(document.getElementById('surname').value);
	var email = document.getElementById('date').value;	  
	var sex;
	if (document.getElementById('sexM').checked){
		sex = document.getElementById('sexM').innerHTML 
	}
	else if (document.getElementById('sexW').checked){
		sex = document.getElementById('sexW').innerHTML 
	}

	if(!dataVerification(email)) return;

	addRowToTable([name, surname, date, sex]);   
}



var row = document.createElement("tr");
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Select";
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Sl.No";
table.appendChild(row);
Object.keys(obj[0]).forEach(function(val) {
  var cell = document.createElement("th");
  row.appendChild(cell); 
  cell.innerHTML = val;
});

//




//vytvorenie riadka

function createCell(value){
var newCell=document.createElement("td")
newCell.innerHTML=value;

}

//ukončenie


function addRowToTable(values) {
	
	var newRow = document.createElement("tr");
	var columnCount = document.getElementById('resultHeaderRow').children.length;

	for (var i = 0; i < columnCount; i++) {
	newRow.appendChild(createCell(values[i]));
	}
	document.getElementById('resultTable').appendChild(newRow);
}

