var memoize = function(f) {
    var cache = {};

    return function() {
        var arg_str = JSON.stringify(arguments);
        cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
        return cache[arg_str];
    }
}

var squareNumber = memoize(function(x) { return x * x; });
var pureHttpCall = memoize(function(url, params) {
    return function () {
        return JSON.parse(url, params);
    }
})

console.log(squareNumber(4));