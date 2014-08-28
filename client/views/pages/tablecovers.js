// contains STRETCH TABLE COVERS below

Template.nonfitted.settings = function () {
    return {
        showFilter: true,
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
                    key: 'Printing',
                    label: 'Printing'
                }, {
                    key: '1',
                    label: '1'
                }, {
                    key: '5',
                    label: '5'
                }, {
                    key: '10',
                    label: '10' 
                }, {
                    key: '25',
                    label: '25'
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

Template.stretch.settings = function () {
    return {
        showFilter: true,
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
                    key: 'ItemNum',
                    label: 'Item #'
                }, {
                    key: '1',
                    label: '1'
                }, {
                    key: '5',
                    label: '5'
                }, {
                    key: '10',
                    label: '10' 
                }, {
                    key: '25',
                    label: '25'
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