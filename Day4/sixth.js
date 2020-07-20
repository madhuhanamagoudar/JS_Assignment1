
sales=prompt("Enter the sales made by Employee");
sales=parseInt(sales);
var total_commission;
sales<=5000 ? total_commission=sales*(2/100):sales>5000 && sales<10000 ? total_commission=sales*(5/100):sales>10000 && sales<20000 ? total_commission=sales*(7/100):total_commission=sales*(10/100)
console.log("Total_commission="+total_commission);
function number_greater_than_100(n)
{
    if(n<=100)
    {
        while(n<=100)
        {
         n=prompt("Enter a number greater than 100")
        }
    
    }
}
number=prompt("Enter a number")
number_greater_than_100(number)
console.log("Welcome User!!");
