window.sessionStorage.logedin = "no";
function setckey(cname,cvalue,exdays){
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getckoy(cname){
  let name = cname + "=";
  let decodedcodky = decodeURIComponent(document.cookie);
  let ca = decodedcodky.split(';');
  for(let i = 0; i< ca.length;i++){
    let c = ca[i];
    while (c.charAt(0) == ' '){
      c= c.substring(1);
    }
    if (c.indexOf(name) == 0){
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function chechCky(){
  let user = getckoy("userername")
  if (user != ""){
    //alert("welcome " + user)
  }else{
    user = prompt("Please enter your name:","");
    if (user != "" && user != null){
      setckey("userername", user, 1)
    }
  }
}
function login(){
  const pin = document.getElementById("pin").value;
  if (pin == "00765"){
    chechCky()
    window.sessionStorage.logedin = "yes";
    window.location.href = "index.html";
  }else{
    location.reload();
  }
}