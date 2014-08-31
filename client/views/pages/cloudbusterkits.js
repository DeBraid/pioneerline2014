Template.cloudbusterkits.settings = function () {
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
                    key: 'Colours',
                    label: 'Colours'
                }, {
                    key: '1',
                    label: '1'
                }, {
                    key: '10',
                    label: '10'
                }, {
                    key: '50',
                    label: '50'
                }, {
                    key: '100',
                    label: '100'
                }
            ]
    };
};