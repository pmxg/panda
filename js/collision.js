// collision detection
var realPandaY
var realPandaX
var GAMEOVER=false
var Score
	Score=0
var top10=[]
for (var i = 0; i < 10; i++) {
	top10[i]=["匿名大侠",0]
}
function collision(){
	realPandaY=210+dY
	realPandaX=pandaX[pandaPosition]	
	for(i=0;i<worm.num;i++){
		
		if(worm.alive[i]===true&&worm.X[i]===realPandaX+10||worm.X[i]===realPandaX+23){
			if(worm.Y[i]-realPandaY<101&&worm.Y[i]-realPandaY>-55){
				if(keyInterval===2){
					worm.X[i]-=10
					worm.eat[i]=1
					Score+=5
					if (Score==200) {WormSpeed=0.15};
					if (Score==500) {WormSpeed=0.2};
				}else if(keyInterval!==2){
					GAMEOVER=true
				}
			}
		}
	}
}