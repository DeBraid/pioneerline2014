/* ---------------------------------------------------- +/

## Publications ##

All publications-related code. 

/+ ---------------------------------------------------- */

// Publish all items

Meteor.publish('allItems', function() {
  return Items.find();
});

Meteor.publish('adriteeconomyline', function() {
  return Adriteeconomyline.find();
});

Meteor.publish('giantlatexballoons', function() {
  return Giantlatexballoons.find();
});

Meteor.publish('cloudbuster', function() {
  return Cloudbuster.find();
});

Meteor.publish('cloudbusterkits', function() {
  return Cloudbusterkits.find();
});

Meteor.publish('outdoorballoons', function() {
  return Outdoorballoons.find();
});

Meteor.publish('microfoilvalved1820', function() {
  return Microfoilvalved1820.find();
});

Meteor.publish('microfoilvalved36', function() {
  return Microfoilvalved36.find();
});

Meteor.publish('largequantmicrofoil', function() {
  return Largequantmicrofoil.find();
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

Meteor.publish('roundballoons', function() {
  return Roundballoons.find();
});

Meteor.publish('heartballoons', function() {
  return Heartballoons.find();
});

Meteor.publish('quicklinkround', function() {
  return Quicklinkround.find();
});

Meteor.publish('threecolourplus', function() {
  return Threecolourplus.find();
});

Meteor.publish('twocolourballoons', function() {
  return Twocolourballoons.find();
});

Meteor.publish('charges', function() {
  return Charges.find();
});

Meteor.publish('eventtents', function() {
  return Eventtents.find();
});

Meteor.publish('geninfo', function() {
  return Geninfo.find();
});
Meteor.publish('promoflags', function() {
  return Promoflags.find();
});
Meteor.publish('tablecovers', function() {
  return Tablecovers.find();
});
Meteor.publish('popupbanners', function() {
  return Popupbanners.find();
});







// // Publish a single item
// Meteor.publish('singleItem', function(id) {
//   return Items.find(id);
// });