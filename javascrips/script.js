(function ($){

    // opacity obrazkov
    var gallery = $('.gallery');
        startingOpacity = gallery.find('img').css('opacity');
    gallery.find('img').on('mouseenter mouseleave', function(event){
        var opacity = event.type === 'mouseenter' ? 1 : startingOpacity;
        $(this).stop().fadeTo(200, opacity);
    });

    
    // overlay obrazku
    var overlay = $('<div/>', {id: 'overlay'});
        overlay.appendTo('body').hide();

    // po kliknuti na obrazok
    gallery.find('a').on('click', function(event){
        
        var href = $(this).attr('href'),
            image = $('<img>', {src: href, alt: 'obrázok'});
        
        overlay.html(image)
               .show()

        overlay.show();
        event.preventDefault(); 
    });

    // overlay skryjem
    overlay.on('click', function(){
        overlay.fadeOut(300);
    });

    $(document).on('keyup', function(event){
        if( event.which === 27 ) overlay.fadeOut(300);
    });

})(jQuery);