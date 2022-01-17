const { Number } = require("../isOdd");

describe('tests for isOdd', () => {
    const a = 3;
    const b = 2;

    test('should return true', () => {
        expect(true).toBe(true);
    })

    test('should return false (number is not odd)', ()  => {
        expect(b.isOdd()).toBe(false);
    });

    test('should return true (number is odd)', ()  => {
        expect(a.isOdd()).toBe(true);
    });
})