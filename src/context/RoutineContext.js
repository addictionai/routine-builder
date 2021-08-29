import {Fragment, createContext, useEffect, useState, useCallback} from 'react';
import { nanoid } from 'nanoid';
import moment from 'moment';

// Setup
import { config } from '../config';
import { useEffectAfterMount } from '../utils/hooks';

export const RoutineContext = createContext({});

const RoutineContextProvider = ({children, value}) => {

    // Setup
    const { setup } = value;
    const isRoutine = setup === 'routine';
    const isTransport = setup === 'transport';
    const today = moment().format('YYYY-MM-DD');
    
    // State
    const [start, setStart] = useState(today);
    const [eventsData, setEventsData] = useState([]);
    const [routineType, setRoutineType] = useState(setup);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [workweek, setWorkweek] = useState(false);

    // Loaders
    useEffect(() => {
      loadData(setup)

      // Reset Filters
      if(setup === 'routine') setSelectedStaff(null);
      if(setup === 'transport') setSelectedActivity(null);

      return () => console.log('[RoutineContext] Changing setup');
    }, [setup])
    
    useEffectAfterMount(() => {
      console.log('[RoutineContext] eventData set to:', eventsData);
    }, [eventsData])

    // Filters
    const hasFilters = !!selectedActivity || !!selectedStaff;
    const noFilter = event => event;
    const activityFilter = event => event.category === selectedActivity;
    const staffFilter = event => event.staffId === selectedStaff && event.status !== 'denied';
    const filterFunction = isRoutine ? activityFilter : isTransport ? staffFilter : noFilter;
    
    // Handlers: Filters
    const handleStaffFilter = useCallback((id) => {
      if (selectedStaff !== id) setSelectedStaff(id)
    }, [selectedStaff, setSelectedStaff]);

    const handleActivityFilter = useCallback((type) => {
      if(selectedActivity !== type) setSelectedActivity(type);
    }, [selectedActivity, setSelectedActivity]);

    // Handlers: Data
    const loadData = async (type) => {
      setEventsData(config?.[type].data);
    }
    const handleAddEvent = (event) => {
      const newEventData = isRoutine ? newEvent : isTransport ? newRequest : {};
      setEventsData(prevData => [...prevData, newEventData]);
      console.log('RoutineContext] event added:', newEventData)
    }

    const handleModifyEvent = (modifiedEvent) => {
      setEventsData(prevData => prevData.map(event => event._id === modifiedEvent._id ? modifiedEvent : event))
    }

    // Handlers: Dates
    const handleDateShift = (amount = 1, unit = 'week') => {
      const newDate = moment(start).add(amount, unit);
      setStart(prevState => newDate);
    }
    const handleDragShift = (startDate, amount = 1, unit = 'day') => {
      const newDate = moment(startDate).add(amount, unit);
      return newDate;
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
      eventsData,
      handleAddEvent,
      selectedStaff,
      setSelectedStaff,
      selectedActivity,
      setSelectedActivity,
      handleStaffFilter,
      handleActivityFilter,
      routineType,
      setRoutineType,
      isRoutine,
      isTransport,
      hasFilters,
      filterFunction,
      handleDateChange,
      handleDateShift,
      workweek,
      handleWorkweekToggle,
      handleDragShift,
      handleModifyEvent,
    }
    
    //console.log('[RoutineContext]', contextValues);

    return (
        <RoutineContext.Provider value={contextValues}>
            <Fragment>
              {children}
            </Fragment>
        </RoutineContext.Provider>
      )
}

export default RoutineContextProvider


// Temporary: New Event Data
const newEvent = {
  _id: nanoid(10),
  status: 'scheduled',
  invitedMembers: ['1'],
  driverId: '2',
  category: 'recovery',
  eventType: 'Coach',
  eventName: 'Career Planning',
  timeStart: '2021-08-25T10:00:00',
}

const newRequest = {
  _id: nanoid(10),
  status: 'pending',
  memberId: '1',
  staffId: '2',
  destinationType: 'Work',
  destination: 'Starbucks',
  timeStart: '2021-08-26T17:00:00',
}
