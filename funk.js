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

let user = getckoy("userername");
if (user === "dan") {
  console.log("The value of the userername cookie is 'dan'");
} else {
  console.log("The value of the userername cookie is not 'dan'");
}