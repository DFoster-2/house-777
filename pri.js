
function login_pri(){
  const pin = document.getElementById("pin").value;
  if (pin == "99765"){
    window.sessionStorage.pri = "yes";
    window.location.href = "primum_games.html";
  }else{
    location.reload();
  }
}