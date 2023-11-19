const questons = [
  {
    question: "What is the only continent with land in all four hemispheres?",
    ansers:[
      { text: "UK", correct: false},
      { text: "Africa", correct: true},
      { text: "US", correct: false},
      { text: "Antarctica", correct: false},]
  },
  {
    question: "Which river flows through the Grand Canyon?",
    ansers:[
      { text: "Krishna River", correct: false},
      { text: "Narmada River", correct: false},
      { text: "Colorado River", correct: true},
      { text: "Indus River", correct: false},]
  },
  {
    question: "What is the state capital of New York?",
    ansers:[
      { text: "Brooklyn", correct: false},
      { text: "New Jersey", correct: false},
      { text: "Manhattan", correct: false},
      { text: "Albany", correct: true},]
  },
  {
    question: "On what continent would you find the world’s largest desert?",
    ansers:[
      { text: "Europe", correct: false},
      { text: "Africa", correct: false},
      { text: "Antarctica", correct: true},
      { text: "Dublin", correct: false},]
  },
    {
    question: "What is the capital of Ireland?",
    ansers:[
      { text: "Limerick", correct: false},
      { text: "Cork", correct: false},
      { text: "Dublin", correct: true},
      { text: "Galway", correct: false},]
  },
    {
    question: "What is the tallest type of tree?",
    ansers:[
      { text: "Redwoods", correct: true},
      { text: "Coast redwood", correct: false},
      { text: "Himalayan cypress", correct: false},
      { text: "Yellow meranti", correct: false},]
  },
  {
    question: "True or False: Holland is a region in The Netherlands?",
    ansers:[
      { text: "True", correct: true},
      { text: "False", correct: false},
      { text: "True", correct: true},
      { text: "False", correct: false},]
  },
  {
    question: "What is the capital of Canada?",
    ansers:[
      { text: "British Columbia", correct: false},
      { text: "Ottawa", correct: true},
      { text: "Manitoba", correct: false},
      { text: "Manitoba", correct: false},]
  },
  {
    question: "What is the capital of England?",
    ansers:[
      { text: "UK", correct: false},
      { text: "Southampton", correct: false},
      { text: "London", correct: true},
      { text: "Yorkshire (which is rubbish)", correct: false},]
  },
  {
    question: "How many stars are on the Chinese flag?",
    ansers:[
      { text: "3", correct: false},
      { text: "4", correct: false},
      { text: "5", correct: true},
      { text: "6", correct: false},]
  },
  {
    question: "On what continent would you find the city of Baku?",
    ansers:[
      { text: "Asia", correct: true},
      { text: "Europe", correct: false},
      { text: "Africa", correct: false},
      { text: "Antarctica", correct: false},]
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
