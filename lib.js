function select(hotel) {
    console.log('Thank you!<br>You have selected: ' + hotel);
    window.open("thank_you.html?selected-hotel=" + hotel,"_self");
}