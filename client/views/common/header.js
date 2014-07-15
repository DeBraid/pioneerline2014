Template.nav.helpers({
  messages: function () {
    return Messages.find();
  },
  isLoggedIn: function () {
    return !!Meteor.user();
  }
})

Template.nav.events({
  'click .log-out': function () {
    Meteor.logout();
  }
})