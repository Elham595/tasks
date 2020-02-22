//declarations
var money=document.getElementById("input1"),
    service=document.getElementById("selection"),
    noofpeople=document.getElementById("input2"),
    Btn=document.getElementById("btn"),
    total=document.getElementById("amount");
//onclick
Btn.onclick=function()
{
    if(money.value=="")   
        money.placeholder="please fill in the field";
    else if(noofpeople.value=="")  
         noofpeople.placeholder="please fill in the field";
    else (service.value=="")   
         service.placeholder="please fill in the field";
           
    total.innerHTML=((money.value)*(service.value)/(100*(noofpeople.value))).toFixed(2);
};