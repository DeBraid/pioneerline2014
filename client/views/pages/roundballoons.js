Template.projectImageModal.rendered = function () {
    $('#projectImageModal').on('show.bs.modal', function () {
        $('#modalImage').css('height',$( window ).height()*0.8);
    });  
    
};

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



Template.roundballoons.events({
    'click img': function(e,t) {
        e.preventDefault();
        myImage = $(e.target).attr('src');
        

        console.log(myImage);
        console.log("myImage");
        Session.set('data', myImage);
        var newModal = $("#projectImageModal")

        newModal.html('<div class="col-lg-12"><img id="modalImage" src="'+ myImage + '" /></div>')
        
        newModal.modal('show').css({
            'margin-top': function () { //vertical centering
                return -($(this).height() / 1000);
            },
            'margin-left': function () { //Horizontal centering
                return -($(this).width() / 1000);
            }
        });
    }
});

