# JQuery Load Later Plugin

jQuery plugin for partial loading non essential DOM elements.

### Basic usage

Place in html code following div element

    <div class="load-later" data-url="/partials/footer.html"></div>

Initialize plugin with

    $('.load-later').loadLater();

Content of footer.html will be placed inside div


### Available options

Just a example

    {
        url: '/partials/footer.html',
        selector: 'div:first',
        timer: 5000
    }

### Timer option

Timer option allows you to decide after how many milliseconds content will be loaded.

    $('.load-later').loadLater({
        timer: 5000
    });

or

    <div class="load-later" data-url="SOME URL HERE" data-timer="5000"></div>

Remember that timer that was set as data attribute has higher priority than one provided with json option.
    This can be convinient when you want to set global timer to e.g. 5000ms but one element should be loaded faster.

### Callback function

    $('.load-later').loadLater(function(element){

    });

### Callback function with options

    $('.postload').loadLater({
        selector: 'div:first'
    }, function (element) {

    });

### Embeding SVG inside HTML

Sometimes this cannot be avoided :-)

    <div class="load-later" data-url="/images/svg/example.svg" data-selector="svg" ></div>

This will result in

    <div class="load-later" data-url="/images/svg/example.svg" data-selector="svg">
        <svg ... >
           [...]
        </svg>
    </div>

Notice second attribute *data-selector="svg"*, thanks to this we skip comments that could be included in svg
    file and include only SVG element

### Global settings

If you load many elements with simmilar structure you might want to use same selector e.g.**div.content**
    for each loaded element. Instead of copy pasting same data-selector attribute to each DOM element you
    can achieve this faster.

    <div class="load-later" data-url="/partial/first-example.html"></div>

    <div class="load-later" data-url="/partial/second-example.html"></div>

    <div class="load-later" data-url="/partial/third-example.html"></div>

and initialize plugin with option

    $('.load-later').loadLater({
        selector: 'div.content'
    });

With this each DOM element will have this selector set as default

### Even more global settings

    $.loadLater.defaults.timer = 1000;

    $('.load-later').loadLater();

### License
Released under the [MIT license](https://github.com/EE/Load-Later/blob/master/LICENSE).