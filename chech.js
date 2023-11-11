if(window.sessionStorage.logedin != "yes"){
  alert("You are not logged in please log in")
  window.location.href = "login.html";
}

function logout(){
  window.sessionStorage.logedin = "no";
  if(window.sessionStorage.logedin != "yes"){
    alert("You are not logged in please log in")
    window.location.href = "login.html";
  }
}