
   
   function signIn(){
    
    window.location.href = "https://jurasw.github.io/platforma";
    
    
   }

function signUp(){
    var database = firebase.database();
    var name = document.getElementById("name");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var cpass = document.getElementById("cpass");
    var code = document.getElementById("code");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    if(password.value === cpass.value){
        

  if(code.value === "adminxxx2020"){
    promise.catch(e => alert(e.message));
    if(user){
		
	
        firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
            mail: email, 
            user_name: name.value,
            user_lastname: lastname.value,
            stazysta: false,
            manager: true,
            admin: true,
            points: 0
          });
        }
        alert("Signed Up");
        window.location.href = "https://jurasw.github.io/platforma/task";}
    


  else if(code.value === "manager2020"){
    promise.catch(e => alert(e.message));
    if(user){
		
	
        firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
            mail: email, 
            user_name: name.value,
            user_lastname: lastname.value,
            stazysta: false,
            manager: true,
            admin: false,
            points: 0
          });
          alert("Signed Up");
          window.location.href = "https://jurasw.github.io/platforma/task";}
        }
  
    
    
  else if(code.value === "stazxxx2020"){
    promise.catch(e => alert(e.message));
    if(user){
		
	
        firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
            mail: email, 
            user_name: name.value,
            user_lastname: lastname.value,
            stazysta: true,
            manager: false,
            admin: false,
            points: 0
          });
          alert("Signed Up");
        window.location.href = "https://jurasw.github.io/platforma/task";}
        }
        
else{
    alert("wrong company code");
}

     
    }
    else{
        alert("passwords don't match");
    }
}
   

   
   
   function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    
   }
