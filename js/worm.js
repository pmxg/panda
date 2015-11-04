// worm class
// worm speed
var WormSpeed
var wormPic=[]
	wormPic[0]=[]
	wormPic[1]=[]
var wormBornTimer
	wormBornTimer=0
	wormBornCount=0
// worm位置数组
var bambooX=new Array(120,180,360,420,600,660)
for (var i = 0; i < 2; i++) {
	wormPic[0][i]=new Image()
	wormPic[0][i].src="./src/worm"+i+".png"
}
for (var i = 0; i < 2; i++) {
	wormPic[1][i]=new Image()
	wormPic[1][i].src="./src/worm1"+i+".png"
}
var wormObj=function(){
	this.alive=[]
	this.X=[]
	this.Y=[]
	this.wormMirror=[]
	this.eat=[]
}
wormObj.prototype.num=20

wormObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false
		this.X[i]=bambooX[Math.floor(Math.random()*3)]
		this.Y[i]=500
		this.wormMirror[i]=0
		this.eat[i]=0
	}	
}
wormObj.prototype.draw=function(){
	
	for(var i=0;i<this.num;i++){
		if(this.alive[i]){
			ftc.drawImage(wormPic[this.wormMirror[i]][pandaCount],this.X[i],this.Y[i])	
			if(this.eat[i]===0){
				this.Y[i]-=deltTime*WormSpeed
			}else {
				this.Y[i]+=deltTime*1
			}
			
			if(this.Y[i]<-50||this.Y[i]>550){
				this.alive[i]=false
			}
		}
	}
}

wormObj.prototype.born=function(i){
	this.eat[i]=0
	this.alive[i]=true
	this.wormMirror[i]=0
	this.X[i]=bambooX[Math.floor(Math.random()*6)]
	if(this.X[i]===180||this.X[i]===420||this.X[i]===660){
		// 如果右侧使用翻转图片
		this.X[i]-=7
		this.wormMirror[i]=1
	}
	this.Y[i]=500

}

wormObj.prototype.update=function(){

	wormBornTimer+=deltTime
	if(wormBornTimer>=500){
		wormBornTimer%=500
		for (var i = 0; i < this.num; i++) {
			if(!this.alive[i]){
				this.born(i)
				return
				
			}
		}
	
	}
	
}