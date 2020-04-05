// prefix singlular digits with zero
function zero_pad(n) {
  return n < 10 ? "0" + n : n;
}

// construct clock and print to page
function tick() {
  var weekday = new Array(7),
      month   = new Array(12);

  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  var d       = new Date(),
      wd      = weekday[d.getDay()],
      day     = d.getDate(),
      mon     = month[d.getMonth()],
      year    = d.getFullYear(),

      h24     = d.getHours(),
      h12     = (h24 + 24) % 12 || 12, // default to 12 when h24 = 0 or 12
      h       = zero_pad(h12),
      m       = zero_pad(d.getMinutes()),
      s       = zero_pad(d.getSeconds()),
      ampm    = h24 < 12 ? "AM" : "PM",
      format  = wd + " " +
                day + " " +
                mon + " " +
                year + " " +
                h + ":" +
                m + ":" +
                s +
                ampm,
      content = document.querySelector("time");

  if (content) {
    return content.innerHTML = format
  }
}

// user is inactive, enable screensaver
function start_time() {
  tick();
  setInterval(tick, 1000);
}

window.addEventListener("load", start_time);
