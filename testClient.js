function submit() {
    var username = $('#username').val();
    var password = $('#password').val();
    //    var xhttp = new XMLHttpRequest();
    //    xhttp.open("POST", "https://access.cns.vt.edu/api/oauth", true);
    //    xhttp.setRequestHeader("Content-type", "application/json");
    //    xhttp.send("grant_type=password&username="+username+"&password="+ password+ "&client_id=TestClient");
    //    document.getElementById("demo").innerHTML = xhttp.responseText;

    $.ajax({
        contentType: "application/json"
        , crossDomain: true
        , url: "https://access.cns.vt.edu/api/oauth"
        , data: {
            grant_type: "password"
            , username: username
            , password: password
            , client_id: "TestClient"
        }
        , type: "POST"
        , dataType: "jsonp"
        , success: function(data){
            console.log(data);
        }
        , error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    })


}