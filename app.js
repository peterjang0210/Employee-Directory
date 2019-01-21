(function() {
    $('#view').hide();
    $('#add').hide();
    $('#verify').hide();
    $('#update').hide();
    $('#delete').hide();
})();

const showView = function () {
    $('section').hide();
    $("#view").show();
}

const showAdd = function () {
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