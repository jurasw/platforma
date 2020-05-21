const auth = firebase.auth();
  
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
firebase.database().ref('users/' + user.uid + "/stazysta").on('value',(snap)=>{
  var isuserstazysta = snap.val();
  if(isuserstazysta === true){
    document.getElementById("userstab").style.display = "none";
}
}
); }});

 
  
  function create_unfinished_task(){
    unfinished_task_container = document.getElementsByClassName("container")[0];
    unfinished_task_container.innerHTML = "";

    task_array = [];
    firebase.database().ref("unfinished_task").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });
      for(var i, i = 0; i < task_array.length; i++){
        task_date = task_array[i][0];
        task_key = task_array[i][1];
        task_title = task_array[i][2];

        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);
        task_container.setAttribute('onclick', "openModal(modal)");
        
       


        // TASK DATA
        task_data = document.createElement('div');
        task_data.setAttribute('id', 'task_data');

        title = document.createElement('p');
        title.setAttribute('id', 'task_title');
        title.setAttribute('contenteditable', false);
        title.innerHTML = task_title;
        document.getElementById("popuptitle").innerHTML =task_title;
        date = document.createElement('p');
        date.setAttribute('id', 'task_date');
        date.setAttribute('contenteditable', false);
        date.innerHTML = task_date;

        // TASK TOOLS
        task_tool = document.createElement('div');
        task_tool.setAttribute('id', 'task_tool');

       

       

        

        unfinished_task_container.append(task_container);
        task_container.append(task_data);
        task_data.append(title);
        task_data.append(date);

        task_container.append(task_tool);
        task_tool.append(task_done_button);
        task_done_button.append(fa_done);
        
    
     
      }

    });

  }
  

  function signOut(){
    
    auth.signOut();
    //alert("Signed Out");
    window.location.href = "index.html";
   }

function setname(){
  document.getElementById("popuptitle") = task_title;
}


function openModal(modal) {
  
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
 
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function gototasks(){
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
  firebase.database().ref('users/' + user.uid + "/stazysta").on('value',(snap)=>{
    var isuserstazysta = snap.val();
    if(isuserstazysta === true){
  window.location.href = "https://jurasw.github.io/platforma/taskwall";
  }
  if(isuserstazysta !== true){
    window.location.href = "https://jurasw.github.io/platforma/task";
    }}
); }});
}