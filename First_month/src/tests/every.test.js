const { every, num } = require('../every');

describe('tests for func every', () => {
    test('should return true', () => {
        expect(true).toBe(true);
    })

    test.each([
        [[10, 2, 20], num, true],
        [[2, 6, 7], num, false],
    ])('every', function (arr, func, result) {
        expect(every(arr, func)).toBe(result);
    });
})