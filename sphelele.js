$(document).ready(function() {

    /*===THE TO DO LIST PROGRAMM===*/
    $("#input").keyup(function(e) {
        var code = e.which;
        if (code == 13 && e.target.value.length > 0) {
            e.preventDefault();
            $("#myList").append(`<li>${$(this).val()} </li></br>`);
            e.target.value = "";
        }

    })
})

console.log("This is the sign in page for the app");