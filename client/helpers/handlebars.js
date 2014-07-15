/* ---------------------------------------------------- +/

## Handlebars Helpers ##

Custom Handlebars helpers.

/+ ---------------------------------------------------- */

UI.registerHelper('myHelper', function(myArgument){
  return "Hello, " + myArgument;
});
