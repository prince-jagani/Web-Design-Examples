function validateForm()
{
    var x = document.form.txtName.value;
    var pass = document.form.txtPass.value;
    var userPass = localStorage.getItem("passD");

    localStorage.setItem("x1", x);
    

    if(userPass == ""){
        localStorage.setItem("passD", pass);
        alert("No Password Found ! Creating Password...");
        document.form.txtPass.focus();
        
        
    } 
    if (pass == userPass){
        alert("Password Matched !");
    } 
    else if(pass != userPass){
        alert("Incorrect Password !");
        document.form.txtPass.focus();
        return false;
    }
    
}
function resetPass(){
    localStorage.removeItem("passD");
    alert("Password Reset Successfully !");
}