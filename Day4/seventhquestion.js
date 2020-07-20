n=prompt("Enter a number");
for(i=2; i<=n; i++)
{
    isPrime = true;  //Assuming that i is prime
for(j=2; j<i; j++)
{
    if(i%j == 0)
    {
        isPrime = false;
        break;
    }
}
if(isPrime)
{
    console.log(i); //Will be executed if number is prime
}
}
