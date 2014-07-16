/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('allItems', function() {
  return Items.find();
});

Meteor.publish('adwave', function() {
  return Adwave.find();
});

Meteor.publish('latexonecolround', function() {
  return Latexonecolround.find();
});

Meteor.publish('adwrap', function() {
  return Adwrap.find();
});

// Publish a single item

Meteor.publish('singleItem', function(id) {
  return Items.find(id);
});