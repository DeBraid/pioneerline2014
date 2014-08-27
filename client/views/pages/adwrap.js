Template.adwrap.settings = function () {
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
                    key: '1000',
                    label: '1000'
                }, {
                    key: '2500',
                    label: '2500'
                }, {
                    key: '5000',
                    label: '5000'
                }, {
                    key: '10000',
                    label: '10000'
                }, {
                    key: '25000',
                    label: '25000'
                }
            ]
    };
};