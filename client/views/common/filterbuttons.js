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