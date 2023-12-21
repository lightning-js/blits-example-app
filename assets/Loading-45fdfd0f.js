import{B as e,S as l}from"./index-216c7cd6.js";import"./settings-b6f7d147.js";const n=e.Component("Loading",{components:{Square:l},template:`
    <Element>
      <Element x="880" y="500">
        <Circle size="40" color="#94a3b8" :alpha.transition="{value: $alpha, delay: 200}" />
        <Circle size="40" color="#94a3b8" x="60" :alpha.transition="{value: $alpha, delay: 300}" />
        <Circle size="40" color="#94a3b8" x="120" :alpha.transition="{value: $alpha, delay: 400}" />
      </Element>
    </Element>
  `,state(){return{alpha:0}},hooks:{ready(){let a=0;this.$setInterval(()=>{this.alpha=a%2?0:1,a++},800)}}});export{n as default};
