Template.nav.helpers({
  messages: function () {
    return Messages.find();
  },
  isLoggedIn: function () {
    return !!Meteor.user();
  }
})

Template.nav.events({
  'click .dropdown-menu, .navbar-collapse a': function () {
      
    var myNav = $('.navbar-header .navbar-toggle');

    if ( myNav.css('display') !='none' ) {
        
        myNav.trigger( 'click' );

    }
  }
})