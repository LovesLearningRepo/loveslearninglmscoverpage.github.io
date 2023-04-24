$(document).ready(function(){
  $("#generateButton").click(function(){

    var titleInput =$("#pageTitle").val();
    var contactInput =$("#contactInfo").val();
    var headerInput =$("#headerImage").val();
    var badgeInput =$("#badgeIcon").val();
    var descriptionInput =$("#descriptionInput").val();

    $('#title').html(titleInput);
    $('#heroImage').html(headerInput);
    $('#contact').html(contactInput);
    $('#badgeImage').html(badgeInput);
    $('#description').html(descriptionInput);

    $('#codeOutput').height(500);
  })
})