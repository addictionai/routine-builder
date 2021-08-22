import {Fragment, createContext, useEffect, useState} from 'react';

export const RoutineContext = createContext({});

const RoutineContextProvider = ({children, value}) => {
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [routineType, setRoutineType] = useState(value.setup);
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
    const activityFilter = event => event.category === selectedActivity;
    const staffFilter = event => event.staffId === selectedStaff && event.status !== 'denied';
    const noFilter = event => event;
    const filterFunction = isRoutine ? activityFilter : isTransport ? staffFilter : noFilter;

    // Export
    const contextValues = {
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