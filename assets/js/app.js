(function($, document) {

   var japick = {

      cache: function() {
         japick.els = {};
         japick.vars = {};

         japick.els.$body = $('body');
         japick.els.$window = $(window);
         japick.els.$document = $(document);
      },

      on_ready: function() {
         japick.cache();
         japick.on_resize();
         japick.on_scroll();
         japick.on_load();
         japick.slidePanel();
      },

      on_resize: function() {
         japick.els.$window.resize( function() {
            japick.fillViewport();
         }).resize();
      },

      on_scroll: function() {
         japick.els.$window.scroll( function(){
         });
      },

      on_load: function() {
         japick.els.$window.load( function(){
         });
      },

      slidePanel: function() {
         $('.nav__toggle').on('click', function(e) {
            e.preventDefault();
            $(this).parent().toggleClass('is-active');
            $(this).toggleClass('is-active');
            $('.section').toggleClass('padding-left');
         });
      },
       
       fillViewport: function() {
            var viewportHeight = window.innerHeight,
                element = $('.fill-viewport');
           
           element.css('height', viewportHeight + 'px');
       },

   };

	$(document).ready( japick.on_ready() );

}(jQuery, document));
