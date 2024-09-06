// Countdown to next Defence Day (6th September of next year)

// Countdown Timer Script
const countdown = () => {
    const countDate = new Date("September 6, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
  
    // Time calculations
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Calculate remaining time
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);
  
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  
    if (gap < 0) {
      document.querySelector('.countdown').innerHTML = "The day has arrived!";
    }
  };
  
  setInterval(countdown, 1000);
  