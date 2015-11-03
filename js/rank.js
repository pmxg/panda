var Rank=document.getElementById("rank")
var Con=document.getElementById("con")
var lastScore=document.getElementById("lastScore")
var Con2=document.getElementById("con2")
function addRank(){
	ajaxGet()
	Con2.style.display="none"
	Con.style.display="block"
}
function goBack(){
	Con.style.display="none"
	Con2.style.display="none"
}
function showScore(){
	Con.style.display="none"
	Con2.style.display="block"
	lastScore.innerHTML=Score+"</br>"

}