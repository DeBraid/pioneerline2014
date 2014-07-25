Template.adwrap.settings = function () {
    return {
        showFilter: true,
        fields: [{
                  key: 'Product Description',
                  label: 'Product',
                  fn: function (name, object) {
                      var html = '<a name="' + name + '" href="product/' + object._id + '">' + name + '</a>';
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
                }, {
                    key: 'PSD',
                    label: 'Image',
                    fn: function (name, object) {
                      var image = object.PSD.toString();
                      if ( image == "AdWrapStockAware.psd" ) {
                        console.log("we hit na image **");
                      }
                      

                     var html = '<div class="thumbnail tableimages">' + 
                                            '<img src="' + image.slice(0,-4) + '.jpg' + '">' + 
                                        '</div>';
                              return new Spacebars.SafeString(html);
                    }
                }
            ]
    };
};