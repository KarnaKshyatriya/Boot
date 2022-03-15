var First = /** @class */ (function () {
    function First() {
        this.result = function (height) {
            var rows = height;
            var s = "";
            for (var i = 0; i <= rows - 1; i++) {
                var j = 0;
                while (j <= i) {
                    s += '*';
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
    return First;
}());
var obj2 = new First();
console.log(obj2.result(5));
