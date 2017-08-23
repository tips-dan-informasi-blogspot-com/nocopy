var a=0;
var message="MOHON MAAF ATAS KETIDAK NYAMANAN ANDA.!!";
function klik_kanan()//hak cipta : www.tips-berbagiinfo.blogspot.com//
{//hak cipta : www.tips-berbagiinfo.blogspot.com//
evil_klik();//hak cipta : www.tips-berbagiinfo.blogspot.com//
alert(message);//hak cipta : www.tips-berbagiinfo.blogspot.com//
a=a+1;
}//hak cipta : www.tips-berbagiinfo.blogspot.com//
function evil_klik()
{//hak cipta : www.tips-berbagiinfo.blogspot.com//
if(a>0)
{//hak cipta : www.tips-berbagiinfo.blogspot.com//
alert("ANDA MENCOBA MENGCOPY, ANDA HARUS REFRESH BROWSER ANDA");
evil_klik();
}}//hak cipta : www.tips-berbagiinfo.blogspot.com//
function clickIE4(){
if (event.button==2){
klik_kanan();//hak cipta : www.tips-berbagiinfo.blogspot.com//
return false;
}}//hak cipta : www.tips-berbagiinfo.blogspot.com//
function clickNS4(e){
if (document.layers||document.getElementById&&!document.all){
if (e.which==2||e.which==3){//hak cipta : www.tips-berbagiinfo.blogspot.com//
klik_kanan();
return false;//hak cipta : www.tips-berbagiinfo.blogspot.com//
}}}//hak cipta : www.tips-berbagiinfo.blogspot.com//
if (document.layers){
document.captureEvents(Event.MOUSEDOWN);
document.onmousedown=clickNS4;
}//hak cipta : www.tips-berbagiinfo.blogspot.com//
else if (document.all&&!document.getElementById){//hak cipta : www.tips-berbagiinfo.blogspot.com//
document.onmousedown=clickIE4;//hak cipta : www.tips-berbagiinfo.blogspot.com//
}document.oncontextmenu=new Function("klik_kanan();return false")//hak cipta : www.tips-berbagiinfo.blogspot.com//
