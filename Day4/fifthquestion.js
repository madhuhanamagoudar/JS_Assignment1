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
    total_commission=sales*(5/100)
}
else if(sales>10000 && sales<20000)
{
    total_commission=sales*(7/100)
}
else 
{
    total_commission=sales*(10/100)
}
console.log("Total Commission="+total_commission);