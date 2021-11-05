// index.js

// let dt = 1636200875;
// let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
// d.setUTCSeconds(dt);
// console.log(dt);

// let d = new Date(1636200875);
// console.log(d);
// console.log(new Date(1636200875));

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  // console.log(passTimes);
  for (const pass of passTimes) {
    const dt = new Date(0); // Jan 1, 1970 in UTC
    dt.setUTCSeconds(pass.risetime); // sets seconds for specified date according to UTC
    console.log(`Next pass at ${dt} for ${pass.duration} seconds!`);
  }
});

// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('216.180.66.155', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coordinates);
// });

// fetchISSFlyOverTimes({ "latitude": '49.2765', "longitude": '-123.1247' }, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', passTimes);
// });
