const { getDays } = require('../getDays');

describe('Tests for getDays', () => {
    test('should return true', () => {
        expect(true).toBe(true);
    })

    test.each([
        [2021, 4, 30],
        [2020, 2, 29],
        [2021, 2, 28],
        [2021, 'February', 28],
        [2021, 'October', 31],
        [2021, [10], false],
    ])('should return result', function (arg1, arg2, result) {
        expect(getDays(arg1, arg2)).toBe(result);
    });
})