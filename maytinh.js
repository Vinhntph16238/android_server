var exports = module.exports = {};
exports.phepcong = function (a, b) {
    return a + b;
};
exports.pheptru = function (a, b) {
    return a - b;
};
exports.phepnhan = function (a, b) {
    return a * b;
};
exports.phepchia = function (a, b) {
    if (b == 0) {
        return NaN;
    }
    return a / b;
};