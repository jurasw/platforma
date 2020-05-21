const auth = firebase.auth();
const db = firebase.firestore();
function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    window.location.href = "index.html";
   }
   
   firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      alert("jest user");
      document.getElementById("uname").innerHTML = "yourTextHere";
      firebase.database().ref('users/' + user.uid + "/user_name").on('value',(snap)=>{
       snap.val();
      });

    } else {
      // User not logged in or has just logged out.
    }
  });
  
  
