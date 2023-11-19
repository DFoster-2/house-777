if(window.sessionStorage.evel_pig != "yes"){
  alert("You are not logged in please log in")
  window.location.href = "login.html";
}

function logout(){
  window.sessionStorage.evel_pig = "no";
  if(window.sessionStorage.evel_pig != "yes"){
    alert("You are not logged in please log in")
    window.location.href = "login.html";
  }
}

function pin1(){
  pin = prompt("Pin for this quiz","");
  if (pin == "9934"){
    window.location.href = "quiz1.html";
  }else{
    alert('wrong pin');
  }
}

function pin2(){
  pin = prompt("Pin for this quiz","");
  if (pin == "9934"){
    window.location.href = "quiz2.html";
  }else{
    alert('wrong pin');
  }
}
 
