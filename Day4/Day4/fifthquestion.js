console.log("Hello")
var total_commission;
sales=prompt("Enter the sales made by employee");
sales=parseInt(sales)
if (sales<=5000)
{
    total_commission=sales*(2/100)
}
else if(sales>5000 && sales<=10000)
{
    total_commission=5000*(2/100)+(sales-5000)*(5/100)
}
else if(sales>10000 && sales<20000)
{
    total_commission=5000*(2/100)+10000*(5/100)+(sales-10000)*(7/100)
}
else 
{
    total_commission=5000*(2/100)+10000*(5/100)*20000*(7/100)+(sales-20000)*(10/100)
}
console.log("Total Commission="+total_commission);