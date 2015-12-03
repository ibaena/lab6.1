//initiaze parse
Parse.initialize("3szXOp4v2ZwD9iIKlrzEEBzMOyJdTGGcYKj8vQOa", "IwRI9Wf45pwreXp7c3GI9BzU9bYBCPC0JwcB9nMR");

//Page Navigation
function showPage(pageId){

  $(".page").hide();
  $(pageId).show();
}

showPage('#profile');

$(window).on("hashchange", function(event){
  showPage(location.hash);
});

location.hash ="";
location.hash ="item-sale";

//register form
$('#register-form').submit(function(event){
  event.preventDefault();

  var username = $('#register-username').val();
  var password = $('#register-password').val();
  var password2 = $('#register-password2').val();

  if (password===password2){
      var user = new Parse.User();
      user.set("username",username);
      user.set("password",password);
      
      user.signUp(null,{
        success:function(user){
          console.log('register succeeded')


      }, error:function(user, error){
          console.log("Register error:"+error.message);
      }
    });


  }


});

