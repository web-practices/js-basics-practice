function getDayOfMonth(dateStr) {
  return new Date(dateStr).getDate();
}

function getDayOfWeek(dateStr) {
  return new Date(dateStr).getDay();
}

function getYear(dateStr) {
  return new Date(dateStr).getFullYear();
}

function getMonth(dateStr) {
  return new Date(dateStr).getMonth();
}

function getMilliseconds(dateStr) {
  return new Date(dateStr).getTime();
}

export { getDayOfMonth, getDayOfWeek, getYear, getMonth, getMilliseconds };
