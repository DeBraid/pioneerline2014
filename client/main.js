/* ---------------------------------------------------- +/

## Main ##

Global client-side code. Loads last. 

/+ ---------------------------------------------------- */


Template.filterbuttons.events({
    'click button': function (e,t) {
        e.preventDefault();
        
        var selection = e.target.name,
        inp = $('.reactive-table-input');
        
        // 1.  insert text into filter/search bar
        inp.val(selection);
        
        // 2.  simulate key event and filter table
        inp.trigger('keyup');

    }
});


Template.homepage.rendered = function () {
  
    var route = Router.current();
    
    if ( route && route.path == '/' || '/contact' ) {
        
        document.body.className = "showBackgroundImage";
    }
};

Template.contact.rendered = function () {
  
    var route = Router.current();
    
    if ( route && route.path == '/contact' ) {
        
        document.body.className = "showBackgroundImage";
    }
};

// UI.registerHelper({
//     backgroundState: function () {
//         var route = Router.current();
    
//         if ( route && route.path == '/' || '/contact' ) {
//             console.log(route.path);
//             document.body.className = "showBackgroundImage";
//         }
//     }
// });

Template.footer.rendered = function () {
  var height_diff = $(window).height() - $('body').height();
    if ( height_diff > 0 ) {
        $('footer').css( 'margin-top', height_diff );
    }
};

Template.reactiveTable.events({
  'click .tableimages': function(e,t) {
        e.preventDefault();
        $('.modal').modal();

        _this = $(e.target);
        myImage = _this.attr('src');
        myText = _this.parent().siblings('h3').html();

        var newTitle = $('.modal-title');
        var newModal = $('.modal-body > div');

        newTitle.text('' + myText + '');
        newModal.html('<div class="col-lg-12"><img id="modalImage" src="'+ myImage + '" /></div>');
        
    }
});