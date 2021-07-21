(()=>{"use strict";const e={element:document.querySelector("#game-board"),height:400,width:900},t={height:400,width:200,lives:3,elements:{container:document.getElementById("castle"),livesText:document.getElementById("castle-lives")},game:void 0,setup(e){this.game=e,this.draw()},damage(e){this.lives-=e,this.draw(),0===this.lives&&this.game.gameOver()},draw(){this.elements.livesText.textContent=Math.max(0,this.lives)}},s={easy:["+","-"],medium:["+","-","*"],hard:["+","-","*"],insane:["+","-","*","/"]},i=e=>Math.floor(Math.random()*e),n=e=>i((e=>{switch(e){case"easy":return 5;case"medium":return 10;case"hard":return 30;case"insane":return 100;default:return 5}})(e))+1,h=e=>{const t=(e=>s[e][(e=>i(s[e].length))(e)])(e),h=`${n(e)} ${t} ${n(e)}`;return{text:h,answer:(e=>{const t=e.split(" "),s=Number(t[0]),i=t[1],n=Number(t[2]);let h;return h="+"===i?s+n:"-"===i?s-n:"*"===i?s*n:s/n,h})(h)}},a=new class{constructor(){this.gameBoard=e,this.castle=t,this.answerForm=document.querySelector(".answer-form"),this.answerInput=document.querySelector("#answer-input"),this.fieldWidth=e.width-t.width,this.enemies=[],this.gameState=0,this.update=this.update.bind(this),this.draw=this.draw.bind(this),this.spawnEnemy=this.spawnEnemy.bind(this),this.handleAnswerSubmit=this.handleAnswerSubmit.bind(this),this.spawnTimer=new class{constructor(e,t){this.duration=e,this.onFinish=t,this.elapsed=0}tick(e){this.elapsed+=e,this.elapsed>this.duration&&(this.onFinish(),this.reset())}reset(){this.elapsed=0}}(2e3,this.spawnEnemy)}start(){this.castle.setup(this),this.answerForm.addEventListener("submit",this.handleAnswerSubmit),this.gameState=1}update(e){1===this.gameState&&(this.spawnTimer.tick(e),this.enemies.forEach((t=>t.update(this,e))))}draw(){this.enemies.forEach((e=>e.draw()))}spawnEnemy(){const e=new class{constructor(e,t,s,i){this.elements={enemy:document.createElement("div"),question:document.createElement("div")},this.pos={x:e,y:t},this.width=50,this.height=50,this.speed=60,this.selected=!1,this.question=i,this.game=s,this.elements.enemy.classList.add("enemy"),this.elements.enemy.style.width=`${this.width}px`,this.elements.enemy.style.height=`${this.height}px`,this.elements.question.classList.add("enemy-question"),this.elements.question.textContent=this.question.text,this.elements.enemy.appendChild(this.elements.question),this.elements.enemy.addEventListener("click",(()=>{this.unSelect(),this.select()}))}select(){this.selected=!0,this.selected&&this.elements.enemy.classList.add("selected")}unSelect(){const e=this.game.enemies.find((e=>e.selected));void 0!==e&&(e.selected=!1,e.elements.enemy.classList.remove("selected"))}update(e,t){if(this.hasHitCastle(e))return this.delete(e),void e.castle.damage(1);this.pos.x+=this.speed*(t/1e3)}draw(){this.elements.enemy.style.transform=`translate(${this.pos.x}px, ${this.pos.y}px)`}delete(e){this.elements.enemy.remove(),e.deleteEnemy(this)}hasHitCastle(e){return this.pos.x>=e.fieldWidth-this.width}}(0,150,this,h("easy"));this.gameBoard.element.appendChild(e.elements.enemy),this.enemies.push(e)}deleteEnemy(e){this.enemies=this.enemies.filter((t=>t!==e))}gameOver(){this.gameState=2}handleAnswerSubmit(e){e.preventDefault();const t=this.enemies.find((e=>e.selected));if(!t)return;const s=t.question.answer.toString();this.answerInput.value===s&&t.delete(this)}};new class{constructor(e,t){this.running=!1,this.rafID=void 0,this.update=e,this.draw=t,this.accumulatedTime=0,this.currentTime=0,this.timeStep=1e3/60,this.cycle=this.cycle.bind(this)}cycle(e){this.rafID=requestAnimationFrame(this.cycle),this.accumulatedTime+=e-this.currentTime,this.currentTime=e;let t=!1;for(this.accumulatedTime>60&&(this.accumulatedTime=this.timeStep);this.accumulatedTime>=this.timeStep;)this.update(this.timeStep),t=!0,this.accumulatedTime-=this.timeStep;t&&this.draw()}start(){this.running=!0,this.rafID=requestAnimationFrame(this.cycle)}stop(){this.running=!1,cancelAnimationFrame(this.rafID)}}(a.update,a.draw).start(),a.start()})();
//# sourceMappingURL=main.bundle.js.map