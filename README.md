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
        selector: 'div:first'
    }

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

### License
Released under the [MIT license](http://www.opensource.org/licenses/MIT).