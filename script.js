const scoreEL=document.getElementById('score')
const ques=document.getElementById('ques')
const form=document.getElementById("form")
const inp=document.getElementById("inp")

const randomNum1=Math.ceil(Math.random()*10)
const randomNum2=Math.ceil(Math.random()*10)

ques.innerText=`What is ${randomNum1} Multibly By ${randomNum2}`;

const correctAnswer=randomNum1*randomNum2

let score=JSON.parse(localStorage.getItem('score'));
if(!score){
    score=0;
}
scoreEL.innerText=`Score : ${score}`

form.addEventListener("submit",()=>{
 const useAns=+inp.value
  console.log(useAns,'f');
 if(useAns===correctAnswer){
   score++;
   localStorageUpdate()
 }else{
    score--;
    localStorageUpdate()
 }
})

function localStorageUpdate(){
    localStorage.setItem('score',JSON.stringify(score))
}