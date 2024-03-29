import { DateTime } from 'luxon';
window.function = function(dateInput, dateFormat) {
  const dt = DateTime.fromJSDate(dateInput.value);
  const formattedDate = dt.toFormat(dateFormat.value);
  return parseInt(formattedDate, 10);
}
