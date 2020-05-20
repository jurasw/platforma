function signUp(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var cpass = document.getElementById("cpass");
    if(password.value === cpass.value){
  auth.createUserWithEmailAndPassword(email.value, password.value).then(cred => {
      console.log(cred.user)
  })
 
  
  alert("Signed Up");

     window.location.href = "task.html";
    }
    else{
        alert("passwords don't match");
    }
}
   
   
   function signIn(){
    
    window.location.href = "index.html";
    
    
   }
   
   
   function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    
   }
    
