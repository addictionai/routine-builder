const daysInMonth = (x) => {
    return 28 + ((x + Math.floor(x / 8)) % 2) + (2 % x) + 2 * Math.floor(1 / x);
  };
  
  const checkLeapYear = (year) => {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  };

  
const createMonthMap = (month, year, map) => {
    const isFebruary = month === 2;
    const numberOfDays =
        isFebruary && checkLeapYear(year) ? 29 : daysInMonth(month);

    for (let i = 1; i <= numberOfDays; i++) {
        const day = i.toString().padStart(2, "0");
        const months = month.toString().padStart(2, "0");
        const dateKey = `${year}-${months}-${day}`;
        map.set(dateKey, null);
    }
};

const createTimeMap = (map) => {
    for (let i = 0; i < 24; i++) {
        const hourString = i.toString().padStart(2, "0");
        const timeKey = `${hourString}:00`;
        map.set(timeKey, []);
    }
};

export { 
    createMonthMap,
    createTimeMap,
    daysInMonth, 
    checkLeapYear,
};