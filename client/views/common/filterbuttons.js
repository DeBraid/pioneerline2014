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

Template.filterbuttons.helpers({
  productTypes: function () {
    $('.productname').map(function () {
      var words = [];
      words.push($(this).text().split(' '))
      data.push(_.flatten(words), false)
    });
      function eliminateDuplicates(arr) {
          var i,
            len=arr.length,
            out=[],
            obj={};

           for (i=0;i<len;i++) {
           obj[arr[i]]=0;
           }
           for (i in obj) {
           out.push(i);
           }
           return out;
      }

    
      eliminateDuplicates(_.flatten(data))
      console.log(data);
  }
});