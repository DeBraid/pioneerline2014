Template.filterbuttons.events({
    'click .tags': function (e,t) {
        e.preventDefault();
        
        var selection = e.target.name,
        inp = $('.reactive-table-input');
        
        // 1.  insert text into filter/search bar
        inp.val(selection);
        
        // 2.  simulate key event and filter table
        inp.trigger('keyup');

    }
});

Template.filterbuttons.helpers({
  testButtons: function() {
    var words = UI._templateInstance().state.get('words');
    return _.map(words, function(word) {
      console.log(word);
      return {name: word};
    });
  }
});

Template.filterbuttons.rendered = function() {
   var words = $('h1').map(function() {
    return $(this).text();
  });
  this.state.set('words', _.uniq(words));
};

Template.filterbuttons.created = function() {
  this.state = new ReactiveDict;
};


Template.filterbuttons.buttonData = function() {

    return Roundballoons.find();
};