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

// Publish a single item

Meteor.publish('singleItem', function(id) {
  return Items.find(id);
});