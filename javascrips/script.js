    // PRVE PISMENKO SA DA NA VELKE A PRIPOJI SA K NEMU ZVYSOK SLOVA
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

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

    // // scrolovanie obrazkov

    // var menu = $('.menu'),
    //     menuLinks = menu.find('a');
        
    // menuLinks.on('click', function(event) {
    //     var id = this.hash;
    //     // zoscrolluje
    //     $('html,body').animate({ scrollTop:$(id).offset().top }, 1000, function() {
    //     window.location.hash = id;
    // });
    //     // zabrani default akcii
    //     event.preventDefault;
    // });

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

    // // animacie
    // $('.post-title').on('click', function() {
    //     $(this).css({ position:'relative'})
    //     .addClass('round-round')
    //     .animate({ left:400}, {
    //         duration: 1000,
    //     })
    //     .animate({ top:-800}, 500)
    // });

    // random farba
    var colors = ['red','green', '#e64134', '#eb70b1','#0f1a5f'];
    if ( $(this).is(':animated') ) return;

    $('.nav-bar').find('li').on('mouseenter', function(){
        var newColor = colors[ Math.floor (Math.random() * colors.length)];
    
        $(this).animate({ backgroundColor: newColor});
    });


//     // GALÉRIA

//     // najdem vsetky galerie
//     var galleries = $('.gallery-set');

//     // skryjeme
//     galleries.hide();

//     // najdeme link, kt je selected
//     var selected = $('.controls').find('.selected');

//     // funkcia na zobrazenie selected galerie
//     function showGallery (selected, fadeClass) {
//         if ( selected.length ) {
//             var id = selected.find('a').attr('href');
//             selectedGallery = $(id);
//         }

//         var newGallery = selectedGallery.length ? selectedGallery : galleries.eq(0);

//         // ak galeria neexistuje zobrazime prvu alebo inu existujucu
//         // selectedGallery.length ? selectedGallery.show() : galleries.eq(0).show();

//         galleries.not( newGallery ).hide();

//         newGallery.show().addClass(fadeClass || 'fadeInLeft');

//     }

//     // zobraz selected galeriu
//     showGallery(selected);

//     $('.controls a').on('click', function(event){
//        var li = $(this).parent(),
//             fadeClass = 'fadeIn' + li.data ('from').capitalize();

//         li.addClass('selected')
//           .siblings().removeClass('selected');
    
//         showGallery( li, fadeClass );

//         event.preventDefault();
//     });

// zobraz selected galeriu
    showGallery(selected);

    $('.controls a').on('click', function(event){
       var li = $(this).parent(),
            fadeClass = 'fadeIn' + li.data ('from').capitalize();

        li.addClass('selected')
          .siblings().removeClass('selected');
    
        showGallery( li, fadeClass );

        event.preventDefault();
    });

// })(jQuery);


























