import { useMemo } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

// Util
import { getWeekRange, getEventsForDate, sortEvents } from '../../helpers/dateHelpers';
import { processFilters } from '../../helpers/filterHelpers';

// UI
import { makeStyles } from '@material-ui/core/styles';

// Context 
import useRoutineContext from '../../context/useRoutineContext';

// Components
import {EventCardDraggable} from '../Events/ActivityCard';
import RequestEventCard from '../Events/RequestCard';
import MinimalEventCard from '../Events/MinimalCard';

// DnD
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// Dynamic Components
const eventCards = {
    activity: EventCardDraggable,
    request: RequestEventCard,
    default: MinimalEventCard,
}

const WeekView = ({eventType}) => {
    
    const { start, workweek, eventsData, hasFilters, filterFunction, handleDragShift, handleModifyEvent  } = useRoutineContext();
    const classes = useStyles({days: workweek ? 5 : 7});

    const weekDays =  useMemo(() => getWeekRange(start, 'YYYY-MM-DD', workweek), [start, workweek]);

    const onDragEnd = (result) => {
       
        const { destination, source, draggableId } = result;

        if (!destination) return;
        if (destination.droppableId === source.droppableId) return;

        const dayShift = destination.droppableId - source.droppableId;

        const eventData = eventsData.find(event => event._id === draggableId);
        const newDate = handleDragShift(eventData.timeStart, dayShift, 'day').format()
        const modifiedEvent = {
            ...eventData,
            timeStart: newDate,
        }

        handleModifyEvent(modifiedEvent);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd} >
            <div className={classes.routineContainer}>
                {weekDays.map((date, index) => {
                    const eventsForDate = getEventsForDate(eventsData, date);
                    const sortedEvents = sortEvents(eventsForDate, 'timeStart');    
                    const filteredEvents = processFilters(sortedEvents, hasFilters, filterFunction);
                    const dataToRender = hasFilters ? filteredEvents : sortedEvents;

                return (
                    <DayColumn 
                    key={date} 
                    date={date} 
                    events={dataToRender} 
                    eventType={eventType} 
                    limit={8}
                    index={index}
                    />
                )
        })}
            </div>
        </DragDropContext>
    
    )
}

WeekView.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    range: PropTypes.shape({
        startDate: PropTypes.object.isRequired,
        workweek: PropTypes.bool,
    }),
    eventType: PropTypes.string,
}

export default WeekView

// Grid Components
const DayColumn = (props) => {
    const classes = useStyles();
    const {date = Date.now(), events = [], limit = 8, eventType, index } = props;

    return (
    <div className={classes.day}>
        <DayHeader date={date} />
        <DayBody events={events} limit={limit} type={eventType} id={index} />
    </div>
    )
}

const DayHeader = (props) => {
    const classes = useStyles();
    const {date = Date.now()} = props;
    
    const day = moment(date).format('ddd');
    const dateNumber = moment(date).format('DD');

    return (
        <div className={classes.dayHeader}>
            {day} <span className={classes.dateText}>{dateNumber}</span>
        </div> 
    )
}

const DayBody = (props) => {
    const classes = useStyles();
    const {events, limit, type, id} = props;

    const EventCard = eventCards[type] || eventCards.default;

    const droppableId = id.toString();

    return (
        <Droppable droppableId={droppableId}>
        {(provided) => (
            <div 
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={classes.dayBody}
                >
                {events
                    .filter((_,index) => index < limit)
                    .map((event, index) => <EventCard key={`${event._id}_${index}`} index={index} type={type} {...event} />)
                }
                {provided.placeholder}
            </div>
        )}

        </Droppable>
    
    )    
}


// Styles
const useStyles = makeStyles({
    routineContainer: {
        display: 'grid',
        gridTemplateColumns: props => `repeat(${props.days}, minmax(150px, 1fr))`,
        gridTemplateRows: '1fr',
        borderRadius: 8,
        boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
        fontFamily: 'Helvetica, sans-serif',
    },
    day: {
        display: 'grid',
        gridTemplateRows: '65px minmax(550px, 1fr)',
        borderLeft: '1px solid #DADEE5',
        '&:first-child': { borderLeft: 'none' },
        '&:first-child $dayHeader': { borderRadius: '8px 0 0 0' },
        '&:first-child $dayBody': { borderRadius: '0 0 0 8px' },
        '&:last-child $dayHeader': {borderRadius: '0 8px 0 0' },
        '&:last-child $dayBody': { borderRadius: '0 0 8px 0' },
    },
    dayHeader: {
        display: 'flex',
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#F3F6F9',
        borderBottom: '1px solid #DADEE5',
        color: '#1F3040',
        fontWeight: 300,
        fontSize: '0.8rem',
    },
    dateText: {
        fontWeight: 600,
        fontSize: '1.7rem',
    },
    dayBody: { 
        padding: 0,
        backgroundColor: '#fff' 
    },
});