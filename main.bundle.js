(()=>{"use strict";var e={371:(e,t,n)=>{e.exports=n.p+"images/enemySpriteSheet.png"},604:(e,t,n)=>{e.exports=n.p+"images/enemySpriteSheet2.png"},233:(e,t,n)=>{e.exports=n.p+"images/enemySpriteSheet3.png"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const e={element:document.querySelector("#game-board"),height:400,width:1e3},t={height:400,width:137,lives:null,elements:{container:document.getElementById("castle"),livesText:document.getElementById("castle-lives")},setup(e){this.lives=e,this.draw()},damage(e,t){this.lives-=e,this.draw(),0===this.lives&&t()},draw(){this.elements.livesText.textContent=Math.max(0,this.lives)}};var i=n(371),r=n(604),s=n(233);const o=new Image;o.src=i;const a=new Image;a.src=r;const c=new Image;c.src=s;const u=[o,a,c];function l(){return u[Math.floor(Math.random()*u.length)]}function d(){return"2412px 98px"}const m=Object.freeze({HIT_CASTLE:0,QUESTION_ANSWERED:1});function h({position:{x:e,y:t},speed:n,question:i,fieldWidth:r,handleSelectEnemy:s,damageCastle:o,deleteEnemy:a}={}){const c=function(){let e=0,t=0;return{sprite:l(),frameWidth:134,frameHeight:98,getRandomSpriteSheet:l,getBackgroundPosition:function(){return`-${134*t}px -0px`},getBackgroundSize:d,update:function(n){e+=n,e>50&&(t>=17?t=0:t+=1,e=0)}}}(),u=c.frameWidth,h=c.frameHeight,p={x:e,y:t},g=function(){const e=document.createElement("div"),t=document.createElement("div");return e.classList.add("enemy"),e.style.width=`${u}px`,e.style.height=`${h}px`,t.classList.add("enemy-question"),t.textContent=i.text,e.style.backgroundImage=`url(${c.sprite.src})`,e.style.backgroundPosition=c.getBackgroundPosition(),e.style.backgroundSize=c.getBackgroundSize(),e.appendChild(t),e.addEventListener("click",s),e}(),S=[];function y(){a(g),g.remove()}return Object.freeze({update:function(e){if(p.x>=r-u/2)return y(),S.push(f(m.HIT_CASTLE)),void o(1);p.x+=n*(e/1e3),c.update(e)},draw:function(){g.style.transform=`translate(${p.x}px, ${p.y}px)`,g.style.backgroundPosition=c.getBackgroundPosition()},handleDelete:y,toggleSelect:function(){g.classList.toggle("selected")},addEvent:function(e){S.push(e)},getQuestionInfo:function(){return{text:i.text,answer:i.answer,events:S}},question:i,get element(){return g}})}function f(e,t=null,n=!1){return{type:e,answer:{value:t,isCorrect:n}}}const p=function(e,t,{autoRestart:n=!0}={}){let i=e;return Object.freeze({tick:function(r){i=Math.max(0,i-r),i<=1&&(t(),n&&(i=e))},getHumanTimeRemaining:function(){const e=Math.ceil(i/1e3)%60,t=Math.floor(Math.ceil(i/1e3)/60);return`${t<10?`0${t}`:t}:${e<10?`0${e}`:e}`}})},g={easy:["+","-"],medium:["+","-","×"],hard:["+","-","×"],insane:["+","-","×","÷"]},S=e=>Math.floor(Math.random()*e),y=e=>S((e=>{switch(e){case"easy":return 5;case"medium":return 10;case"hard":return 30;case"insane":return 100;default:return 5}})(e))+1,E=e=>{const t=(e=>g[e][(e=>S(g[e].length))(e)])(e);let n=y(e),i=y(e);for(;"÷"===t&&n%i!=0;)n=y(e),i=y(e);for(;"-"===t&&n-i<0;)n=y(e),i=y(e);for(;"×"===t&&n*i>150;)n=y(e),i=y(e);for(;"+"===t&&n+i>150;)n=y(e),i=y(e);const r=`${n} ${t} ${i}`;return{text:r,answer:(e=>{const t=e.split(" "),n=Number(t[0]),i=t[1],r=Number(t[2]);let s;return s="+"===i?n+r:"-"===i?n-r:"×"===i?n*r:n/r,s})(r)}},T=document.querySelectorAll("[data-score-display]");let x=0;function w(){T.forEach((e=>{e.textContent=x}))}const v=Object.freeze({addPoints:function(e){e<0?x=Math.max(0,x+e):x+=e,w()},reset:function(){x=0,w()}}),b={SPAWN_POINTS:{FIRST_LANE:{x:-100,y:35},SECOND_LANE:{x:-100,y:135},THIRD_LANE:{x:-100,y:235}},POINTS:{CORRECT_ANSWER:10,WRONG_ANSWER:-2,CASTLE_LIFE_LOST:-10},enemySpeed:28,enemySpeedIncrement:1,spawnTimerMs:3500,gameTimerMs:3e5,questionDifficulty:"medium",castleStartingLives:3,lastAnswersToShow:5};function C(e){e.style.display="none"}function I(e,t){e.style.display=t}function N(e,{attributes:t={},text:n}={}){const i=document.createElement(e);return Object.assign(i,t),n&&i.appendChild(document.createTextNode(n)),i}const q=document.querySelector("#question-history tbody"),L="question-history-answer",A="question-history-correct-answer";const O=function(e,t){const n=document.createDocumentFragment();e.forEach((e=>{const i=function(e,t){const n=N("tr"),i=N("td",{text:`${e.text} = `}),r=N("span",{text:e.answer.toString(),attributes:{className:`${L} ${A}`}}),s=N("td");return e.events.slice(-t).forEach((e=>{const t=function(e){const t=e.answer.isCorrect?A:"question-history-wrong-answer",n=e.type===m.HIT_CASTLE?"":e.answer.value,i=N("span",{attributes:{className:`${L} ${t}`},text:n});if(e.type===m.HIT_CASTLE){const e=N("i",{attributes:{className:"fas fa-heart-broken",title:"Enemy Hit Castle"}});i.appendChild(e)}return i}(e);s.appendChild(t)})),i.appendChild(r),n.appendChild(i),n.appendChild(s),n}(e,t);n.appendChild(i)})),q.replaceChildren(n)},k=document.querySelector("#start-page"),P=document.querySelector("#game-page"),$=document.querySelector("#game-over-page"),_=document.querySelector("#difficulty-select-page"),R=document.querySelector(".answer-form"),D=document.querySelector("#answer-input"),M=document.querySelector("#game-timer"),W=document.querySelector(".start-button"),j=document.querySelector("#restart-button"),H=document.querySelector(".pause-button"),z=document.querySelectorAll("[data-difficulty"),B=document.querySelector("#home-button"),F=document.querySelector("#game-over-title"),Q={...b},G={},U=e.width-(t.width-70),Y=new class{constructor(e,t){this.running=!1,this.rafID=void 0,this.update=e,this.draw=t,this.accumulatedTime=0,this.currentTime=0,this.timeStep=1e3/60,this.cycle=this.cycle.bind(this)}cycle(e){this.rafID=requestAnimationFrame(this.cycle),this.accumulatedTime+=e-this.currentTime,this.currentTime=e;let t=!1;for(this.accumulatedTime>60&&(this.accumulatedTime=this.timeStep);this.accumulatedTime>=this.timeStep;)this.update(this.timeStep),t=!0,this.accumulatedTime-=this.timeStep;t&&this.draw()}start(){this.running=!0,this.rafID=requestAnimationFrame(this.cycle)}stop(){this.running=!1,cancelAnimationFrame(this.rafID)}}((function(e){1===J&&(Object.keys(G).forEach((t=>G[t].tick(e))),V.forEach((t=>t.update(e))))}),(function(){M.textContent=G.gameTimer.getHumanTimeRemaining(),V.forEach((e=>e.draw()))}));let J=0,K=null,V=[],X=[];function Z(){const t=h({position:ee(),speed:Q.enemySpeed,question:E(Q.questionDifficulty),fieldWidth:U,handleSelectEnemy:re,damageCastle:se,deleteEnemy:te});Q.enemySpeed+=Q.enemySpeedIncrement,e.element.appendChild(t.element),V.push(t)}function ee(){const e=Object.keys(Q.SPAWN_POINTS);return Q.SPAWN_POINTS[e[Math.floor(Math.random()*e.length)]]}function te(e){V=V.filter((t=>t.element!==e||(K===t&&(K=null),X.push(t.getQuestionInfo()),!1)))}function ne(){oe("You Win!")}function ie(e){if(e.preventDefault(),!K||""===D.value.trim())return;const t=K.question.answer.toString(),n=f(m.QUESTION_ANSWERED,D.value);K.addEvent(n),n.answer.value===t?(n.answer.isCorrect=!0,K.handleDelete(),K=null,v.addPoints(Q.POINTS.CORRECT_ANSWER)):(n.answer.isCorrect=!1,v.addPoints(Q.POINTS.WRONG_ANSWER)),D.value=""}function re(e){D.focus();const t=V.find((t=>t.element===e.currentTarget));t!==K&&(K&&K.toggleSelect(),t.toggleSelect(),K=t)}function se(e){v.addPoints(Q.POINTS.CASTLE_LIFE_LOST),t.damage(e,oe)}function oe(e){J=2,O(X,Q.lastAnswersToShow),C(P),F.textContent=e||"Game Over",I($,"flex")}function ae(){Q.enemySpeed=b.enemySpeed,G.spawnTimer=p(Q.spawnTimerMs,Z),G.gameTimer=p(Q.gameTimerMs,ne,{autoRestart:!1}),v.reset(),D.value="",t.setup(Q.castleStartingLives),V.forEach((e=>e.handleDelete())),X=[]}function ce(){ae(),C($),I(P,"flex"),J=1}function ue(){const[e,t]=["Continue","Pause"];1===J?(J=3,D.disabled=!0,V.forEach((e=>e.element.classList.add("not-clickable"))),Y.stop(),H.textContent=e):3===J&&(Y.start(),J=1,D.disabled=!1,V.forEach((e=>e.element.classList.remove("not-clickable"))),H.textContent=t)}function le(){C(k),I(_,"flex")}function de(e){const t=e.target.dataset.difficulty;C(_),I(P,"flex"),function(e){ae(),Q.questionDifficulty=e,J=1,Y.start()}(t)}function me(){3===J&&ue(),Y.stop(),J=0,C(P),I(_,"flex")}Object.freeze({init:function(){W.addEventListener("click",le),j.addEventListener("click",ce),H.addEventListener("click",ue),R.addEventListener("submit",ie),z.forEach((e=>e.addEventListener("click",de))),B.addEventListener("click",me)}}).init()})()})();
//# sourceMappingURL=main.bundle.js.map