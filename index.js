"use strict";
exports.__esModule = true;
exports.generatePassword = void 0;
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function generatePassword(passwordLength) {
    if (passwordLength === void 0) { passwordLength = 12; }
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password;
}
exports.generatePassword = generatePassword;
