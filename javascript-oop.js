/**
 * Инициализация капчи
 */
class capthaControl {
  constructor(config){    
   // Elements DOM
   this.containerElement = document.querySelector(".container");
   this.rowElement = document.querySelector(".row");
   this.inputElement = document.querySelector("input");
   this.answerElement = document.querySelector(".answer");
   this.btnCheckElement = document.querySelector("button");
   this.canvasElement = document.getElementById("drawtext");
   this.contextElement = this.canvasElement.getContext("2d");
  //  rener number
   this.number = 0; // рандомное число 1
   this.numberText = 0; // рандомное число 2 type число
   this.numberStrText = ""; // рандомное число 2 type строка
  }
  start() {
    // назначаем стили
    this.styleElements();
    // генерируем рандомные числа
    this.numRandom();
    // добавляем числа в canvas
    this.textcanvasElement();
    // запускаем проверку
    this.btnCheckElement.addEventListener("click", this.check.bind(this));
  }
  /**
   * назначаем стили элементам Dom
   */
  styleElements() {   
    // Global style
    this.colorActive = '#474a51';
    this.fontSizeActive = '20px';
    this.textAlignActive = "center";
    this.borderRadiusActive = "5px";

    // стили container
    this.containerElement.style.margin  = '10%';
    this.containerElement.style.width = '450px';
    this.containerElement.style.color = this.colorActive; 
    this.containerElement.style.fontSize = this.fontSizeActive;  
    this.containerElement.style.fontWeight = 'bold';   
    this.containerElement.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    this.containerElement.style.padding = '20px';
    this.containerElement.style.borderRadius = this.borderRadiusActive;

    // стили row
    this.rowElement.style.display = 'flex';
    this.rowElement.style.alignItems = 'center';
    this.rowElement.style.justifyContent = 'space-around';
    
    // стили input
    this.inputElement.style.border = `none`;
    this.inputElement.style.height = this.fontSizeActive;
    this.inputElement.style.borderRadius = this.borderRadiusActive;
    this.inputElement.style.textAlign = this.textAlignActive;
    this.inputElement.style.fontSize = this.fontSizeActive;
    this.inputElement.style.color = this.colorActive;   
    this.inputElement.style.padding = '15px 0';
    this.inputElement.style.maxWidth = '130px';
    this.inputElement.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';
    this.inputElement.style.outline = 'none';

    // стили button
    this.btnCheckElement.style.width = 'auto';
    this.btnCheckElement.style.backgroundColor = this.colorActive;
    this.btnCheckElement.style.borderRadius =this.borderRadiusActive;
    this.btnCheckElement.style.marginTop = '10px 25%';
    this.btnCheckElement.style.height = 'auto';
    this.btnCheckElement.style.padding = '5px';
    this.btnCheckElement.style.fontSize = this.fontSizeActive;      
    this.btnCheckElement.style.color = '#fff';
    this.btnCheckElement.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';

    // стили answer   
    this.answerElement.style.fontSize = this.fontSizeActive;   
    this.answerElement.style.marginLeft  = '20px';
  
    // стили canvas
    this.canvasElement.style.width = '300px';
    this.canvasElement.style.height = '170px';

    this.contextElement.font = "30pt Comic Sans MS";
    this.contextElement.fillStyle = this.colorActive;
    this.contextElement.textAlign = this.textAlignActive;
    this.contextElement.textBaseline = "middle"; 
  }
  /**
   * Генерируем 2 рандомных числа
   * Второе число из типа число преобразуем в строку
   */
  numRandom() {
    this.number = Math.ceil(Math.random() * 10);
    this.numberText = Math.ceil(Math.random() * 10);
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
    this.numberStrText = arrayTextNumber[this.numberText - 1];
    return this.numberStrText;
  }
  /**
   * функция получает данные о сгенерированных числах, добавляет их  и
   * методом fillText() рисует на холсте текст 
   */

  textcanvasElement() {
    // центрируем текст
    let xPos = this.canvasElement.width / 2;
    let yPos = this.canvasElement.height / 2;
    // передаем данные в канвас
    let mText = `${this.number} × ${this.numberStrText}   = `;   
    this.contextElement.fillText(mText, xPos, yPos);
  }
  /**
   * Проверка на правильность решения
   */
  check() {
    if (+this.inputElement.value === this.number * this.numberText) {
      this.answerElement.innerHTML = "Верно";
      this.answerElement.style.color = 'green';
    } else {
      this.answerElement.innerHTML = "Не верно";
      this.answerElement.style.color = 'red';         
      // Очиста всего холста
      this.contextElement.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
      // новая генерация
      this.numRandom();
      this.textcanvasElement();
    }
    this.inputElement.value = "";
  }

}

document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  const capthaFirs = new capthaControl();

  capthaFirs.start();

});