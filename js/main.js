var ft
var ftc
var bg
var bgc
var bgimg=new Image()
var bamboo=new Image()
var now
var lastTime
var deltTime
var worm
var keyCode
var GL
var stop
var recordTime
// 初始背景
bgimg.src="src/bgimg.jpg"
bamboo.src="src/bamboo.png"
ft=document.getElementById("main")
ftc=ft.getContext("2d")
// 初始场景
bg=document.getElementById("bg")
bgc=bg.getContext("2d")
if(document.body.clientHeight<571){
	document.body.style.zoom=(document.body.clientHeight/571);
}
// console.log(document.body.clientHeight);
// console.log("z="+document.body.style.zoom);
// 主程序
window.onload=function(){
	
	varReset()
}
// 游戏循环

function gameLoop(){
	
	ftc.clearRect(0,0,800,500)
	worm.draw()
	worm.update()
	drawChara()
	// 获取deltTime
	now=Date.now()
	deltTime=now-lastTime
	lastTime=now
	collision()
	if(!stop){
		window.requestAnimationFrame(gameLoop)	
	}

}
// 键盘事件
function keyClicked(e){

	e=window.event||e
	keyCode=e.keyCode||e.which
	// 空格开始游戏
	if(keyCode==32&&stop){
		
		//执行初始化，以便重新开始
		varReset()
		stop=false
		gameLoop()
	}

}
function clearKey(){

	keyCode=undefined
	keyInterval=0

}
function getKey(){

	document.addEventListener("keydown",keyClicked,false)
	document.addEventListener("keyup",clearKey,false)

}
//初始化
function varReset(){
	WormSpeed=0.1
	GAMEOVER=false
	pandaPosition=2
	mirror=0
	Alp=0
	bate=0
	dY=0
	Score=0
	stop=true
	ftc.save()
	ftc.font="45px 微软雅黑"
	ftc.fillStyle="#FF7"
	ftc.textAlign="center"
	ftc.shadowBlur=20
	ftc.shadowColor="#fff"
	ftc.fillText("按空格开始",400,150)
	ftc.fillText("Press Space to Start",400,230)
	ftc.restore()
	drawBg()
	worm=new wormObj()
	worm.init()
	lastTime=Date.now()
	deltTime=0
	getKey()
}
// 确认按钮事件
function addRankName(){
	// 记录产生时间
	recordTime=new Date()
	inputEle.style.cssText="z-index:-10"
	// top10[9][0]=nameEle.value
	// top10[9][1]=Score
	ajaxPost()
	// function sortNum(a,b){
	// 		return b[1]-a[1]
	// 	}
	// top10.sort(sortNum)
}