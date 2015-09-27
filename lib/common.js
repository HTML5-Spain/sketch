UI.registerHelper('isAdmin', function(context, options) { 
  return Meteor.user() && Meteor.user().profile.role === "admin";
});

UI.registerHelper('isLogged', function(context, options) { 
  return Meteor.user();
});
UI.registerHelper('avatar', function(context, options) { 
  return Meteor.user().profile.photo;
});
