function AddUser(){
    UserName = document.getElementById("LoginText").value;
    localStorage.setItem("LoginText",UserName);

    window.location = "chat.html";
}