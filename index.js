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
   
   var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("signUp").click();
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