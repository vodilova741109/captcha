Vue.component("captcha", {
    template: `<div><canvas ref="canvas"></canvas></div>`,
    data: () => {
      return {       
        ctx: null,       
      };
    },
    beforeMount(){
    //   this.start();
    },
    mounted() {   
      this.ctx = this.$refs.canvas.getContext('2d');  
      this.updateCanvas();  
    },
    methods: {
        updateCanvas() {
            const { ctx } = this;
            ctx.beginPath();
            ctx.moveTo(75, 50);
            ctx.lineTo(100, 75);
            ctx.lineTo(100, 25);
            ctx.fill();
        }      
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
  