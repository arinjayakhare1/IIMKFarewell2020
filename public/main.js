



function search()
{
  var RollNo=$('#RollNo').val();
  console.log("RollNo : " + RollNo);
  if(validateRollNo(RollNo))
  {
    updateView(RollNo.split("/")[RollNo.split("/").length - 1]);
  }
  else
  {
    alert("Please enter a valid Roll No");
  }
}

function validateRollNo(rollNo)
{
  if(!rollNo.startsWith("PGP/22/"))
  {
    return false;
  }
  rollNoDigits = rollNo.split("/")[rollNo.split("/").length - 1]
  if(rollNoDigits < 1 || rollNoDigits > 428)
  {

    return false;
  }
  return true;
}

function updateView(RollNo)
{

  $('#homePage').css('display','none');
  $('#invitationPage').css('display','inherit');
  // $('#invitation').css('display','inherit');
  // $('#albumPics').css('display','inherit');
  displayImages(RollNo);
}

function displayImages(RollNo)
{
  displayInvitation(RollNo + "/invitation.jpg");
  images = [];
  for(i = 1; i <= 3; i++){
    images.push(RollNo + "/image" + i + ".jpg");
    console.log(images)
  }
  displayAlbumImages(images);
}

function displayInvitation(invitationImage) {
$(document).ready(function() {
        document.getElementById("invitation").src = 'images/' + invitationImage;
    });
}

function displayAlbumImages(image) {
  image.forEach((item, i) => {
    document.getElementById('image' + (i+1)).src="images/"+item;
  });
}
