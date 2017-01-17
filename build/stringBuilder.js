"use strict";
var stringProcessor = (function () {
    function stringProcessor(input) {
        this.data = input;
    }
    stringProcessor.prototype.getString = function () {
        return this.data;
    };
    stringProcessor.prototype.setString = function (data) {
        this.data = data;
    };
    stringProcessor.prototype.reverse = function () {
        var chars = this.data.split('');
        for (var i = 0; i < chars.length / 2; i++) {
            var swap = chars[i];
            chars[i] = chars[chars.length - 1 - i];
            chars[chars.length - 1 - i] = swap;
        }
        this.data = chars.join('');
    };
    return stringProcessor;
}());
console.log("test");
var kirpich = new stringProcessor("test");
console.log(kirpich.getString());
//# sourceMappingURL=stringBuilder.js.map