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
    $('section').empty();
    $('section').hide();
    $("#add").show();
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
    $('section').empty();
    
    for(let i = 0; i < employeeList.length; i++){
        $('section').append(`<p>${employeeList[i].name}</p>
        <p>${employeeList[i].officeNum}</p>
        <p>${employeeList[i].phoneNum}</p>`);
    }
}