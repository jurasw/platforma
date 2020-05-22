function signUp(){
    var email = document.getElementById("name");
    var email = document.getElementById("lastname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var cpass = document.getElementById("cpass");
    var code = document.getElementById("code");
   
    if(password.value === cpass.value){
  
        alert("passwords  match");
  if(code.value === "adminxxx2020"){
  auth.createUserWithEmailAndPassword(email.value, password.value).then(cred => {
      return db.collection('users').doc(cred.user.uid).ser({
        mail: email, 
        admin: true,
          user_name: name.value,
            user_lastname: lastname.laue,
            stazysta: false,
            manager: true,
            points: 0
            
      })
  })  
  alert("Signed Up");
  window.location.href = "https://jurasw.github.io/platforma/task";}

  else if(code.value === "manager2020"){
    auth.createUserWithEmailAndPassword(email.value, password.value).then(cred => {
        return db.collection('users').doc(cred.user.uid).ser({
            mail: email, 
            user_name: name.value,
            user_lastname: lastname.laue,
            stazysta: false,
            manager: true,
            admin: false,
            points: 0

        })
    })  
    alert("Signed Up");
    window.location.href = "https://jurasw.github.io/platforma/task";}
    
    
  else if(code.value === "stazxxx2020"){
        auth.createUserWithEmailAndPassword(email.value, password.value).then(cred => {
            return db.collection('users').doc(cred.user.uid).ser({
                mail: email, 
                user_name: name.value,
            user_lastname: lastname.laue,
                manager: false,
                admin: false,
                stazysta: true,
                points: 0
            })
        })  
        alert("Signed Up");
        window.location.href = "https://jurasw.github.io/platforma/task";}
else{
    alert("wrong company code");
}

     
    }
    else{
        alert("passwords don't match");
    }
}
   
   
   function signIn(){
    
    window.location.href = "https://jurasw.github.io/platforma";
    
    
   }
   
   
   function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    
   }
    
   const inputs = document.querySelectorAll(".input");


   function addcl(){
       let parent = this.parentNode.parentNode;
       parent.classList.add("focus");
   }
   
   function remcl(){
       let parent = this.parentNode.parentNode;
       if(this.value == ""){
           parent.classList.remove("focus");
       }
   }
   
   
   inputs.forEach(input => {
       input.addEventListener("focus", addcl);
       input.addEventListener("blur", remcl);
   });