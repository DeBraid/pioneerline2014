/* ---------------------------------------------------- +/

## Main ##

Global client-side code. Loads last. 

/+ ---------------------------------------------------- */


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

Template.reactiveTable.rendered = function () {

        UI.insert(UI.render(Template.filterbuttons), $('.reactive-table-filter').get(0) );

        var buttonGroup = $('.filter-button-container'); 
        
        if ( buttonGroup.length > 1 ) {
            buttonGroup.get(1).remove();
        }
};


UI.registerHelper('testButtons', function () {
        return [ 
          { name: "Alice", score: 150 }, 
          { name: "Bob", score: 125 } 
        ]
    }
)

// var _deps = new Deps.Dependency;
// var buttonData = {};



// UI.registerHelper('setButtons', function () {
//     _deps.depend();

//       var data = [];
//     $('.productname').map(function () {
//       var words = [];
//       words.push($(this).text().split(' '));
//       data.push( _.flatten(words, false) );
      
//       stuff = _.flatten(data);
//       uniqStr = _.uniq(stuff);

//         uniqStr.map(function (str) {
//            return buttonData = {
//                 id: str
//             } 

//         });
        
        
//     });

//   }
// );

// Template.reactiveTable.rendered = function () {
//     _deps.changed();
// };

// Template.filterbuttons.rendered = function () {
//       var hoot = [];
//     var data = [];
//     $('.productname').map(function () {
//       var words = [];
//       words.push($(this).text().split(' '));
//       data.push( _.flatten(words, false) );
      
//       stuff = _.flatten(data);
//       uniqStr = _.uniq(stuff);
      
//     });
// }; 
