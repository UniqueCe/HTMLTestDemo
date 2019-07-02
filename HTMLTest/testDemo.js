/* js代码 */

function wwww() {

    alert("class = test")
}

function onlickTestaa(id) {

    id.innerHTML = "✨✨惊喜不✨✨";
}

function myFunction() {

    var x=document.getElementById("demo").value;
    if(x==""||isNaN(x)) {

        alert("非数字");
    }
}

function addNum() {

    var y = parseInt(document.getElementById("addid1").value);

    if (y == "" || isNaN(y)) {
        alert("请输入数字");
        return;
    }

    var x = parseInt(document.getElementById("addid2").value);

    var temp = y + x;

    tempNum = document.getElementById("addnum");
    tempNum.style.color = "red";
    tempNum.style.fontSize = "15px";
    tempNum.innerHTML = "结果为:" + temp;
}

function arrayTemp() {

    arry = ["asdw", "123csdf", "acs21"];
    dict = {"qqq":"111", "222":"aaaaa"}
    alert("array =(" + arry + ")," + "dict =(" + dict["qqq"] + "," + dict["222"] + ")")

}

function nowTime(id) {
    id.innerHTML = (new Date()).toLocaleString();
}

/*
/// 构造函数
var Person = function (name, age) {

    // this.name = name;
    this.age = age;

    this.getName = function () {

        return this.name + "这是私有方法";
    }
}

Person.prototype.getName = function () {
    return this.name;
}

Person.prototype.getAge = function () {
    return this.age;
}

var per1 = new Person("aaa", "12");
var per12 = new Person("awqe", "1233");
var per1233 = new Person("awqe", 1233);

console.log(per1.getName());
console.log(per12.getAge());
console.log(typeof(per1233.getAge()), per1233.getAge());





/// 继承
var Studet = function (name, age, grade) {

    Person.call(this, name, age);
    this.grade = grade;
}

var s1 = new Studet("姓名", "年龄", "grade")
console.log(s1.getName())


var peraaaa = {
    name: "Tom"
}

// delete  peraaaa.name
console.log(delete  peraaaa.name)
console.log(peraaaa.name)



// Promise
function fn() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(20);
        }, 5000);
    })
}

// 同步
var foo = async function () {
    var t = await fn();
    console.log(t);
    console.log('next code');
}

foo();
*/


class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
}

class Student extends Person {

    constructor(name, age, gender, classes) {

        super(name, age);
        this.gender = gender;
        this.classes = classes;
    }

    getGender() {
        return this.gender;
    }
}

const a1122 = new Student('Tom', 12, 1, 33);

console.log(a1122.getName() + '---' + a1122.getGender());