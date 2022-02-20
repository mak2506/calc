var num1;
var num2;
var sign="";

function runCalc(op)
{
    //console.log(op);
    switch(op)
    {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0: 
        case '.': document.getElementById("display").innerText += op;
                 break;
        case 'C':   document.getElementById("display").innerHTML = "&nbsp;";
                    num1=0;
                    num2=0;
                    sign="";
                    break;
        case '+':   num2=document.getElementById("display").innerText;
                    if(sign=="")
                    {
                        num1=parseInt(num2);
                        sign='+';
                    }
                    else{
                        num2=parseInt(num2);
                        num1=num1+num2;
                    }                
                    document.getElementById("display").innerHTML = "&nbsp;";
                    break;
        case '-':   num2=document.getElementById("display").innerText;
                    if(sign=="")
                    {
                        num1=parseInt(num2);
                        sign='-';
                    }
                    else{
                        num2=parseInt(num2);
                        num1=num1-num2;
                    }                
                    document.getElementById("display").innerHTML = "&nbsp;";
                    break;
        case 'X':   num2=document.getElementById("display").innerText;
                    if(sign=="")
                    {
                        num1=parseInt(num2);
                        sign='*';
                    }
                    else{
                        num2=parseInt(num2);
                        if(num1==0)
                        {
                            num1=1;
                        }
                        num1=num1*num2;
                    }                
                    document.getElementById("display").innerHTML = "&nbsp;";
                    break;
        case '/':   num2=document.getElementById("display").innerText;
                    if(sign=="")
                    {
                        num1=parseInt(num2);
                        sign='/';
                    }
                    else{
                        num2=parseInt(num2);
                        if(num1==0)
                        {
                            num1=1;
                        }
                        num1=num1/num2;
                    }                
                    document.getElementById("display").innerHTML = "&nbsp;";
                    break;
        case '=':   num2=parseInt(document.getElementById("display").innerText);
                    if(sign!="")
                    {
                        switch(sign)
                        {
                            case '+': num1=num1+num2;
                                break;
                            case '-': num1=num1-num2;
                                break;
                            case '*': num1=num1*num2;
                                break;
                            case '/': num1=num1/num2;
                                break;
                        }
                        sign="";
                    }               
                    document.getElementById("display").innerText=num1;
                    break;
    }
}


