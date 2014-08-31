Template.microfoilvalved36.settings = function () {
    return {
        showFilter: true,
        rowsPerPage: 5,
        showNavigation: 'auto',
        fields: [{
                  key: 'Product Description',
                  label: 'Product',
                  fn: function (name, object) {

                      var image = object.PSD.slice(0,-4);
                      
                     var html = '<h3 class="productname">' + name + '</h3>' + 
                            '<div class="thumbnail tableimages">' + 
                                '<img src="' + image + '.jpg' + '">' + 
                            '</div>';

                      return new Spacebars.SafeString(html);
                    }
                }, {
                    key: 'Number of Colours', 
                    label: '# of Colours'
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