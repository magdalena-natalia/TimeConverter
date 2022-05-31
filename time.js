// document.write('Hello, world!');
import { DateTime } from "luxon";

// get user's time
let localDateTime = DateTime.local();



// create data for original date and time including time zone
// get user's timezone
let localTZ = localDateTime.zone.name;
// let sourceDateTime = DateTime.fromISO(d, { zone: sourceTZ });

// get output Time Zone
let outputTZ = prompt("Give the timezone in format Continent/City");

// convert given date and time to user specified timezone

let outputDateTime = localDateTime.setZone(outputTZ);

// to test

// document.write("Current Date and Time", localDateTime.toISO());
// document.write("Current Time Zone", localTZ);
// document.write("Converted Date and Time", outputDateTime.toISO());
// document.write("Chosen Time Zone", outputTZ);
