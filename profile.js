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
     
      firebase.database().ref('users/' + user.uid + "/user_name").on('value',(snap)=>{
        document.getElementById("uname").innerHTML = snap.val();
      });
      firebase.database().ref('users/' + user.uid + "/user_lastname").on('value',(snap)=>{
        document.getElementById("ulastname").innerHTML = snap.val();
      });
      firebase.database().ref('users/' + user.uid + "/points").on('value',(snap)=>{
        document.getElementById("points").innerHTML = snap.val();
      });

    } else {
      // User not logged in or has just logged out.
    }
  });
  
 function gototasks(){
  firebase.database().ref('users/' + user.uid + "/stazysta").on('value',(snap)=>{
    var isuserstazysta = snap.val();
    if(isuserstazysta === true){
  window.location.href = "https://jurasw.github.io/platforma/taskwall";
  }
  if(isuserstazysta !== true){
    window.location.href = "https://jurasw.github.io/platforma/taskw";
    }
});
}
