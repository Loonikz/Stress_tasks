// 2) Через прототип расширьте встроенный объект Number методом isOdd(), который
// возвращает true, если число нечетное.

Number.prototype.isOdd = function() {
    return this.valueOf() % 2 !== 0;
}

module.exports = { Number };