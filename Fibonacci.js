function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2)
  }
function InitFibonacci()
{
    var resp = fibonacci(10);
    document.getElementById("resp").innerHTML = resp;
}
