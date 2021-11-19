const App = {
  data() {
    return {
      counter: 2,
      title: 'Пожалуйста введите ответ цифрами',
      placeholderStr: 'Впишите результат',
      inputValue: '',
      
       // SET CONFIG PARAMETRES
      colorActive: '#474a51',
      colorPozitiv:  'green',
      colorNegativ:  'red',
      fontSizeActive:  '18px',
      textAlignActive:  "center",
      borderRadiusActive: "5px",

      // Elements DOM
      containerElement: document.querySelector(".container"),
      rowElement: document.querySelector(".row"),
      inputElement: document.querySelector("input"),
      answerElement: document.querySelector(".answer"),
      btnCheckElement: document.querySelector("button"),
      canvasElement: document.getElementById("drawtext"),
      contextElement: canvasElement.getContext("2d"),
      
      //  rener number
      number: 0, // рандомное число 1
      numberText: 0, // рандомное число 2 type число
      numberStrText: "", // рандомное число 2 type строка

    }


  },

  methods: {
    inputChange(event){
      this.inputValue = event.target.value
    }


  }
}

const app = Vue.createApp(App)

app.mount('#app')



