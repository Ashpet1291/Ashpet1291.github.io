 /*This function helps to submit a form to POST*/
 /*It asks the user what their favorite holiday is*/
function checkForm() {
    var x = document.forms["favoriteHolidayForm"]["fav_holiday"].value;
    if (x == "") {
      alert("You Must Choose a Favorite Holiday");
      return false;
    }
  }
 