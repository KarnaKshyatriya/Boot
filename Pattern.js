var Pattern = /** @class */ (function () {
    function Pattern() {
        this.result = function (height) {
            var rows = height;
            var s = "";
            for (var i = 0; i <= rows - 1; i++) {
                var j = 0;
                while (j <= i) {
                    s += '* ';
                    j++;
                }
                s += '\n';
            }
            for (i = rows - 1; i >= 0; i--) {
                for (j = 0; j <= i - 1; j++) {
                    s += '* ';
                }
                s += '\n';
            }
            return s;
        };
    }
    return Pattern;
}());
var pattern_obj = new Pattern();
console.log(pattern_obj.result(5));
