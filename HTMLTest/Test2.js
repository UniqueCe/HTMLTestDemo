
/* 随机色 ⤵️ */
var module_statue = (function () {

    var status = {
        number: 0,
        color: null
    }

    var get = function (prop) {
        return status[prop]
    }

    var set = function (prop, value) {
        status[prop] = value
    }

    return {
        get: get,
        set: set
    }

})();

var module_color = (function () {

    var state = module_statue;
    var colors = ['orange', '#ccc', 'pink']

    function render() {
        var color = colors[state.get('number') % 3];
        console.log(color)
        document.body.style.backgroundColor = color
    }

    return {
        render: render
    }

})();

var module_context = (function () {

    var state = module_statue;

    function redner() {
        // document.body.innerHTML = 'this number is ' + state.get('number');
    }

    return {
        redner: redner
    }
})();

var module_main = (function () {

    var state = module_statue;
    var color = module_color;
    var context = module_context;

    setInterval(function () {

        var newNumber = state.get('number') + 1;
        state.set('number', newNumber)

        color.render()
        context.redner()

    }, 1000);

})();


var a = 20;
function foo() {
    var a = 1;
    var obj = {
        a: 10,
        c: this.a + 20
    }
    return obj.c;
}

console.log(window.foo());
console.log(foo());

/* 随机色 ⬆️ */


var arr= [1,2,3,4,5]
arr.map(function (item) {
    return item + 1
})
arr.forEach(function (item) {
    console.log(item)
})
