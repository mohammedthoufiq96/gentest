```javascript
describe('add', () => {
  it('should return the sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(-1, 0)).toBe(1);
    expect(add(0, 0)).toBe(0);
  });

  it('should throw an error for non-numeric input', () => {
    expect(() => add('a', 'b')).toThrowError(TypeError);
  });
});

describe('reverseString', () => {
  it('should reverse a string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should handle empty strings', () => {
    expect(reverseString('')).toBe('');
  });
});

describe('factorial', () => {
  it('should return the factorial of a non-negative number', () => {
    expect(factorial(5)).toBe(120);
  });

  it('should throw an error for negative numbers', () => {
    expect(() => factorial(-1)).toThrowError(RangeError);
  });
});

describe('isPalindrome', () => {
  it('should return true for palindromes', () => {
    expect(isPalindrome('radar')).toBe(true);
    expect(isPalindrome('level')).toBe(true);
  });

  it('should return false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
    expect(isPalindrome('python')).toBe(false);
  });
});

describe('celsiusToFahrenheit', () => {
  it('should convert celsius to fahrenheit correctly', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
  });

  it('should handle extreme temperatures', () => {
    expect(celsiusToFahrenheit(-273.15)).toBeCloseTo(32);
    expect(celsiusToFahrenheit(1000000)).toBeCloseTo(2120000);
  });
});
```