// Template.roundballoons.events({
//     'click .tableimages': function(e,t) {
//         e.preventDefault();
//         $('.modal').modal();
//         myImage = $(e.target).attr('src');
//         myText = $(e.target).parent().siblings('h3').children('a').html();

//         var newTitle = $('.modal-title');
//         var newModal = $('.modal-body > div');

//         newTitle.text('' + myText + '');
//         newModal.html('<div class="col-lg-12"><img id="modalImage" src="'+ myImage + '" /></div>');

//         // $('#modalImage').css('height',$( window ).height()*2 );
        
//     }
// });



Template.roundballoons.settings = function () {
    return {
        showFilter: true,
        fields: [{
                        key: 'Product Description',
                        label: 'Product',
                        fn: function (name, object) {
                            var image = object.PSD.slice(0,-4);
                    

                            var html = '<h3><a name="' + name + '">' + name + '</a></h3>' + 
                                    '<div class="thumbnail tableimages">' + 
                                        '<img src="' + image + '.jpg' + '">' + 
                                    '</div>';
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
                    }
                ]
    };
};
