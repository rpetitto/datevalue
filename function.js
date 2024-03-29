import { DateTime } from 'luxon';
window.function = function(dateInput, dateFormat) {
  // Convert the JavaScript date to a Luxon DateTime object
  const dt = DateTime.fromJSDate(dateInput.value);

  // Use the provided format string directly with Luxon's toFormat method
  // Ensure your format string uses Luxon's tokens (e.g., 'yyyy' for year, 'MM' for month, 'dd' for day, etc.)
  const formattedDate = dt.toFormat(dateFormat.value);

  // Convert the formatted date string to an integer
  return parseInt(formattedDate, 10);
}
