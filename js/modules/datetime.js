export const datetime = () => {
  const divTime = document.querySelector(".header__time");
  const divDate = document.querySelector(".header__date");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getClock() {
    let date = new Date();
    divTime.innerHTML = date.getHours() + ":" + date.getMinutes();
    divDate.innerHTML = months[date.getMonth()] + " " + date.getDate();
  }

  setInterval(getClock, 500);
};
