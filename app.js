$(document).ready(function () {
   
    var interval;
    
    var image = $('.slides img');
    
    var imageArray = [];
    
    image.each(function () {
       imageArray.push($(this).attr('src')); 
    });
    
    var imagePosition = 0;
    
    image.attr('src', imageArray[imagePosition]);
    
    
    function startSliding(counter) {
        
        interval = setInterval(function () {
         image.attr('src', imageArray[counter]);
         imagePosition = counter;
         counter++;
         
         if( counter > imageArray.length - 1 )
         {
             counter = 0;
         }
         
        }, 2000);
        
    }
    
    startSliding(imagePosition);
    
    
    $('.prev').click(function () {
       
        clearInterval(interval);
       
        imagePosition = imagePosition - 1;
        
        if( imagePosition < 0)
        {
            imagePosition = imageArray.length - 1;
        }
        
        image.attr('src', imageArray[imagePosition]);
        startSliding(imagePosition+1);
        
    });


    $('.next').click(function () {

        clearInterval(interval);

        imagePosition = imagePosition + 1;

        if( imagePosition > imageArray.length - 1)
        {
            imagePosition = 0;
        }

        image.attr('src', imageArray[imagePosition]);
        startSliding(imagePosition+1);

    });
    
    /* Respond on Mouse Enter and Mouse Leave events */
    
    $('.slides').on('mouseenter', function () {
       clearInterval(interval); 
    });

    $('.slides').on('mouseleave', function () {
        startSliding(imagePosition);
    });
    
});