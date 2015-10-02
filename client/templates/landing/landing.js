
if (Meteor.isClient) {

  Accounts.onLoginFailure(function(err){
    sAlert.error(err);
  });

}





