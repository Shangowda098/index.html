function love(){
    var name1 = document.getElementById ("name1").value;
    var name2 = document.getElementById("name2").value;
    var res = Math.floor(Math.random()*100);
    var par = document.getElementById("par");
    par.innerHTML=
    "THE love b/w"+name1+" "+name2+" "+res +"%";
}
if(res>=80){
    par.innerHTML="Marriage is fixed";
}else if(res>=60){
    par.innerHTML="Good piar";
}else if(res>=40){
    par.innerHTML="50-50";
}else if(res>=20){
    par.innerHTML="Try again";
}else{
    par.innerHTML="Dont even try--forget that";
}