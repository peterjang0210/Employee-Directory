(function () {
    $('#add').hide();
    $('#verify').hide();
    $('#update').hide();
    $('#delete').hide();
})();

const showView = function () {
    $('section').hide();
    $("#view").show();
    render();
}

const showAdd = function () {
    $('section').hide();
    $("#add").show();
    render();
}

const showVerify = function () {
    $('.list').empty();
    $('section').hide();
    $("#verify").show();
}

const showUpdate = function () {
    $('section').hide();
    $("#update").show();
    render();
}

const showDelete = function () {
    $('section').hide();
    $("#delete").show();
    render();
}

$('#viewBtn').on('click', showView);
$('#addBtn').on('click', showAdd);
$('#verifyBtn').on('click', showVerify);
$('#updateBtn').on('click', showUpdate);
$('#deleteBtn').on('click', showDelete);

//renders employee list
const render = function () {
    $('.list').empty();

    for (let i = 0; i < employeeList.length; i++) {
        $('.list').append(`<div class = employee><p>${employeeList[i].name}</p>
        <p>${employeeList[i].officeNum}</p>
        <p>${employeeList[i].phoneNum}</p></div>`);
    }
}

//adds another employee to list and renders new list
const addInputVal = function () {
    const name = $('#inputName').val();
    const officeNum = Number($('#inputOfficeNumber').val());
    const phoneNum = $('#inputPhoneNumber').val();
    const employeeInfo = {
        name: name,
        officeNum: officeNum,
        phoneNum: phoneNum
    }
    employeeList.push(employeeInfo);

    $('#inputName').val('');
    $('#inputOfficeNumber').val('');
    $('#inputPhoneNumber').val('');
    render();
}

$('#addToList').on('click', addInputVal);

//checks to see if input employee name is in employee list and renders true or false
const verifyName = function () {
    $('.list').empty();

    const name = $('#verifyName').val();
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i].name === name) {
            $('.list').text("Yes");
            break;
        }
        else if(i === employeeList.length - 1)
            $('.list').text("No");
    }
    $('#verifyName').val('');
}

$('#verifyNameBtn').on('click', verifyName);

//checks to see if input employee name is in employee list and updates office num and phone num if true and rerenders list
const updateInfo = function () {
    const name = $('#updateName').val();
    const officeNum = Number($('#changeOfficeNum').val());
    const phoneNum = $('#changePhoneNum').val();
    const employeeInfo = {
        name: name,
        officeNum: officeNum,
        phoneNum: phoneNum
    }
    for(let i = 0; i < employeeList.length; i++){
        if(employeeList[i].name === name){
            employeeList.splice(i, 1, employeeInfo)
            break;
        }
    }
    $('#updateName').val('');
    $('#changeOfficeNum').val('');
    $('#changePhoneNum').val('');
    render();
}

$('#updateList').on('click', updateInfo);

//checks to see if input employee is in employee list and deletes their info if true then rerenders list
const deleteInfo = function () {
    const name = $('#deleteName').val();
    for(let i = 0; i < employeeList.length; i++){
        if(employeeList[i].name === name){
            employeeList.splice(i, 1)
            break;
        }
    }
    $('#deleteName').val('');
    render();
}

$('#deleteEmployee').on('click', deleteInfo);