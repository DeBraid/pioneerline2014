Template.adpunchballs.settings = function () {
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
                    key: '100',
                    label: '100'
                }, {
                    key: '250',
                    label: '250' 
                },{
                    key: '500',
                    label: '500'
                },{
                    key: '1000',
                    label: '1000'
                }
            ]
    };
};