Template.LoggedDropdown.events({
  "click [data-logout]" : function (e,tmpl) {
    Meteor.logout();
  }
});

Template.LoggedDropdown.helpers({
  "currentUser" : function() {
    return Meteor.user().profile;
  }
  
});

Template.LoggedDropdown.onRendered(function(){
  this.$(".dropdown").dropdown();
});