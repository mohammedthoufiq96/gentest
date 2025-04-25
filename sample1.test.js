```javascript
describe('add', () => {
  it('returns the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  it('returns undefined for negative number', () => {
    expect(factorial(-1)).toBeUndefined();
  });
});

describe('reverseString', () => {
  it('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('World')).toBe('dlroW');
  });

  it('handles empty strings', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('factorial', () => {
  it('calculates factorial correctly for positive numbers', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(5)).toBe(120);
  });

  it('returns undefined for negative numbers', () => {
    expect(factorial(-1)).toBeUndefined();
  });
});

describe('isPalindrome', () => {
  it('checks if a string is palindrome', () => {
    expect(isPalindrome('Madam')).toBe(true);
    expect(isPalindrome('hello')).toBe(false);
  });

  it('ignores non-alphanumeric characters and case', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
  });
});

describe('celsiusToFahrenheit', () => {
  it('converts celsius to fahrenheit correctly', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
    expect(celsiusToFahrenheit(-40)).toBe(-40);
  });
});
```