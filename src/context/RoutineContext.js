import {Fragment, createContext, useEffect, useState} from 'react';
import moment from 'moment';

export const RoutineContext = createContext({});

const RoutineContextProvider = ({children, value}) => {

    const today = moment().format('YYYY-MM-DD')

    // State
    const [start, setStart] = useState(today)
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [routineType, setRoutineType] = useState(value.setup);
    const [workweek, setWorkweek] = useState(false);

    const { setup } = value;
    
    // Temporary: Resets filters. ToDo: move switch out of App.js
    useEffect(() => {
      if(setup === 'routine') setSelectedStaff(null);
      if(setup === 'transport') setSelectedActivity(null);
    }, [setup])

    // Setup
    const isRoutine = setup === 'routine';
    const isTransport = setup === 'transport';

    // Filters
    const hasFilters = !!selectedActivity || !!selectedStaff;
    const noFilter = event => event;
    const activityFilter = event => event.category === selectedActivity;
    const staffFilter = event => event.staffId === selectedStaff && event.status !== 'denied';
    const filterFunction = isRoutine ? activityFilter : isTransport ? staffFilter : noFilter;
    
    // Handlers
    const handleDateScroll = (amount = 1, unit = 'week') => {
      const newDate = moment(start).add(amount, unit);
      setStart(prevState => newDate);
    }

    const handleWorkweekToggle = () => {
      setWorkweek(prevState => !prevState)
    }

    const handleDateChange = (dateChage) => {
      setStart(prevState => dateChage);
    }

    // Export
    const contextValues = {
      today,
      start,
      selectedStaff,
      setSelectedStaff,
      selectedActivity,
      setSelectedActivity,
      routineType,
      setRoutineType,
      isRoutine,
      isTransport,
      hasFilters,
      filterFunction,
      handleDateChange,
      handleDateScroll,
      workweek,
      handleWorkweekToggle,
    }
    
    //console.log('[RoutineContext]', contextValues);

    return(
        <RoutineContext.Provider value={contextValues}>
            <Fragment>
              {children}
            </Fragment>
        </RoutineContext.Provider>
      )
}

export default RoutineContextProvider