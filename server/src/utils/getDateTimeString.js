export default function () {
  let now = new Date();

  // Convert current time to UTC
  let utc = now.getTime() + now.getTimezoneOffset() * 60000;

  // EST is UTC - 5 hours
  let est = new Date(utc - 3600000 * 5);

  // Formatting to YYYY-MM-DD|hh:mm:ss
  let dateString =
    est.getFullYear() +
    "-" +
    ("0" + (est.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + est.getDate()).slice(-2) +
    "|" +
    ("0" + est.getHours()).slice(-2) +
    ":" +
    ("0" + est.getMinutes()).slice(-2) +
    ":" +
    ("0" + est.getSeconds()).slice(-2);

  return dateString;
}
