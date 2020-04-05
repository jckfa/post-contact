const fs = require('fs')

// prefix singlular digits with zero
function zero_pad(n) {
  return n < 10 ? "0" + n : n;
}

function updated_on() {
  var dateObj = new Date(),
      month = dateObj.getUTCMonth(),
      day = dateObj.getUTCDate(),
      year = dateObj.getUTCFullYear(),
      m = new Array(7);
  m[0]  = "Jan";
  m[1]  = "Feb";
  m[2]  = "Mar";
  m[3]  = "Apr";
  m[4]  = "May";
  m[5]  = "Jun";
  m[6]  = "Jul";
  m[7]  = "Aug";
  m[8]  = "Sep";
  m[9]  = "Oct";
  m[10] = "Nov";
  m[11] = "Dec";

  return zero_pad(day) + " " + m[month] + " " + year;
}

// Write data to file for the app to consume
let writeString = `const updated = ${JSON.stringify(updated_on(), null, '  ')}
export default updated`

fs.writeFile('./src/components/data/updated_time.js', writeString, (err) => {
  if(err) return console.log(err)
})
