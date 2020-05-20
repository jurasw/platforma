

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCYm8Uc859sTBNJh_m311U12hcRDgQG_Z0",
    authDomain: "https://jurasw.github.io/platforma",
    databaseURL: "https://platforma-8f6fd.firebaseio.com/",
    projectId: "platforma-8f6fd",
    storageBucket: "platforma-8f6fd.appspot.com",
    messagingSenderId: "648948657968",
    appId: "1:981050528315:web:01149abf7f1507a846c21e"
  };
  // Initialize Firebase
firebaseConfig.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
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
   
   
   
   auth.onAuthStateChanged(function(user){
    
    if(user){
     
     var email = user.email;
     alert("Active User " + email);
     
     //Take user to a different or home page
     window.location.href = "https://jurasw.github.io/platforma/task";
     //is signed in
     
    }else{
     
     alert("No Active User");
     //no user is signed in
    }
    
    
    
   });