(function($) {
    $.fn.carousel = function(params) { 

         options = $.extend({
                pixelsOffset: 125,
                animationSpeed: 500
            }, params);
            console.log(options);

        $(this).ready(function() {  
            
            var leftUIEl = $('.carousel-arrow-left');
            var rightUIEl = $('.carousel-arrow-right');
            var elementsList = $('.carousel-list');

            var pixelsOffset = 125;
            var currentLeftValue = 0;
            var elementsCount = elementsList.find('li').length;
            var minimumOffset = - ((elementsCount - 5) * options.pixelsOffset);
            var maximumOffset = 0;

            leftUIEl.click(function() {        
                if (currentLeftValue != maximumOffset) {
                    currentLeftValue += options.pixelsOffset;
                    elementsList.animate({ left : currentLeftValue + "px"}, options.animationSpeed);
                }        
            });

            rightUIEl.click(function() {        
                if (currentLeftValue != minimumOffset) {
                    currentLeftValue -= options.pixelsOffset;
                    elementsList.animate({ left : currentLeftValue + "px"}, options.animationSpeed);
                }        
            });
        });
        return this;
    };
}) (jQuery);