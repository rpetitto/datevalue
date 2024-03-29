//var DateTime = luxon.DateTime;
//import { DateTime } from "luxon";
const { DateTime } = require("luxon");
window.function = function (dateInput, dateFormat) {
  const dt = DateTime.fromJSDate(dateInput.value);
  const formatString = dateFormat.value ?? "";
  const formattedDate = dt.toFormat(formatString);
  return parseInt(formattedDate, 10);
}
