const auth = firebase.auth();

function signUp(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    if ($('#password').val() == $('#confirmPassword').val()) {
        

        var email = document.getElementById("email");
  var password = document.getElementById("password");
  
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  
  alert("Signed Up");
        }
     else 
        $('#message').html('Not Matching passwords').css('color', 'red');
   
    
    alert("Signed Up");
   }


   function signIn(){
    window.location.href = "https://jurasw.github.io/platforma";
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

  