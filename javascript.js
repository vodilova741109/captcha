"use strict";
function capthaControl() {
  const input = document.querySelector("input"),
    answer = document.querySelector(".answer"),
    btn = document.querySelector("button"),
    canvas = document.getElementById("drawtext_demo"),
    context = canvas.getContext("2d");

  let num = 0,
      num2 = 0,
      a = "";

  function numRandom() {
    num = Math.ceil(Math.random() * 10);
    num2 = Math.ceil(Math.random() * 10);
    const arr = [
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
    a = arr[num2 - 1];
    return a;
  }

  // центрируем текст
  let xPos = canvas.width / 2;
  let yPos = canvas.height / 2;

  function textCanvas() {
    // передаем данные в канвас
    let mText = num + " * " + a + " = ";
    context.font = "60pt Comic Sans MS";
    context.fillStyle = "lime";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(mText, xPos, yPos);
  }

  function check() {
    if (+input.value === num * num2) {
      answer.innerHTML = "Верно";
    } else {
      answer.innerHTML = "Не верно";
      // Очиста всего холста
      context.clearRect(0, 0, canvas.width, canvas.height);
      // новая генерация
      numRandom();
      textCanvas();
    }
    input.value = "";
  }
  numRandom();
  textCanvas();

  btn.addEventListener("click", check);
}

capthaControl();
