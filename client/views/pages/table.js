Template.reactiveTable.settings = function () {
    return {
      field: [
        {
          key: 'Product Description',
          label: 'Product Description',
          fn: function (name, object) {
            var html = '<a name="' + name +'" target="_blank" href="' + object.url + '">' + name + '</a>';
            return new Spacebars.SafeString(html);
          }
        }
      ]
    };
  };