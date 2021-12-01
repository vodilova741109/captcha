Vue.component("captcha", {
  template: `<div>
              <div ref="container" class="container" :style="styleContainer">
                <h2 class="text">{{title}}</h2>
                <div class="row" :style="styleRow">
                    <canvas  ref="canvas" :style="styleCanvas"></canvas>           
                    <input type="text" :style="styleInput" ref="input">            
                </div>      
                <button @click="check()" :style="styleButton">Проверить</button>
                <span class="answer" ref="answer" :style="styleSpan" ></span>
              </div>   
             </div>`,
  data: () => {
    return {
      title: "Пожалуйста введите ответ цифрами:",
      text: "",
      ctx: null,
      //  rener number
      number: 0, // рандомное число 1
      numberText: 0, // рандомное число 2 type число
      numberStrText: "", // рандомное число 2 type строка,
      // назначаем стили элементам

      // стили container
      styleContainer: {
        margin: "10%",
        width: "450px",
        color: "#474a51",
        fontSize: "18px",
        fontWeight: "bold",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        padding: "20px",
        borderRadius: "5px",
      },
      // стили span answer
      styleSpan: {
        fontSize: "18px",
        marginLeft: "20px",
        color: "green",
        fontSize: "18px",
        marginLeft: "20px",
      },
      // стили row
      styleRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      },

      // стили input
      styleInput: {
        border: `none`,
        height: "18px",
        borderRadius: "5px",
        textAlign: "center",
        fontSize: "18px",
        color: "#474a51",
        padding: "15px 0",
        maxWidth: "130px",
        boxShadow: "0 0 5px rgba(0,0,0,0.5)",
        outline: "none",
      },

      // стили button
      styleButton: {
        width: "auto",
        backgroundColor: "#474a51",
        borderRadius: "5px",
        marginTop: "10px 25%",
        height: "auto",
        padding: "5px",
        fontSize: "18px",
        color: "#fff",
        boxShadow: "0 0 5px rgba(0,0,0,0.5)",
      },
      // стили canvas
      styleCanvas: {
        width: "300px",
        height: "170px",
      },
    };
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext("2d");
    this.numRandom();
    // добавляем числа в canvas
    // this.updateCanvas();
    this.textcanvasElement();
    console.log(this.number, this.numberText);
  },
  methods: {
    changeTitle() {
      this.text = this.$refs.input.value;
    },

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
    },
    /**
     * функция получает данные о сгенерированных числах, добавляет их  и
     * методом fillText() рисует на холсте текст
     */
    textcanvasElement() {
      const { ctx } = this;
      // центрируем текст
      let xPos = this.$refs.canvas.width / 2;
      let yPos = this.$refs.canvas.height / 2;
      // передаем данные в канвас
      let mText = `${this.number} × ${this.numberStrText}   = `;
      this.ctx.font = "30pt Comic Sans MS";
      (this.ctx.fillStyle = "#474a51"),
      (this.ctx.textAlign = "center"),
      (this.ctx.textBaseline = "middle"),
      this.ctx.fillText(mText, xPos, yPos);
    },
    check() {
      if (+this.$refs.input.value === this.number * this.numberText) {
        this.$refs.answer.innerHTML = "Верно";
        this.$refs.answer.style.color = "green";        
      } else {
        this.$refs.answer.innerHTML = "Не верно";
        this.$refs.answer.style.color = "red";      

        // Очиста всего холста
        this.ctx.clearRect(
          0,
          0,
          this.$refs.canvas.width,
          this.$refs.canvas.height
        );
        // новая генерация
        this.numRandom();
        this.textcanvasElement();
      }
      this.$refs.input.value = "";
    },
  },
});

new Vue({
  el: "#app",
  data: {
    // colorActive: "#474a51",
    // colorPozitiv: "green",
    // colorNegativ: "red",
    // fontSizeActive: "18px",
    // textAlignActive: "center",
    // borderRadiusActive: "5px",
  },
  computed: {},
  methods: {},
});
