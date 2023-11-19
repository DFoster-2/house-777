const questons = [
  {
    question: "What is a group of crows called?",
    ansers:[
      { text: "A herd", correct: false},
      { text: "A blue whale", correct: false},
      { text: "A murder", correct: true},
      { text: "A Day", correct: false},]
  },
  {
    question: "How many dots appear on a pair of dice?",
    ansers:[
      { text: "12", correct: false},
      { text: "67", correct: false},
      { text: "42", correct: true},
      { text: "56", correct: false},]
  },
  {
    question: "Which is the only body part that is fully grown from birth?",
    ansers:[
      { text: "Eyes", correct: true},
      { text: "Feet", correct: false},
      { text: "Head", correct: false},
      { text: "Leg", correct: false},]
  },
  {
    question: "Who performs the voice of Homer Simpson?",
    ansers:[
      { text: "Bob no_lastname", correct: false},
      { text: "Nancy Cartwright", correct: false},
      { text: "Dan Castellaneta", correct: true},
      { text: "Dung Beetle", correct: false},]
  },
  {
    question: "What country has the most islands?",
    ansers:[
      { text: "Norway", correct: false},
      { text: "Canada ", correct: false},
      { text: "Finland", correct: false},
      { text: "Sweden", correct: true},]
  },
  {
    question: "How many hearts does an octopus have?",
    ansers:[
      { text: "1", correct: false},
      { text: "2", correct: false},
      { text: "3", correct: true},
      { text: "4", correct: false},]
  },
  {
    question: "Where is the strongest human muscle located?",
    ansers:[
      { text: "Foot", correct: false},
      { text: "Leg", correct: false},
      { text: "Jaw", correct: true},
      { text: "Other foot", correct: false},]
  },
  {
    question: "What planet is closest to the sun?",
    ansers:[
      { text: "Ploto", correct: false},
      { text: "Earth", correct: false},
      { text: "Mars", correct: false},
      { text: "Mercury", correct: true},]
  },
  {
    question: "What is the most common surname in the United States?",
    ansers:[
      { text: "Bob", correct: false},
      { text: "Foster", correct: false},
      { text: "Smith", correct: true},
      { text: "Johnson", correct: false},]
  },
  {
    question: "Where would you be if you were standing on the Spanish Steps?",
    ansers:[
      { text: "Rome", correct: true},
      { text: "Spain", correct: false},
      { text: "Spain", correct: false},
      { text: "Spain", correct: false},]
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
