function submit() {
    var username = $('#username').val();
    var password = $('#password').val();

    var xmlhttp = new XMLHttpRequest();
    var url = "https://access.cns.vt.edu/api/oauth";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log('on read state');
        }
    };
    xmlhttp.open("POST", url, true);
//    xmlhttp.withCredientials = true;
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify({
            "grant_type": 'password'
            , "username": username
            , "password": password
            , "client_id": 'TestClient'
        }

    ));

    console.log(JSON.stringify({
        grant_type: "password"
        , username: username
        , password: password
        , client_id: "TestClient"
    }));
    
    
//var req = new XMLHttpRequest();
//req.open('GET', "https://access.cns.vt.edu/api/oath/privileges", true);
//req.onreadystatechange = function() {
//    if (req.readyState === 4) {
//        console.log(req.responseText);
//    }
//};
//req.setRequestHeader('Accept', 'application/json');
//req.setRequestHeader('Authorization', 'Bearer c7b7f2d486a9c2c8cd9681e76db105f28e31fe0d');
//req.send();



}