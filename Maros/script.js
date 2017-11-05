

function createRow(){
	var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var today = new Date('date');
  var sex;
	if (document.getElementById('sexM').checked){
		sex = document.getElementById('sexM').innerHTML = "<img src='male.png'>";
	}
	else if (document.getElementById('sexW').checked){
		sex = document.getElementById('sexW').innerHTML = "<img src='female.png'>";
	}



	addRowToTable([name,surname, date, sex]);
  deleteInputValues();
}







function addRowToTable(values) {
	
	var newRow = document.createElement("tr");
	var columnCount = document.getElementById('resultHeaderRow').children.length;

	for (var i = 0; i < columnCount-1; i++) {// -1 lebo 5 stlpec bude doplneny manualne addDeleteButton
	newRow.appendChild(createCell(values[i]));
	}
  newRow.appendChild(addDeleteButton());
	document.getElementById('resultTable').appendChild(newRow);
}


function createCell(value){
	var newCell = document.createElement("td");
	newCell.innerHTML = value;
	return newCell;
}

function addDeleteButton(){
var newCell = document.createElement("td");
var button=document.createElement("button");
button.innerHTML="Delete";
button.onclick=deleteRow;
newCell.appendChild(button);
return newCell;
}

 function deleteRow(event){
  var rowToDelete=event.target.parentNode.parentNode;
  var table=rowToDelete.parentNode;
  table.removeChild(rowToDelete); 
 }

function deleteInputValues(){
  document.getElementById('name').value="";
  document.getElementById('surname').value="";
  document.getElementById('date').value="";
  document.getElementById('sexM').checked=false;
  document.getElementById('sexW').checked=false;

}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("resultTable");
  switching = true;
  
  dir = "asc"; 
  
  while (switching) {
    
    switching = false;
    rows = table.getElementsByTagName("TR");
  
    for (i = 1; i < (rows.length - 1); i++) {
    	
      shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
     
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      
      switchcount ++; 
    } else {
      
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


var letters=' ABCÇDEFGHIJKLMNÑOPQRSTUVWXYZabcçdefghijklmnñopqrstuvwxyzáÀÁéèÈÉíìÍÌïÏóòÓÒúùÚÙüÜščž'
var numbers='1234567890./'
var signs=',.:;@-\''
var mathsigns='+-=()*/'
var custom='<>#$%&?¿'

function alpha(e,allow) {
     var k;
     k=document.all?parseInt(e.keyCode): parseInt(e.which);
     return (allow.indexOf(String.fromCharCode(k))!=-1);
}

function getAge(birthday) {
    var today = new Date();
    var thisYear = 0;
    if (today.getMonth() < birthday.getMonth()) {
        thisYear = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
        thisYear = 1;
    }
    var age = today.getFullYear() - birthday.getFullYear() - thisYear;
    return age;
}


var data = {
  set: function(key, value) {
    if (!key || !value) {return;}

    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  },
  get: function(key) {
    var value = localStorage.getItem(key);

    if (!value) {return;}

    // assume it is an object that has been stringified
    if (value[0] === "{") {
      value = JSON.parse(value);
    }

    return value;
  }
}




