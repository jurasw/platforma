function signUp(){
  
    window.location.href = "https://jurasw.github.io/platforma/signup";
   }
   

   
   function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    
    
    
   }
   
   
   function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    
   }
   
   $("#pass").keypress(function(event) { 
    if (event.keyCode === 13) { 
        signIn(); 
    } 
}); 
   
   auth.onAuthStateChanged(function(user){
    
    if(user){
     
     var email = user.email;
     //alert("Active User " + email);
     
     //Take user to a different or home page
     window.location.href = "https://jurasw.github.io/platforma/profile";
     //is signed in
     
    }else{
     
     //alert("No Active User");
     //no user is signed in
    }
    
    
    
   });

