var url
var res=[]
var respro
function ajaxPost(){
	if(Score>5){
		var xhr=new XMLHttpRequest()
		// 格式化时间
		// var rTime=recordTime.toUTCString()
		var rTime=recordTime.getFullYear()+"-"+(recordTime.getMonth()+1)+"-"+recordTime.getDate()+" "+recordTime.getHours()+":"+recordTime.getMinutes()+":"+recordTime.getSeconds()
		url="service.php"
		xhr.open("post","service.php")
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		var info="name="+nameEle.value+"&score="+Score+"&time="+rTime
		xhr.send(info)
	}
}
function ajaxGet(){
	var xhr=new XMLHttpRequest()
	// // 格式化时间
	// var rTime=recordTime.toUTCString()
	var info="?name="+nameEle.value
	url="service.php"+info
	xhr.open("get",url)
	xhr.send()
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4){
			if (xhr.status===200) {
				respro=xhr.responseText
				res=respro.split("/")
				for (var i = 0; i < top10.length; i++) {
					top10[i]=res[i]
					Rank.childNodes.item(i).innerHTML=top10[i]+"</br>"
				}
			}
		}
	}
}

