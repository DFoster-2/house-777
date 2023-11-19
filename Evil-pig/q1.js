const questons = [
  {
    question: "",
    ansers:[
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},]
  },
  {
    question: "",
    ansers:[
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},]
  },
  {
    question: "",
    ansers:[
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},]
  },
  {
    question: "",
    ansers:[
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},]
  },
    {
    question: "",
    ansers:[
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},]
  },
    {
    question: "",
    ansers:[
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},]
  },
  {
    question: "",
    ansers:[
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},]
  },
  {
    question: "",
    ansers:[
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},]
  },
  {
    question: "",
    ansers:[
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},]
  },
  {
    question: "",
    ansers:[
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},]
  },
  {
    question: "",
    ansers:[
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},
      { text: "", correct: false},]
  },
];

const questionElement = document.getElementById("question");
const anserbuttionmy = document.getElementById("ansers");
const nextbutun = document.getElementById("next");
const home = document.getElementById("home");

let qestencurent = 0;
let scroe = 0;

function startquiz(){
  qestencurent = 0;
  score = 0;
  nextbutun.innerHTML = "Next";
  showQustons();
}
function showQustons(){
  resetStae();
  let curentqustion = questons[qestencurent];
  let questenNo = qestencurent +1
  questionElement.innerHTML = questenNo+ "." + curentqustion.question;

  curentqustion.ansers.forEach(ansers =>{
    const button = document.createElement("button");
    button.innerHTML = ansers.text;
    button.classList.add("btn");
    anserbuttionmy.appendChild(button);
    if (ansers.correct){
      button.dataset.correct = ansers.correct;
    }
    button.addEventListener("click", selectAnswer)
  });
}
function resetStae(){
  nextbutun.style.display = "none";
  home.style.display = "none";
  while(anserbuttionmy.firstChild){
    anserbuttionmy.removeChild(anserbuttionmy.firstChild);
  }
}

function selectAnswer(e){
  const selctbnt = e.target;
  const iscorrect = selctbnt.dataset.correct === "true";
  if(iscorrect){
    selctbnt.classList.add("correct");
    scroe ++;
  }else{
     selctbnt.classList.add("incorrect");
  }
  Array.from(anserbuttionmy.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextbutun.style.display = "block";
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
    const persentscore = parseInt(scroe)/questons.length*100;
    if (persentscore <= 25 ){
      questionElement.innerHTML = `Well done ${user}, You have scored ${scroe} out of ${questons.length}! ${user}, you scored ${persentscore}%. ${user}, that is a bad score. You need to do a lot of  practice `;
    } else if (persentscore <= 50 ){
      questionElement.innerHTML = `Well done ${user}, You have scored ${scroe} out of ${questons.length}! ${user}, you scored ${persentscore}%. ${user} that is a ok score.`;
    }else if (persentscore <= 75){
      questionElement.innerHTML = `Well done ${user}, You have scored ${scroe} out of ${questons.length}! ${user}, you scored ${persentscore}%. ${user} that is a good score.`;
    } else if (persentscore < 100){
      questionElement.innerHTML = `Well done ${user}, You have scored ${scroe} out of ${questons.length}! ${user}, you scored ${persentscore}%. ${user} that is a super score.`;
    } else{// persentscore == 100
      questionElement.innerHTML = `Well done ${user}, You have scored ${scroe} out of ${questons.length}! ${user}, you scored ${persentscore}%. ${user} that is a brilant score. You are Perfect`;
    }
    
    nextbutun.style.display = "block";
    nextbutun.innerHTML = "Home"
  }
}


function showscore(){
  resetStae();
  chechCky()
}
  

  
  


function nextbutton(){
  qestencurent++;
  if(qestencurent < questons.length){
    showQustons()
  }else{
    showscore()
  }
}


nextbutun.addEventListener("click", ()=>{
    if(qestencurent < questons.length){
      nextbutton()
    }else{
      window.location.href = "index.html"
      //startquiz()
    }
});


startquiz();
