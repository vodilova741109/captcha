"use strict";
function capthaControl() {
  const inputElement = document.querySelector("input");
  const answer = document.querySelector(".answer");
  const btnCheck = document.querySelector("button");
  const canvas = document.getElementById("drawtext_demo");
  const context = canvas.getContext("2d");

  let number = 0; // рандомное число 1
  let numberText = 0; // рандомное число 2 type число
  let numberStrText = ""; // рандомное число 2 type строка

  function start() {
    numRandom();
    textCanvas();
    btnCheck.addEventListener("click", check);
  }
  start();
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

  function textCanvas() {
    // центрируем текст
    let xPos = canvas.width / 2;
    let yPos = canvas.height / 2;
    // передаем данные в канвас
    let mText = number + " * " + numberStrText + " = ";
    // стили текста
    context.font = "60pt Comic Sans MS";
    context.fillStyle = "lime";
    context.textAlign = "center";
    context.textBaseline = "middle";

    context.fillText(mText, xPos, yPos);
  }
  /**
   * Проверка на правильность решения
   */
  function check() {
    if (+inputElement.value === number * numberText) {
      answer.innerHTML = "Верно";
    } else {
      answer.innerHTML = "Не верно";
      // Очиста всего холста
      context.clearRect(0, 0, canvas.width, canvas.height);
      // новая генерация
      numRandom();
      textCanvas();
    }
    inputElement.value = "";
  }
}

capthaControl();
