const fizzBuzz = require('./fizzBuzz')

test('input 1', () => {
    expect(fizzBuzz(1)).toBe(1);
})

test('input 2', () => {
    expect(fizzBuzz(2)).toBe(2);
})

test('input 3', () => {
    expect(fizzBuzz(3)).toBe("Fizz");
})

test('input 4', () => {
    expect(fizzBuzz(4)).toBe(4);
})

test('input 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
})

test('input 6', () => {
    expect(fizzBuzz(6)).toBe("Fizz");
})

test('input 7', () => {
    expect(fizzBuzz(7)).toBe(7);
})

test('input 8', () => {
    expect(fizzBuzz(8)).toBe(8);
})

test('input 9', () => {
    expect(fizzBuzz(9)).toBe("Fizz");
})

test('input 10', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
})

test('input 11', () => {
    expect(fizzBuzz(11)).toBe(11);
})

test('input 12', () => {
    expect(fizzBuzz(12)).toBe("Fizz");
})

test('input 13', () => {
    expect(fizzBuzz(13)).toBe(13);
})

test('input 14', () => {
    expect(fizzBuzz(14)).toBe(14);
})

test('input 15', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
})

test('input 16', () => {
    expect(fizzBuzz(16)).toBe(16);
})

test('input 17', () => {
    expect(fizzBuzz(17)).toBe(17);
})

test('input 18', () => {
    expect(fizzBuzz(18)).toBe("Fizz");
})

test('input 19', () => {
    expect(fizzBuzz(19)).toBe(19);
})

test('input 20', () => {
    expect(fizzBuzz(20)).toBe("Buzz");
})

test('input 25', () => {
    expect(fizzBuzz(25)).toBe("Buzz");
})

test('input 30', () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
})

test('input 33', () => {
    expect(fizzBuzz(33)).toBe("Fizz");
})

test('input 35', () => {
    expect(fizzBuzz(35)).toBe("Buzz");
})

test('input 53', () => {
    expect(fizzBuzz(53)).toBe(53);
})

test('input 63', () => {
    expect(fizzBuzz(63)).toBe("Fizz");
})

test('input 75', () => {
    expect(fizzBuzz(75)).toBe("FizzBuzz");
})

test('input 93', () => {
    expect(fizzBuzz(93)).toBe("Fizz");
})

test('input 100', () => {
    expect(fizzBuzz(100)).toBe("Buzz");
})

