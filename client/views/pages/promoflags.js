// contains code for sub-template ECONOMY FLAGS below

Template.promoflagscontent.settings = function () {
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
                    key: 'Includes',
                    label: 'Includes'
                },{
                    key: 'ItemNum',
                    label: 'Item #'
                },{
                    key: '1',  
                    label: '1'
                }, {
                    key: '2 to 5',
                    label: '2 to 5'
                }, {
                    key: '6 to 10',
                    label: '6 to 10'
                }, {
                    key: '11 to 25',
                    label: '11 to 25'
                }, {
                    key: '26 to 99',
                    label: '26 to 99'
                }
            ]
    };
};

Template.econflags.settings = function () {
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
                },{
                    key: 'Printing',  
                    label: 'Printing'
                },  {
                    key: 'Includes',
                    label: 'Includes'
                },{
                    key: '2 to 5',
                    label: '2 to 5'
                }, {
                    key: '6 to 10',
                    label: '6 to 10'
                }, {
                    key: '11 to 25',
                    label: '11 to 25'
                }, {
                    key: '26 to 99',
                    label: '26 to 99'
                }
            ]
    };
};
