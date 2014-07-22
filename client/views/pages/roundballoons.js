Template.roundballoons.settings = function () {
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
                            key: '250',
                            label: '250'
                        }, {
                            key: '500',
                            label: '500'
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
                        },{
                            key: 'PSD',
                            label: 'Image',
                            fn: function (name, object) {
                              var html = '<div class="thumbnail" style="height:150px;width:60px;">' + 
                                            '<img src="' + object.PSD.slice(0,-4) + '.jpg' + '">' + 
                                        '</div>';
                              return new Spacebars.SafeString(html);
                            }
                        }
                    ]
        };
    };

