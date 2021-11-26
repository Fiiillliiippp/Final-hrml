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

    // scrolovanie obrazkov

    var menu = $('.menu'),
        menuLinks = menu.find('a');
        
    menuLinks.on('click', function(event) {
        var id = this.hash;
        // zoscrolluje
        $('html,body').animate({ scrollTop:$(id).offset().top }, 1000, function() {
        window.location.hash = id;
    });
        // zabrani default akcii
        event.preventDefault;
    });

    // back to top
    var backToTop = $('<a></a>', {
                            href: '#',
                            class: 'back-to-top',
                            html:'<i class="fa fa-caret-up fa-5x"></i>'
                        });

    backToTop
            .hide()
            .appendTo('body')
            .on('click', function(){
                $('html,body').animate({ scrollTop: 0}, 1000);
            });

    // objavenie a zmiznutie sipky
    var win = $(window);
    win.on('scroll', function(){
        if(win.scrollTop() >= 400) backToTop.fadeIn(1000);
        else backToTop.hide();
    });

    // animacie
    $('.post-title').on('click', function() {
        $(this).css({ position:'relative'})
        .addClass('round-round')
        .animate({ left:400}, {
            duration: 1000,
        })
        .animate({ top:-800}, 500)
    });

    // $('.post-title')
    //     .css({ position: 'relative'})
    //     .on('click', function() {
    //         $(this).animate({ left: '-=50' })
    //     })

    // $('.post-title')
    //     .on('click', function(){
    //         var e = $(this),
    //             className = 'round-round';
    //         e.toggleClass(className);
            
    //     });











})(jQuery);
