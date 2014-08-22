Template.reactiveTable.settings = function () {
    return {
      field: [
        {
          key: 'Product Description',
          label: 'Product Description',
          fn: function (name, object) {
            // var image = object.PSD.slice(0,-4);
                      var image = 'placeholder';
                      var html = '<h3 class="productname">' + name + '</h3>' + 
                            '<div class="thumbnail tableimages">' + 
                                '<img src="' + image + '.jpg' + '">' + 
                            '</div>';
            return new Spacebars.SafeString(html);
          }
        }
      ]
    };
  };