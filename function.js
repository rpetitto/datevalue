var DateTime = luxon.DateTime;
window.function = function (dateInput, dateFormat) {
  const dt = DateTime.fromJSDate(dateInput.value);
  const formatString = dateFormat.value ?? "";
  const formattedDate = dt.toFormat(formatString);
  return "j";
  return parseInt(formattedDate, 10);
}
