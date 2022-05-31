// document.write('Hello, world!');
import { DateTime } from "luxon";

// get user's time
let localDateTime = DateTime.local();

// get date from user's input

// document.write('Hello, world!');

let InputDate = prompt("Give the date in format yyyy-mm-dd");

// get time from user's input
let InputTime = prompt(
    "Give the time in format hh:mm using 24-hour convention"
);

// concatenate date and time for luxon time format
let d = InputDate.concat("T", InputTime);

// create data for original date and time including time zone
// get user's timezone
let sourceTZ = localDateTime.zone.name;
let sourceDateTime = DateTime.fromISO(d, { zone: sourceTZ });

// get output Time Zone
let outputTZ = prompt("Give the timezone in format Continent/City");

// convert given date and time to user specified timezone

let outputDateTime = sourceDateTime.setZone(outputTZ);

document.write("Current Date and Time", sourceDateTime.toISO());
document.write("Current Time Zone", sourceTZ);
document.write("Converted Date and Time", outputDateTime.toISO());
document.write("Chosen Time Zone", outputTZ);

document.write(`The chosen date time is ${UserDateTime}`);
