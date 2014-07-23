Template.contact.events({
  'click #submitContact' : function(event, template) {
    event.preventDefault();

    fullname = template.find("input[name=fullname]");
    telephone = template.find("input[name=telephone]");   
    email = template.find("input[name=email]");
    message = template.find("input[name=message]");

    // Do form validation

    var data = {
      fullname: fullname.value,
      telephone: telephone.value,
      email: email.value, 
      message: message.value
    };

    email.value="";
    fullname.value="";
    telephone.value="";
    message.value="";

    ContactMsg.insert(data, function(err) { 
    /* handle error */ 
      if (!err) { 
        console.log("Successfully Inserted: " + data + "into ContactMsg")
      } else {
        console.log(err);
      }
    });

}});