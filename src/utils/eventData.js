import moment from 'moment';
import {getEventsForDate} from './dateHelpers';

/**
 * Prepare database output for Map creation
 * @param {array} eventData raw event objects from database
 * @returns 2-dimensional array with [0] date and [0] array of event objects
 */
export const processEvents = (eventData, dateKey) => {
    const groupedEvents = eventData.reduce((prev, current) => {
        const extractedDate = moment(current[dateKey]).format("YYYY-DD-MM");
        const prevProcessed = prev.find(i => i?.[0] === extractedDate);
        if (prevProcessed) return prev;

        const arrayByDate = [extractedDate, getEventsForDate(eventData, current[dateKey])];
        return [...prev, arrayByDate];
    }, []);

    return groupedEvents;
};
