if (window.sessionStorage.mem != "yes"){
  user = prompt("If you are a member type the pasword,\nif you are a gest leve it blank","");
  if (user == "Dell"){
    window.sessionStorage.mem = "yes";
    window.location.href = "index.html";
  }else{
    window.sessionStorage.mem = "no";
    window.location.href = "games.html";
  }
}

