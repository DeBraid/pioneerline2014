Template.outdoorballoons.settings = function () {
    return {
        showFilter: true,
        fields: [{
                    key: 'Item Number',
                    label: 'Item Number'
                }, {
                  key: 'Product Description',
                  label: 'Product',
                  fn: function (name, object) {

                      // var image = object.PSD.slice(0,-4);
                      var image = 'placeholder';
                      var html = '<h3 class="productname">' + name + '</h3>' + 
                            '<div class="thumbnail tableimages">' + 
                                '<img src="' + image + '.jpg' + '">' + 
                            '</div>';

                      return new Spacebars.SafeString(html);
                    }
                }, {
                    key: '1 Side Printing',
                    label: '1 Side Printing'
                }, {
                    key: '200',
                    label: '200'
                }, {
                    key: '500',
                    label: '500'
                }, {
                    key: '1000',
                    label: '1000'
                }, {
                    key: '2500',
                    label: '2500'
                },{
                    key: '5000',
                    label: '5000'
                }
            ]
    };
};