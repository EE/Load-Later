# JQuery Load Later

jQuery plugin for partial loading non essential DOM elements.

## Basic usage


    <div class="load-later" data-url="/partials/footer.html"></div>

Initialize with

    $('.load-later').loadLater();

Content of footer.html will be placed inside this element


## Available options

Just a example

    {
        url: '/partials/footer.html',
        selector: 'div:first'
    }

## Callback function

    $('.load-later').loadLater(function(element){

    });

## Callback function with options

    $('.postload').loadLater({
        selector: 'div:first'
    }, function (element) {

    });

## Embeding SVG inside HTML

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
