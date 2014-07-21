Template.quicklinkround.settings = function () {
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
                    key: 'Printing',
                    label: 'Printing'
                }, {
                    key: '200',
                    label: '200'
                }, {
                    key: '500',
                    label: '500'
                }, {
                    key: '1000',
                    label: '1000'
                }
            ]
    };
};
