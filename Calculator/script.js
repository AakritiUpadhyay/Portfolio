var op1,op2,operator, i;

var input=document.getElementById("input");
var inputText=Number(input.textContent);

var ac=document.getElementById("ac");
ac.addEventListener('click',()=>{
    input.innerHTML="0";
    inputText=0;
})

var sign=document.getElementById("sign");
sign.addEventListener('click',()=>{
    inputText=inputText-(2*inputText);
    input.innerHTML=inputText;
})

var per=document.getElementById("per");
per.addEventListener('click',()=>{
    inputText=inputText/100;
    input.innerHTML=inputText;
})

var num=document.querySelectorAll(".num");
num[0].addEventListener('click',()=>{number(0)});
num[1].addEventListener('click',()=>{number(1)});
num[2].addEventListener('click',()=>{number(2)});
num[3].addEventListener('click',()=>{number(3)});
num[4].addEventListener('click',()=>{number(4)});
num[5].addEventListener('click',()=>{number(5)});
num[6].addEventListener('click',()=>{number(6)});
num[7].addEventListener('click',()=>{number(7)});
num[8].addEventListener('click',()=>{number(8)});
num[9].addEventListener('click',()=>{number(9)});
num[10].addEventListener('click',()=>{number(10)});

function number(i){
    if(input.innerHTML==0) input.innerHTML=num[i].innerHTML;
    else input.innerHTML+=num[i].innerHTML;
    inputText+=num[i].innerHTML;
}

var add=document.getElementById("add");
add.addEventListener('click',()=>{
    op1=Number(inputText);
    inputText=0;
    input.innerHTML="0";
    operator=0;
})

var sub=document.getElementById("sub");
sub.addEventListener('click',()=>{
    op1=Number(inputText);
    inputText=0;
    input.innerHTML="0";
    operator=1;
})

var mul=document.getElementById("mul");
mul.addEventListener('click',()=>{
    op1=Number(inputText);
    inputText=0;
    input.innerHTML="0";
    operator=2;
})

var div=document.getElementById("div");
div.addEventListener('click',()=>{
    op1=Number(inputText);
    inputText=0;
    input.innerHTML="0";
    operator=3;
})

var result=document.getElementById("result");
result.addEventListener('click',()=>{
    op2=Number(inputText);
    switch(operator){
        case 0: inputText=op1+op2;
                input.innerHTML=inputText;
                break;
        case 1: inputText=op1-op2;
                input.innerHTML=inputText;
                break;
        case 2: inputText=op1*op2;
                input.innerHTML=inputText;
                break;
        case 3: inputText=op1/op2;
                input.innerHTML=inputText;
                break;
    }
})