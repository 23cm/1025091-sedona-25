var hotelSearchButton = document.querySelector(".booking-promo-button");
var searchPopup = document.querySelector(".booking-form");
var form = searchPopup.querySelector("form");
var checkInDate = form.querySelector("#checkInDate");
var checkInDateError = form.querySelector("#checkIn");
var checkOutDate = form.querySelector("#checkOutDate");
var checkOutDateError = form.querySelector("#checkOut");
var adultsQty = form.querySelector("#adultsQty");
var adultsQtyError = form.querySelector("#adultsInfo");
var childsQty = form.querySelector("#childsQty");

var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

searchPopup.classList.add("modal-hide");

hotelSearchButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchPopup.classList.toggle("modal-hide");
});

form.addEventListener("submit", function(evt) {
  if (!checkInDate.value) {
    evt.preventDefault();
    searchPopup.classList.add("form-error-warning");
    setTimeout(function() {
      searchPopup.classList.remove("form-error-warning");
    }, 800);
    checkInDateError.classList.add("form-error");
    console.log("Укажите дату заезда!");
    checkInDate.addEventListener("input", function() {
      if (checkInDate.value) {
        checkInDateError.classList.remove("form-error");
      }
    });
  } else {
    localStorage.setItem("adultsQty", adultsQty.value);
    localStorage.setItem("childsQty", childsQty.value);
  }

  if (!checkOutDate.value) {
    evt.preventDefault();
    checkOutDateError.classList.add("form-error");
    console.log("Укажите дату выезда!");
    checkOutDate.addEventListener("input", function() {
      if (checkOutDate.value) {
        checkOutDateError.classList.remove("form-error");
      }
    });
  } else {
    localStorage.setItem("adultsQty", adultsQty.value);
    localStorage.setItem("childsQty", childsQty.value);
  }

  if (!adultsQty.value || adultsQty.value <= 0) {
    evt.preventDefault();
    adultsQtyError.classList.add("form-error");
    console.log("Укажите количество взрослых гостей!");
    adultsQty.addEventListener("input", function() {
      if (adultsQty.value) {
        adultsQtyError.classList.remove("form-error");
      }
    });
  } else {
    localStorage.setItem("adultsQty", adultsQty.value);
    localStorage.setItem("childsQty", childsQty.value);
  }
  if (childsQty.value < 0) {
    evt.preventDefault();
    console.log("Укажите корректное значение количества детей!");
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
