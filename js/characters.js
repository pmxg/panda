// 熊猫与虫子
var Alp
	Alp=0
var bate=0
var dY=0
var mirror=0
var pandaCount
var panda=[]
// panda位置数组
var pandaX=new Array(110,150,350,390,590,630)
var pandaPosition=2
// 避免左右重复监听&&记录panda状态
var keyInterval=0
panda[0]=[]
panda[1]=[]
var pandaTimer
	pandaTimer=0
	pandaCount=0
for (var i = 0; i < 2; i++) {
	panda[0][i]=new Image()
	panda[0][i].src="./src/panda"+i+".png"
}
for (var i = 0; i < 2; i++) {
	panda[1][i]=new Image()
	panda[1][i].src="./src/panda1"+i+".png"
}
// 获取输入div
var inputEle=document.getElementById("input")
var nameEle=document.getElementById("inputName")
function drawChara(){
// panda动画轮播时间
	pandaTimer += this.deltTime
	if(pandaTimer>120){
		pandaCount=(pandaCount+1)%2
		pandaTimer%=120

	}

// UPKEY时动作
	if(GAMEOVER===false){
		//分数显示
		ftc.font="20px 微软雅黑"
		ftc.fillStyle="#FF7"
		ftc.fillText(Score,15,30)
		// 方向控制
		if(keyCode==38){
			dY-=deltTime*0.19
			if(dY<=-210){
				dY=-210
				ftc.drawImage(panda[mirror][1],0,0,59,101,pandaX[pandaPosition],210+dY,59,101)
			}else{
				ftc.drawImage(panda[mirror][pandaCount],0,0,59,101,pandaX[pandaPosition],210+dY,59,101)
			}
			
		}else if(keyCode==40){
			keyInterval=2
			dY+=deltTime*0.35
			if(dY>=190){
				dY=190
				ftc.drawImage(panda[mirror][1],0,0,59,101,pandaX[pandaPosition],210+dY,59,101)
			}else{
				ftc.drawImage(panda[mirror][0],0,0,59,101,pandaX[pandaPosition],210+dY,59,101)
			}
			
		}else if(keyCode==37&&keyInterval==0){

			keyInterval=1
			if(pandaPosition>0){
				pandaPosition--
			} 

			if(pandaPosition===1||pandaPosition===3||pandaPosition===5){
				mirror=1
			}else{
				mirror=0
			}
			
			ftc.drawImage(panda[mirror][1],0,0,59,101,pandaX[pandaPosition],210+dY,59,101)
			

		}else if(keyCode==39&&keyInterval==0){

			keyInterval=1
			if(pandaPosition<5){
				pandaPosition++
			} 
			if(pandaPosition===0||pandaPosition===2||pandaPosition===4){
				mirror=0
			}else{
				mirror=1
			}
			ftc.drawImage(panda[mirror][1],0,0,59,101,pandaX[pandaPosition],210+dY,59,101)
			
		}else{
			ftc.drawImage(panda[mirror][1],0,0,59,101,pandaX[pandaPosition],210+dY,59,101)
			
		}	
	}else{
		// 结束画面
		ftc.save()
		ftc.translate(pandaX[pandaPosition],210+dY)
		ftc.rotate(bate)
		if(bate>-Math.PI/2){
			bate-=deltTime*0.01
		}else{
			bate=-Math.PI/2
			if(dY<291){
				dY+=deltTime*0.8
			}else{
				dY=291
			}
		}
		ftc.translate(-pandaX[pandaPosition],-210-dY)
		ftc.drawImage(panda[mirror][1],0,0,59,101,pandaX[pandaPosition],210+dY,59,101)
		ftc.restore()
		ftc.save()
		ftc.globalAlpha=Alp
		if(Alp<=1){
			Alp+=deltTime*0.0004
			ftc.font="50px 微软雅黑"
			ftc.textAlign="center"
			ftc.shadowBlur=20
			ftc.shadowColor="#fff"
			ftc.fillStyle="#FF7"
			ftc.fillText("GAMEOVER",400,150)
			ftc.fillText("SCORE:"+Score,400,230)
			ftc.restore()
		}else{
			stop=true
			//显示分数
			show()
			//如果没输入名字出现输入框
			if(nameEle.value==""){
				inputEle.style.cssText="display:block"
			}else{
				addRankName()
			}
		}
	}
}
// 获取按键
function show(){
	ftc.save()
	ftc.font="50px 微软雅黑"
	ftc.textAlign="center"
	ftc.shadowBlur=20
	ftc.shadowColor="#fff"
	ftc.fillStyle="#FF7"
	ftc.fillText("GAMEOVER",400,150)
	ftc.fillText("SCORE:"+Score,400,230)
	ftc.restore()
}