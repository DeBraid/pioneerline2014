Template.twocolourballoons.settings = function () {
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
                        }
                    ]
        };
    };
