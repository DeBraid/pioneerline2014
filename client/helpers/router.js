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

  removeExtraButtons: function () {
    var buttonGroup = $('.filter-button-container'); 
    
    if ( buttonGroup.length > 1 ) {
        buttonGroup.get(1).remove();
    }
  }, 
  clearInputValue: function () {
    var inp = $('.reactive-table-input');
    inp.val('');
    inp.trigger('keyup');
  },
  setBackground: function () {
    document.body.className = "noBackgroundImage"
  }
}

Router.onBeforeAction(filters.setBackground);

// remove text when route changes
Router.onBeforeAction(filters.clearInputValue);

// Router.onAfterAction(filters.removeExtraButtons)

// Routes

Router.map(function() {


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

  this.route('quicklinkonecolour', {
    path: '/quicklinkonecolour',
    template: 'quicklinkonecolour',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('quicklinkonecolour'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        quicklinkonecolour: Quicklinkonecolour.find(),
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

  this.route('adriteeconomyline', {
    path: '/adriteeconomyline',
    template: 'adriteeconomyline',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('adriteeconomyline'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        adriteeconomyline: Adriteeconomyline.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('cloudbuster', {
    path: '/cloudbuster',
    template: 'cloudbuster',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('cloudbuster'),
              Meteor.subscribe('cloudbusterkits'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        cloudbuster: Cloudbuster.find(),
        cloudbusterkits: Cloudbusterkits.find(),
        charges: Charges.find()
      }
    }
  });
  

  this.route('outdoorballoons', {
    path: '/outdoorballoons',
    template: 'outdoorballoons',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('outdoorballoons'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        outdoorballoons: Outdoorballoons.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('microfoilvalved', {
    path: '/microfoilvalved',
    template: 'microfoilvalved1820',
    yieldTemplates: {
      'smallmicrofoilcharges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('microfoilvalved1820'),
              Meteor.subscribe('microfoilvalved36'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        microfoilvalved1820: Microfoilvalved1820.find(),
        microfoilvalved36: Microfoilvalved36.find(),
        charges: Charges.find()
      }
    }
  });
  
  this.route('largequantmicrofoil', {
    path: '/largequantmicrofoil',
    template: 'largequantmicrofoil',
    yieldTemplates: {
      'charges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('largequantmicrofoil'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        largequantmicrofoil: Largequantmicrofoil.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('giantlatexballoons', {
    path: '/giantlatexballoons',
    template: 'giantlatexballoons',
    yieldTemplates: {
      'giantlatexcharges': {to: 'charges'}
    }, 
    waitOn: function () {
      return [Meteor.subscribe('giantlatexballoons'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        giantlatexballoons: Giantlatexballoons.find(),
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

  // newroutes
  this.route('eventtents', {
    path: '/eventtents',
    template: 'eventtents',
    waitOn: function () {
      return Meteor.subscribe('eventtents');
    },
    data: function () {
      return {
        eventtents: Eventtents.find()
      }
    }
  });

  this.route('popupbanners', {
    path: '/popupbanners',
    template: 'popupbanners',
    waitOn: function () {
      return Meteor.subscribe('popupbanners');
    },
    data: function () {
      return {
        popupbanners: Popupbanners.find()
      }
    }
  });

  this.route('tablecovers', {
    path: '/tablecovers',
    template: 'tablecovers',
    waitOn: function () {
      return [Meteor.subscribe('nonfittedtablecovers'),
              Meteor.subscribe('stretchtablecovers')]
    },
    data: function () {
      return {
        nonfittedtablecovers: Nonfittedtablecovers.find(),
        stretchtablecovers: Stretchtablecovers.find()
      }
    }
  });

  this.route('promoflags', {
    path: '/promoflags',
    template: 'promoflags',
    waitOn: function () {
      return [Meteor.subscribe('promoflags'),
              Meteor.subscribe('econflags')];
    },
    data: function () {
      return {
        promoflags: Promoflags.find(),      
        econflags: Econflags.find()      
      }
    }
  });

  this.route('multicolourprint', {
    path: '/multicolourprint',
    template: 'multicolourprint',
    waitOn: function () {
      return [Meteor.subscribe('twocolourballoons'),
              Meteor.subscribe('threecolourplus'),
              Meteor.subscribe('charges')];
    },
    data: function () {
      return {
        twocolourballoons: Twocolourballoons.find(),      
        threecolourplus: Threecolourplus.find(),
        charges: Charges.find()
      }
    }
  });

  this.route('geninfo', {
    path: '/geninfo',
    template: 'geninfo',
    waitOn: function () {
      return Meteor.subscribe('geninfo');
    },
    data: function () {
      return {
        geninfo: Geninfo.find()
      }
    }
  });

  this.route('admaxminisportballs', {
    path: '/admaxminisportballs',
    template: 'admaxminisportballs',
    waitOn: function () {
      return Meteor.subscribe('admaxminisportballs');
    },
    data: function () {
      return {
        admaxminisportballs: Admaxminisportballs.find()
      }
    }
  });

  this.route('adpunchballs', {
    path: '/adpunchballs',
    template: 'adpunchballs',
    waitOn: function () {
      return Meteor.subscribe('adpunchballs');
    },
    data: function () {
      return {
        adpunchballs: Adpunchballs.find()
      }
    }
  });

  this.route('beachballs', {
    path: '/beachballs',
    template: 'beachballs',
    waitOn: function () {
      return Meteor.subscribe('beachballs');
    },
    data: function () {
      return {
        beachballs: Beachballs.find()
      }
    }
  });

});
