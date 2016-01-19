var leapYear = function(year) {
  if ((year <= 0) || isNaN(year)) {
    return false;
  }
  else if (year < 1){
    return false;
  } else if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};
