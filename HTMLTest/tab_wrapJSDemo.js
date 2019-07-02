
/*// 选项卡 JSDemo
var tabHeader = document.querySelector('.tab_options');
var items = tabHeader.children;
var tabContent = document.querySelector('.tab_content');
var itemboxs = tabContent.children;
var index = 0;

tabHeader.addEventListener('click', function (e) {

    var a = [].slice.call(e.target.classList).indexOf('item');
    if (a > -1 && index != e.target.dataset.index) {
        items[index].classList.remove('active');
        itemboxs[index].classList.remove('active');
        index = e.target.dataset.index;
        items[index].classList.add('active');
        itemboxs[index].classList.add('active');
    }
}, false);
*/

!function (ROOT) {

    var index = Number (0);

    function Tab(elem) {

        this.tabHeader = elem.firstElementChild;
        this.items = this.tabHeader.children;
        this.tabContent = elem.lastElementChild;
        this.itemboxs = this.tabContent.children;
        this.max = this.items.length - 1;

        this.init();
    }

    Tab.prototype = {

        constructor: Tab,
        init: function () {
            this.tabHeader.addEventListener('click', this.clickHandler.bind(this), false);
        },
        clickHandler: function (e) {
            var a = [].slice.call(e.target.classList).indexOf('item');
            if (a > -1) {
                this.switchTo(e.target.dataset.index);
            }
        },
        switchTo: function (i) {
            console.log(i + "aaaa" + index);
            if (Number(i) == index) {
                return;
            }else {
                this.items[index].classList.remove('active');
                this.itemboxs[index].classList.remove('active');
                index = Number(i);
                this.items[index].classList.add('active');
                this.itemboxs[index].classList.add('active');
            }
        },
        next: function () {

            var tgIndex = Number (0);
            if (index >= this.max) {
                tgIndex = 0;
            } else {
                tgIndex = index + 1;
            }
            this.switchTo(tgIndex);
        },
        pre: function () {

            var tgIndex = Number (0);
            if (index == 0) {
                tgIndex = this.max;
            } else {
                tgIndex = index - 1;
            }
            this.switchTo(tgIndex);
        },
        getIndex: function () {
            return index;
        }
    }
    ROOT.Tab = Tab;
}(window);


var tab = new Tab(document.querySelector('#tab_wrap'));

document.querySelector('.next').addEventListener('click', function () {
    tab.next();
    console.log(tab.getIndex());
}, false);

document.querySelector('.prev').addEventListener('click', function () {
    tab.pre();
    console.log(tab.getIndex());
}, false);