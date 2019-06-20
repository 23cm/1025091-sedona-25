var hotelSearchButton = document.querySelector(".booking-promo-button");
var searchPopup = document.querySelector(".booking-form");
var form = searchPopup.querySelector("form");
var checkInDate = form.querySelector("#checkInDate");
var checkInDateError = form.querySelector("#checkIn");
var checkOutDate = form.querySelector("#checkOutDate");
var checkOutDateError = form.querySelector("#checkOut");
var adultsQty = form.querySelector("#adultsQty");
var childsQty = form.querySelector("#childsQty");

var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

searchPopup.classList.remove("modal-show");

hotelSearchButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  searchPopup.classList.toggle("modal-show");
  searchPopup.classList.remove("form-error-warning");
  checkInDate.focus();
});

checkInDate.addEventListener("focus", function() {
  checkInDateError.classList.remove("form-error");
});

checkOutDate.addEventListener("focus", function() {
  checkOutDateError.classList.remove("form-error");
});

setTimeout(function() {
  searchPopup.classList.remove("form-error-warning");
}, 0);

form.addEventListener("submit", function(evt) {
  var _in = checkInDate.value.trim();
  var _out = checkOutDate.value.trim();

  if (_in === "" || _out === "") {
    evt.preventDefault();
    setTimeout(function() {
      searchPopup.classList.add("form-error-warning");
    }, 0);
    if (!_in) {
      checkInDateError.classList.add("form-error");
    }
    if (!_out) {
      checkOutDateError.classList.add("form-error");
    }

    searchPopup.classList.add("form-error-warning");

    localStorage.setItem("adultsQty", adultsQty.value);
    localStorage.setItem("childsQty", childsQty.value);
  }
});

function initMap() {
  var myLatLng = { lat: 34.876142, lng: -111.756358 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: myLatLng,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Welcome to Sedona!"
  });
}
