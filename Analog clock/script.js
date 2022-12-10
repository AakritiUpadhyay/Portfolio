var hourHand=document.getElementById("hourHand");
var minuteHand=document.getElementById("minuteHand");
var secondHand=document.getElementById("secondHand");
var day=document.getElementById("day");
setInterval(() => {
    var d =new Date();
    var hour=d.getHours();
    var minute=d.getMinutes();
    var second=d.getSeconds();
    var da=d.getDay();

    var hourDeg=(30*hour)+(0.5*minute);
    hourHand.style.transform= `rotate(${hourDeg}deg)`;
    var minuteDeg=6*minute;
    minuteHand.style.transform= `rotate(${minuteDeg}deg)`;
    var secondDeg=6*second;
    secondHand.style.transform= `rotate(${secondDeg}deg)`;

    switch(da){
        case 0: day.innerHTML="Sunday"; break;
        case 1: day.innerHTML="Monday"; break;
        case 2: day.innerHTML="Tueday"; break;
        case 3: day.innerHTML="Wedday"; break;
        case 4: day.innerHTML="Thursday"; break;
        case 5: day.innerHTML="Friday"; break;
        case 6: day.innerHTML="Saturday"; break;
    }

}, 1000);
var textHour=document.getElementById("textHour");
var textMinute=document.getElementById("textMinute");
var textSecond=document.getElementById("textSecond");
var ampm=document.getElementById("ampm");

var zero=setInterval(() => {
    var d =new Date();
    var hour=d.getHours();
    var minute=d.getMinutes();
    var second=d.getSeconds();
    if (hour>12) textHour.innerHTML=parseInt(hour-12);
    else textHour.innerHTML=hour;
    textMinute.innerHTML=minute;
    textSecond.innerHTML=second;
    if(hour>=12) ampm.innerHTML="PM"
    else ampm.innerHTML="AM"
}, 1000);

var twelve=document.getElementById("twelve");
var twentyFour=document.getElementById("twentyFour");

twelve.addEventListener("click",()=>{
    clearInterval(zero);
    twelve.classList.add("active");
    twentyFour.classList.remove("active");
    var one=setInterval(() => {
        var d =new Date();
        var hour=d.getHours();
        var minute=d.getMinutes();
        var second=d.getSeconds();
        if (hour>12) textHour.innerHTML=parseInt(hour-12);
        else textHour.innerHTML=hour;
        textMinute.innerHTML=minute;
        textSecond.innerHTML=second;
        if(hour>=12) ampm.innerHTML="PM"
        else ampm.innerHTML="AM"  
    }, 1000);   
});
twentyFour.addEventListener("click",()=>{
    clearInterval(zero);
    twentyFour.classList.add("active");
    twelve.classList.remove("active");
    var two=setInterval(() => {
        var d =new Date();
        var hour=d.getHours();
        var minute=d.getMinutes();
        var second=d.getSeconds();
        textHour.innerHTML=hour;
        textMinute.innerHTML=minute;
        textSecond.innerHTML=second;
        ampm.innerHTML="" 
    }, 1000);
});