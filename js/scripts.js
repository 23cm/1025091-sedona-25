var hotelSearchButton = document.querySelector(".booking-promo-button");
var searchPopup = document.querySelector(".booking-form");
var form = searchPopup.querySelector("form");
var checkInDate = form.querySelector("#checkInDate");
var checkOutDate = form.querySelector("#checkOutDate");
var adultsQty = form.querySelector("#adultsQty");

hotelSearchButton.addEventListener("click",
function (evt) {
  evt.preventDefault();
  searchPopup.classList.toggle("modal-hide");
});

form.addEventListener("submit", function (evt) {
  if (!checkInDate.value) {
  evt.preventDefault();
  console.log('Дату введи!')

}
});




function initMap() {
  var myLatLng = {lat: 34.876142, lng: -111.756358};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: myLatLng,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Welcome to Sedona!'
  });
}
