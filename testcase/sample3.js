function add(a, b) {
    return a + b;
  }


  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  function factorial(n) {
    if (n < 0) return undefined;
    return n === 0 ? 1 : n * factorial(n - 1);
  }

  function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }