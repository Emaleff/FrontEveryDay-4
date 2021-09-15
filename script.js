let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.361, lng: 48.058 },
    zoom: 15,
  });
}

const burger = document.getElementById("burger");
const menu = document.querySelector(".header__links");

burger.addEventListener("click", () => {
  menu.classList.add("open");
});

menu.addEventListener("click", () => {
  menu.classList.remove("open");
});

const input1 = document.getElementById("input1");
const subscribe1 = document.getElementById("subscribe1");
subscribe1.addEventListener("click", () => {
  const validateEmail = (email) => {
    var regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };
  if (validateEmail(input1.value)) {
    alert("OK");
    input1.classList.remove("error");
  } else {
    input1.classList.add("error");
  }
});

const input2 = document.getElementById("input2");
const subscribe2 = document.getElementById("subscribe2");
subscribe2.addEventListener("click", () => {
  const validateEmail = (email) => {
    var regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };
  if (validateEmail(input2.value)) {
    alert("OK");
    input2.classList.remove("error");
  } else {
    input2.classList.add("error");
  }
});