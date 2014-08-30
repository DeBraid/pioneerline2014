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

// pop up when user clicks images
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

Template.filterbuttons.helpers({
  testButtons: function () {
    var words = UI._templateInstance().state.get('words');
    return _.map(words, function(word) {
      return {name: word};
    });
  }
});

Template.filterbuttons.rendered = function() {
  

    var data = [];

    var words = $('h1').map(function () {
      var wordArr = [];
      wordArr.push($(this).text().split(' '));
      data.push( _.flatten(wordArr, false) );
      
      stuff = _.flatten(data);
      uniqStr = _.uniq(stuff);
      return uniqStr;
      
    });

  this.state.set('words', _.uniq(words));


};

Template.filterbuttons.created = function() {
  this.state = new ReactiveDict;
};

Template.reactiveTable.rendered = function () {
    UI.insert( UI.render( Template.filterbuttons ) , $('.reactive-table-filter').get(0) )
};