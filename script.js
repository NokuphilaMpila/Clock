function runClock() {
  const today = new Date();
  const hours = today.getHours().toString().padStart(2, 0);
  const minutes = today.getMinutes().toString().padStart(2, 0);
  const seconds = today.getSeconds().toString().padStart(2, 0);
  const session = document.getElementById("session");

  if (hours >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[today.getDay()];

  const day = today.getDate().toString().padStart(2, "0");

  document.getElementById("day").innerHTML = dayName;
}

setInterval(runClock, 1000);
