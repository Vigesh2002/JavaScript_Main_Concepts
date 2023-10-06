function formSubmit(){
    event.preventDefault();
    getData(read())
    reset()
}

function read(){
    let formData = {};
    formData['fullname'] = document.getElementById("fullname").value;
    formData['email'] = document.getElementById("email").value;
    formData['course'] = document.getElementById("course").value;
    formData['YOP'] = document.getElementById("YOP").value;

    return formData;
}

function getData(data){
    let table = document.getElementsByTagName("tbody")[0];
    let row = table.insertRow(table.length)

    cell = row.insertCell(0)
    cell.innerHTML = data.fullname

    cell1 = row.insertCell(1)
    cell1.innerHTML = data.email

    cell2 = row.insertCell(2)
    cell2.innerHTML = data.course

    cell3 = row.insertCell(3)
    cell3.innerHTML = data.YOP

    cell4 = row.insertCell(4)
    cell4.innerHTML = `<button onclick="onEdit(this)">Edit</button> <button onclick="ondelete(this)">Delete</button>`
}

function reset(){
    document.getElementById("fullname").value=""
    document.getElementById("email").value=""
    document.getElementById("course").value=""
    document.getElementById("YOP").value=""
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("course").value = selectedRow.cells[2].innerHTML;
    document.getElementById("YOP").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fullname;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.course;
    selectedRow.cells[3].innerHTML = formData.YOP;
}

function ondelete(td){
    row = td.parentElement.parentElement;
    document.getElementById("one").deleteRow(row.rowIndex)
}   