const auth = firebase.auth();
const functions = firebase.functions();

function signUp(){
  
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    if ($('#password').val() == $('#confirmPassword').val()) {
        

        if ($('#comPassword').val() == "stazysta2020") {
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
        }
        if ($('#comPassword').val() == "manager2020") {
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
        }
        if ($('#comPassword').val() == "admin2020") {
            exports.addAdminRole = functions.https.onCall((data, context)=> {
                return admin.auth().getUserEmail(email).then(user=>{
                    return admin.auth().setCustomUserClaims(user.uid, {
                        admin: true
                    });
                 
                }).then(()=> {
                    return{
                        message: 'Succers! ${data.email} has been made admin'
                    }
                }).catch(err => {
                    return err;
                });
            });
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
        }
        else{
            $('#message').html('wrong comany password').css('color', 'red');
        }
      

      } else 
        $('#message').html('Not Matching passwords').css('color', 'red');
   
    
    alert("Signed Up");
   }


   function signIn(){
    window.location.href = "https://jurasw.github.io/platforma";
   }

   //add admin
   const adminForm = document.querySelector('.admin.actions');
   adminForm.addEventListener('submit', (e) => {
       e.preventDefault();
       const adminEmail = document.querySelector('admin-email').value;
       const addAdminRole = functions.httpsCallable('addAdminRole');
       addAdminRole({email: adminEmail}).then(result => {
           console.lof(result);
       })
   })

  