const auth = firebase.auth();

function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    window.location.href = "index.html";
   }
   
   firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
    } else {
      // User not logged in or has just logged out.
    }
  });
  
  object.onload = function profilinfo(){

    firebase.database().ref('users/' + user.uid).once('value',   function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        info_array.push(Object.values(childData));

       
        document.getElementById("uname").innerHTML  =  task_date = info_array[i][5];
        document.getElementById("ulastname").innerHTML = task_title = task_array[i][6];
         
      });
    }); }
    





