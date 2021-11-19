"use strict";
function capthaControl() {
  const containerElement = document.querySelector(".container");
  const rowElement = document.querySelector(".row");
  const inputElement = document.querySelector("input");
  const answerElement = document.querySelector(".answer");
  const btnCheckElement = document.querySelector("button");
  const canvasElement = document.getElementById("drawtext");
  const contextElement = canvasElement.getContext("2d");

  let number = 0; // рандомное число 1
  let numberText = 0; // рандомное число 2 type число
  let numberStrText = ""; // рандомное число 2 type строка


  function start() {
    // назначаем стили
    styleElements();
    // генерируем рандомные числа
    numRandom();
    // добавляем числа в canvas
    textcanvasElement();
    // запускаем проверку
    btnCheckElement.addEventListener("click", check);
  }
  start();

  /**
   * назначаем стили элементам Dom
   */
  function styleElements() {   
    // Global style
    const colorActive = '#474a51';
    const fontSizeActive = '20px';
    const textAlignActive = "center";
    const borderRadiusActive = "5px";

    // стили container
    containerElement.style.margin  = '10%';
    containerElement.style.width = '500px';
    containerElement.style.color = colorActive; 
    containerElement.style.fontSize = fontSizeActive;   
    containerElement.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    containerElement.style.padding = '20px';
    containerElement.style.borderRadius = borderRadiusActive;

    // стили row
    rowElement.style.display = 'flex';
    rowElement.style.alignItems = 'center';
    rowElement.style.justifyContent = 'space-around';
    
    // стили input
    inputElement.style.border = `none`;
    inputElement.style.height = fontSizeActive;
    inputElement.style.borderRadius = borderRadiusActive;
    inputElement.style.textAlign = textAlignActive;
    inputElement.style.fontSize = fontSizeActive;
    inputElement.style.color = colorActive;   
    inputElement.style.padding = '15px 0';
    inputElement.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
    inputElement.style.outline = 'none';

    // стили button
    btnCheckElement.style.width = 'auto';
    btnCheckElement.style.backgroundColor = colorActive;
    btnCheckElement.style.borderRadius = borderRadiusActive;
    btnCheckElement.style.marginTop = '10px 25%';
    btnCheckElement.style.height = 'auto';
    btnCheckElement.style.padding = '5px';
    btnCheckElement.style.fontSize = fontSizeActive;      
    btnCheckElement.style.color = '#fff';
    btnCheckElement.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';

    // стили answer
    answerElement.style.color = colorActive;   
    answerElement.style.fontWeight = 'bold';   
    answerElement.style.fontSize = fontSizeActive;   
    answerElement.style.marginLeft  = '20px';
  
    // стили canvas
    canvasElement.style.width = '300px';
    canvasElement.style.height = '170px';

    contextElement.font = "30pt Comic Sans MS";
    contextElement.fillStyle = colorActive;
    contextElement.textAlign = textAlignActive;
    contextElement.textBaseline = "middle"; 
  }
  /**
   * Генерируем 2 рандомных числа
   * Второе число из типа число преобразуем в строку
   */
  function numRandom() {
    number = Math.ceil(Math.random() * 10);
    numberText = Math.ceil(Math.random() * 10);
    const arrayTextNumber = [
      "один",
      "два",
      "три",
      "четыре",
      "пять",
      "шесть",
      "семь",
      "восемь",
      "девять",
      "десять",
    ];
    numberStrText = arrayTextNumber[numberText - 1];
    return numberStrText;
  }
  /**
   * функция получает данные о сгенерированных числах, добавляет их  и
   * методом fillText() рисует на холсте текст 
   */

  function textcanvasElement() {
    // центрируем текст
    let xPos = canvasElement.width / 2;
    let yPos = canvasElement.height / 2;
    // передаем данные в канвас
    let mText = `${number} × ${numberStrText}   = `;   
    contextElement.fillText(mText, xPos, yPos);
  }
  /**
   * Проверка на правильность решения
   */
  function check() {
    if (+inputElement.value === number * numberText) {
      answerElement.innerHTML = "Верно"
      const colorActive = '#474a51';      
      answerElement.style.color = colorActive;   
      
    } else {
      answerElement.innerHTML = "Не верно";
      answerElement.style.color = 'red';         
      // Очиста всего холста
      contextElement.clearRect(0, 0, canvasElement.width, canvasElement.height);
      // новая генерация
      numRandom();
      textcanvasElement();
    }
    inputElement.value = "";
  }

}

capthaControl();
