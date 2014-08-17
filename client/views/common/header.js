Template.nav.helpers({
  messages: function () {
    return Messages.find();
  },
  isLoggedIn: function () {
    return !!Meteor.user();
  }
})

Template.nav.events({

  // Fix for mobile nav bar staying when switching routes
  'click .dropdown-menu, .navbar-collapse a': function () {
      
    var myNav = $('.navbar-header .navbar-toggle');

    if ( myNav.css('display') !='none' ) {
        
        myNav.trigger( 'click' );

    }
  },
  'click #contact-button' : function() {
    $('.collapse.in').collapse('hide');
  },
});