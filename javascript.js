'use strict';
const number = document.querySelector('.num'),
     str = document.querySelector('.str'),
     input =  document.querySelector('input'),
     answer = document.querySelector('.answer'),
     btn = document.querySelector('button');

     let sum = 0,
        num = 0,
        num2 = 0;
    let a = '' ;    

function numRandom () {
     num = Math.ceil(Math.random() * 10);
     num2 = Math.ceil(Math.random() * 10);  
    
    const arr = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять'];    
     a = arr[num2-1];
    
    return a;
}    

numRandom();

let mText = '';
const canvas = document.getElementById("drawtext_demo");
const context = canvas.getContext("2d");
// центрируем текст
let xPos = canvas.width/2;
let yPos = canvas.height/2;

function textCanvas () {   
    // передаем данные в канвас
    mText = num + ' * ' + a + ' = ';
    context.font = "60pt Comic Sans MS";
    context.fillStyle = "lime";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(mText, xPos, yPos);     
    
}
textCanvas();


btn.addEventListener('click', () => {

function contolCaptcha() {
    if(+input.value === num * num2){
        answer.innerHTML = 'Верно';
    } else{
        answer.innerHTML = 'Не верно';   
        // Очиста всего холста 
        context.clearRect(0, 0, canvas.width, canvas.height); 
        // новая генерация
        numRandom();
        textCanvas();
    };
    input.value = '';      
}
contolCaptcha();

})     
     

  