if(window.sessionStorage.pri != "yes"){
  window.location.href = "pri.html";
}
window.location.href = "game.html";
function logout(){
  window.sessionStorage.pri = "no";
  if(window.sessionStorage.pri != "yes"){
    alert("Please log in")
    window.location.href = "games.html";
  }
}