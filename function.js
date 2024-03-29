var DateTime = luxon.DateTime;
window.function = function (dateInput, dateFormat) {
  const dt = DateTime.fromISO(dateInput.value);
  const formatString = dateFormat.value;
  const formattedDate = dt.toFormat(formatString);
  return parseInt(formattedDate, 10);
}
