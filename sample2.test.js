```javascript
describe('add', () => {
  it('adds two numbers together', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 1)).toBe(0);
    expect(add(-1, -1)).toBe(-2);
  });
});

describe('reverseString', () => {
  it('reverses a string correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('Python')).toBe('nohtyP');
  });

  it('handles empty strings', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('factorial', () => {
  test('calculates factorial correctly for positive numbers', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(5)).toBe(120);
  });

  it('returns undefined for negative numbers', () => {
    expect(factorial(-1)).toBeUndefined();
  });
});

describe('isPalindrome', () => {
  test('correctly identifies palindromes', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    expect(isPalindrome('Not a palindrome')).toBe(false);
  });

  it('ignores non-alphanumeric characters', () => {
    expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
  });
});

describe('celsiusToFahrenheit', () => {
  test('converts Celsius to Fahrenheit correctly', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
  });

  it('handles negative temperatures', () => {
    expect(celsiusToFahrenheit(-20)).toBe(((-20) * 9) / 5 + 32);
  });
});
```