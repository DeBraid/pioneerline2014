/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

// Filters

var filters = {

  myFilter: function () {
    // do something
  },

  isLoggedIn: function() {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      alert('Please Log In First.')
      this.stop();
    }
  }

}

Router.onBeforeAction(filters.myFilter, {only: ['items']});

// Routes

Router.map(function() {

  // Items

  // this.route('items', {
  //   waitOn: function () {
  //     return Meteor.subscribe('allItems');
  //   },
  //   data: function () {
  //     return {
  //       items: Items.find()
  //     }
  //   }
  // });

  // this.route('item', {
  //   path: '/items/:_id',
  //   waitOn: function () {
  //     return Meteor.subscribe('singleItem', this.params._id);
  //   },
  //   data: function () {
  //     return {
  //       item: Items.findOne(this.params._id)
  //     }
  //   }
  // });

  // this.route('product', {
  //   path: '/product/:_id',
  //   template: 'product',
  //   waitOn: function () {
  //     return Meteor.subscribe('singleProduct', this.params._id);
  //   },
  //   data: function () {
  //     return {
  //       product: Session.get(this.params._id)
  //     }
  //   }
  // });
  // Pages

  this.route('homepage', {
    path: '/'
  });

  this.route('latexonecolround', {
    path: '/latexonecolround',
    template: 'latexonecolround',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('latexonecolround'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        latexonecolround: Latexonecolround.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('roundballoons', {
    path: '/roundballoons',
    template: 'roundballoons',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('roundballoons'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        roundballoons: Roundballoons.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('heartballoons', {
    path: '/heartballoons',
    template: 'heartballoons',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('heartballoons'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        heartballoons: Heartballoons.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('quicklinkround', {
    path: '/quicklinkround',
    template: 'quicklinkround',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('quicklinkround'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        quicklinkround: Quicklinkround.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('threecolourplus', {
    path: '/threecolourplus',
    template: 'threecolourplus',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('threecolourplus'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        threecolourplus: Threecolourplus.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('twocolourballoons', {
    path: '/twocolourballoons',
    template: 'twocolourballoons',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('twocolourballoons'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        twocolourballoons: Twocolourballoons.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('adwave', {
    path: '/adwave',
    template: 'adwave',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('adwave'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        adwave: Adwave.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('adwrap', {
    path: '/adwrap',
    template: 'adwrap',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('adwrap'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        adwrap: Adwrap.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('charges', {
    path: '/charges',
    template: 'charges',
    waitOn: function () {
      return Meteor.subscribe('charges');
    },
    data: function () {
      return {
        charges: Charges.find()
      }
    }
  });

  this.route('content');
  this.route('contact');
  // Users

  this.route('login');

  this.route('signup');

  this.route('forgot');

});
