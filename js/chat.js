
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
firebase.database().ref('users/' + user.uid + "/stazysta").on('value',(snap)=>{
  var isuserstazysta = snap.val();
  if(isuserstazysta === true){
    document.getElementById("userstab").style.display = "none";
}
}
); }});

var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

var myName = "";



function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }

  sendMessage();
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});

function signOut(){
    
  auth.signOut();
 // alert("Signed Out");
  window.location.href = "https://jurasw.github.io/platforma/";
 }