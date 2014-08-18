Template.microfoilvalved36.settings = function () {
    return {
        showFilter: true,
        fields: [{
                  key: 'Product Description',
                  label: 'Product',
                  fn: function (name, object) {

                      // var image = object.PSD.slice(0,-4);
                      var image = 'placeholder';
                      var html = '<a name="' + name + '" href="product/' + object._id + '">' + name + '</a>' + 
                              '<div class="thumbnail tableimages">' + 
                                  '<img src="' + image + '.jpg' + '">' + 
                              '</div>';
                      return new Spacebars.SafeString(html);
                    }
                }, {
                    key: 'Number of Colours', 
                    label: 'Number of Colours'
                }, {
                    key: '10',
                    label: '10'
                }, {
                    key: '25',
                    label: '25'
                }, {
                    key: '50',
                    label: '50'
                },{
                    key: '100',
                    label: '100'
                },{
                    key: '250',
                    label: '250'
                }
            ]
    };
};