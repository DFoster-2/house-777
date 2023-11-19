const questons = [
  {
    question: "What does FIFA stand for in English?",
    ansers:[
      { text: "The rubish sport", correct: false},
      { text: "International Federation of Association Football", correct: true},
      { text: "International Federation of rubishnes", correct: false},
      { text: "A sport", correct: false},]
  },
  {
    question: "Who is the world’s highest-paid athlete in 2021?",
    ansers:[
      { text: "Dak Prescott", correct: false},
      { text: "Lionel Messi", correct: false},
      { text: "Conor McGregor", correct: true},
      { text: "Bob No_lastname", correct: false},]
  },
  {
    question: "What height is a regulation NBA basket?",
    ansers:[
      { text: "5 feet", correct: false},
      { text: "10 feet", correct: true},
      { text: "11 feet", correct: false},
      { text: "10 legs", correct: false},]
  },
  {
    question: "What is the national sport of Japan?",
    ansers:[
      { text: "Hockey", correct: false},
      { text: "Sumo Wrestling", correct: true},
      { text: "Futball", correct: false},
      { text: "Fußball", correct: false},]
  },
    {
    question: "Où se termine le Tour de France chaque année?",
    ansers:[
      { text: "Nice", correct: false},
      { text: "Paris", correct: true},
      { text: "Marseille", correct: false},
      { text: "Toulouse", correct: false},]
  },
    {
    question: "What sporting event has a strict dress code of all-white?",
    ansers:[
      { text: "Wimbledon", correct: true},
      { text: "UEFA Champions League", correct: false},
      { text: "FIBA Basketball World Cup", correct: false},
      { text: "Hockey world cup", correct: false},]
  },
  {
    question: "Simone Biles is famous for her skill in what sport?",
    ansers:[
      { text: "Ballet", correct: false},
      { text: "Gymnastics", correct: true},
      { text: "Hockey", correct: false},
      { text: "Futball", correct: false},]
  },
  {
    question: "A cricket umpire raises both of their arms straight above their head – what does this signify?",
    ansers:[
      { text: "Out", correct: false},
      { text: "No - ball", correct: false},
      { text: "6", correct: true},
      { text: "4", correct: false},]
  },
  {
    question: "Jofra Archer will play for which team in The Hundred?",
    ansers:[
      { text: "Welsh Fire", correct: false},
      { text: "London Spirt", correct: false},
      { text: "Southern Brave", correct: true},
      { text: "Birmingham Phoenix", correct: false},]
  },
  {
    question: "How many times can teams sub-out players?",
    ansers:[
      { text: "1", correct: false},
      { text: "50", correct: false},
      { text: "200", correct: false},
      { text: "Unlimited", correct: false},]
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
