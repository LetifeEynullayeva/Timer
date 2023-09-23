var saat=document.querySelector('.saat')
var deqiqe=document.querySelector('.deqiqe')
var saniye=document.querySelector('.saniye')
var start=document.querySelector('.start')
var dayan=document.querySelector('.stop')
var reset=document.querySelector('.reset')
var st=0;
var dq=0;
var sn=0;
var interval;
function startTimer(){
    sn++;
    if(sn==100){
        dq++
        sn=0
    }
    if(dq==60){
        st++
        dq=0
    }

    var formattedSaniye = sn.toString().padStart(2, '0');
    var formattedDakika = dq.toString().padStart(2, '0');
    var formattedSaat = st.toString().padStart(2, '0');

    saniye.innerText = formattedSaniye;
    deqiqe.innerText = formattedDakika;
    saat.innerText = formattedSaat;
   
}
start.onclick=function(){
interval=setInterval(startTimer,10);
    
};

dayan.onclick=function(){
    clearInterval(interval)
   
}



reset.onclick=function(){
    clearInterval(interval)
     st='00';
     dq='00';
     sn='00';
    saniye.innerHTML=sn;
    deqiqe.innerHTML=dq;
    saat.innerHTML=st;
}


