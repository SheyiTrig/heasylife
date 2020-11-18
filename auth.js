function auth(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(user=="username" && pass =="password"){
        window.open("CRM.html");
    }else{
        alert("incorrect username and password");
    }

}
   
    
