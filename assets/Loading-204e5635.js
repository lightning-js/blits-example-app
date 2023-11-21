import{B as e,S as l}from"./index-6c9726ee.js";import"./settings-27783f3c.js";const n=e.Component("Loading",{components:{Square:l},template:`
    <Element>
      <Element x="880" y="500">
        <Circle size="40" color="#94a3b8" :alpha.transition="{value: $alpha, delay: 200}" />
        <Circle size="40" color="#94a3b8" x="60" :alpha.transition="{value: $alpha, delay: 300}" />
        <Circle size="40" color="#94a3b8" x="120" :alpha.transition="{value: $alpha, delay: 400}" />
      </Element>
    </Element>
  `,state(){return{alpha:0}},hooks:{ready(){let a=0;this.$setInterval(()=>{this.alpha=a%2?0:1,a++},800)}}});export{n as default};
