function signUp(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var cpass = document.getElementById("cpass");
    var code = document.getElementById("code");
    if(password.value === cpass.value){
  
  
  if(code.value === "adminxxx2020"){
  auth.createUserWithEmailAndPassword(email.value, password.value).then(cred => {
      return db.collection('users').doc(cred.user.uid).ser({
          admin: true
      })
  })  
  alert("Signed Up");
  window.location.href = "task.html";}

  if(code.value === "manager2020"){
    auth.createUserWithEmailAndPassword(email.value, password.value).then(cred => {
        return db.collection('users').doc(cred.user.uid).ser({
            manager: true,
            admin: false
        })
    })  
    alert("Signed Up");
    window.location.href = "task.html";}
    
    
  if(code.value === "stazxxx2020"){
        auth.createUserWithEmailAndPassword(email.value, password.value).then(cred => {
            return db.collection('users').doc(cred.user.uid).ser({
                manager: false,
                admin: false,
                stazysta: ture
            })
        })  
        alert("Signed Up");
        window.location.href = "task.html";}


     
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
    
