/* ---------------------------------------------------- +/

## Client Router ##

Client-side Router.

/+ ---------------------------------------------------- */

// Config

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  charges: 'charges',
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

  this.route('items', {
    waitOn: function () {
      return Meteor.subscribe('allItems');
    },
    data: function () {
      return {
        items: Items.find()
      }
    }
  });

  this.route('item', {
    path: '/items/:_id',
    waitOn: function () {
      return Meteor.subscribe('singleItem', this.params._id);
    },
    data: function () {
      return {
        item: Items.findOne(this.params._id)
      }
    }
  });


  // Pages

  this.route('homepage', {
    path: '/'
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

  this.route('latexonecolround', {
    path: '/latexonecolround',
    template: 'latexonecolround',
    waitOn: function () {
      return Meteor.subscribe('latexonecolround');
    },
    data: function () {
      return {
        latexonecolround: Latexonecolround.find()
      }
    }
  });

  this.route('roundballoons', {
    path: '/roundballoons',
    template: 'roundballoons',
    waitOn: function () {
      return Meteor.subscribe('roundballoons');
    },
    data: function () {
      return {
        roundballoons: Roundballoons.find()
      }
    }
  });

  this.route('heartballoons', {
    path: '/heartballoons',
    template: 'heartballoons',
    waitOn: function () {
      return Meteor.subscribe('heartballoons');
    },
    data: function () {
      return {
        heartballoons: Heartballoons.find()
      }
    }
  });


  this.route('quicklinkround', {
    path: '/quicklinkround',
    template: 'quicklinkround',
    waitOn: function () {
      return Meteor.subscribe('quicklinkround');
    },
    data: function () {
      return {
        quicklinkround: Quicklinkround.find()
      }
    }
  });


  this.route('threecolourplus', {
    path: '/threecolourplus',
    template: 'threecolourplus',
    waitOn: function () {
      return Meteor.subscribe('threecolourplus');
    },
    data: function () {
      return {
        threecolourplus: Threecolourplus.find()
      }
    }
  });

   this.route('twocolourballoons', {
    path: '/twocolourballoons',
    template: 'twocolourballoons',
    waitOn: function () {
      return Meteor.subscribe('twocolourballoons');
    },
    data: function () {
      return {
        twocolourballoons: Twocolourballoons.find()
      }
    }
  });
  


  this.route('adwrap', {
    path: '/adwrap',
    template: 'adwrap',
    waitOn: function () {
      return Meteor.subscribe('adwrap');
    },
    data: function () {
      return {
        adwrap: Adwrap.find()
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
