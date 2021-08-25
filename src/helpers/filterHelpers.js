/**
 * Apply filters to an array of events
 * @param {array} events array of event objects
 * @param {boolean} hasFilters kill switch to prevent running 
 * @param {string} filterFunction filter function to apply
 * @returns 
 */
export const processFilters = (events = [], hasFilters, filterFunction) => {
    if(!hasFilters) return null;
    const clonedEvents = [...events];
    const filteredEvents = clonedEvents.filter(filterFunction);
    return filteredEvents;
};