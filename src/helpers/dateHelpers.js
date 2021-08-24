import moment from "moment";

/**
 * Find start of week from any given date (ISO week)
 * @param {*} start date to find week
 * @returns start of the week date object in ISO format
 */
export const startDate = (start = Date.now()) => moment(start).startOf('isoWeek');

/**
 * Find end of week from any given date (ISO week)
 * @param {*} start date to find week
 * @returns end of the week date object in ISO format
 */
export const endDate = (start = Date.now()) => moment(start).endOf('isoWeek');

/**
 * Create a Range of Dates for any given week
 * @param {string} start any date within the week
 * @param {string} format expected date object formatting for moment
 * @param {boolean} workweek limit results to Mon-Fri work week
 * @returns Array of dates for week range in ISO format (Mon-Sun) 
 */
export const getWeekRange = (start, format, workweek = false) => {
    const dateForRange = start || Date.now();
    const startOfWeek = moment(dateForRange).startOf('isoWeek');
    const endOfWeek = moment(dateForRange).endOf('isoWeek');
    const endOfWorkWeek = moment(dateForRange).endOf('isoWeek').subtract(2, 'days');

    let weekDays = [];
    let day = startOfWeek;
    const endOfWeekTarget = workweek ? endOfWorkWeek : endOfWeek;

    while (day <= endOfWeekTarget) {
        weekDays.push(format ? day.format(format) : day.toDate());
        day = day.clone().add(1, 'd');
    }

    return weekDays;
}

/**
 * Get time formatted by locale with hours and minutes (eg. 9:30 PM)
 * @param {*} time date time object to process
 * @returns time formated by locale using hours/minutes
 */
export const getHourFormat = (time) => {
    return moment(time).format('LT')
}

/**
 * Filter Events by specific date
 * @param {array} events array containing event objects
 * @param {string} date to filter events
 * @returns Array of Events for the specified date
 */
export const getEventsForDate = (events, date) => {
    return events
        .filter(event => moment(event.timeStart)
        .isSame(date, 'day'));
}

/**
 * Sort Events by Time using object key
 * @param {array} events array containing event objects
 * @param {string} key object key with start time
 * @returns Array of Events sorted in ascending order
 */
export const sortEvents = (events, key) => {
    const sorted = events.sort((a, b) => {
        const dateA = new Date(a[key]);
        const dateB = new Date(b[key]); 
        return dateA - dateB
    })
    return sorted;
}