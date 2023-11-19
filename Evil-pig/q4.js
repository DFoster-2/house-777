const questons = [
  {
    question: "Where is Disney's European theme park located?",
    ansers:[
      { text: "Paris, France", correct: true},
      { text: "Southampton, uk", correct: false},
      { text: "Paris, Mars", correct: false},
      { text: "Paris, spain", correct: false},]
  },
  {
    question: "Which Disney movie has had the most sequels?",
    ansers:[
      { text: "Snow White and the Seven Dwarfs", correct: false},
      { text: "One Hundred and One Dalmatians", correct: false},
      { text: "Toy Story", correct: true},
      { text: "Fantasia", correct: false},]
  },
  {
    question: "Who was the first Disney princess?",
    ansers:[
      { text: "Belle", correct: false},
      { text: "Cinderella", correct: false},
      { text: "Aurora", correct: false},
      { text: "Snow White", correct: true},]
  },
  {
    question: "What color are Mickey Mouse's shoes?",
    ansers:[
      { text: "Yellow", correct: true},
      { text: "Red", correct: false},
      { text: "Green", correct: false},
      { text: "Orange", correct: false},]
  },
    {
    question: "What year was Cinderella released?",
    ansers:[
      { text: "1960", correct: false},
      { text: "1945", correct: false},
      { text: "1943", correct: false},
      { text: "1950", correct: true},]
  },
    {
    question: "Mickey Mouse was originally named what?",
    ansers:[
      { text: "Small Mouse", correct: false},
      { text: "Big Mouse", correct: false},
      { text: "Mortimer Mouse", correct: false},
      { text: "Time Mouse", correct: false},]
  },
  {
    question: "How many 'Academy Awards for Best Original Song' has Disney won?",
    ansers:[
      { text: "13", correct: false},
      { text: "14", correct: true},
      { text: "15", correct: false},
      { text: "16", correct: false},]
  },
  {
    question: "What year did Disneyland open?",
    ansers:[
      { text: "1900", correct: false},
      { text: "19553678937179679658769872976987526", correct: false},
      { text: "1955", correct: true},
      { text: "19550", correct: false},]
  },
  {
    question: "What is the name of Andy’s neighbor in Toy Story?",
    ansers:[
      { text: "Sid", correct: true},
      { text: "Andy v2", correct: false},
      { text: "Emma", correct: false},
      { text: "Oliver", correct: false},]
  },
  {
    question: "How many fingers does Mickey Mouse have?",
    ansers:[
      { text: "2", correct: false},
      { text: "3", correct: false},
      { text: "4", correct: true},
      { text: "5", correct: false},]
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
