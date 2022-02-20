var header= document.querySelector("h1");

function RandomColor(){
    var l="0123456789ABCDEF";
    var color="#"
    for(var i=0;i<6;i++){
        color += l[Math.floor(Math.random()*16)];
    }
    return color
}
function chc(){
    ci=RandomColor()
    header.style.color=ci;
}
setInterval("chc()",500);