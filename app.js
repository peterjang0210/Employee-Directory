(function() {
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
    $('section').hide();
    $("#verify").show();
}

const showUpdate = function () {
    $('section').hide();
    $("#update").show();
}

const showDelete = function () {
    $('section').hide();
    $("#delete").show();
}
  
$('#viewBtn').on('click', showView);
$('#addBtn').on('click', showAdd);
$('#verifyBtn').on('click', showVerify);
$('#updateBtn').on('click', showUpdate);
$('#deleteBtn').on('click', showDelete);


const render = function (){
    $('.list').empty();

    for(let i = 0; i < employeeList.length; i++){
        $('.list').append(`<p>${employeeList[i].name}</p>
        <p>${employeeList[i].officeNum}</p>
        <p>${employeeList[i].phoneNum}</p>`);
    }
}

const addInputVal = function (){
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