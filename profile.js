function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    window.location.href = "index.html";
   }

  
  object.onload = function profilinfo(){

    document.getElementById("uname").innerHTML  = "Jurek";
    document.getElementById("ulastname").innerHTML  = "Wiśniewski";
}



const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;



