import PropTypes from 'prop-types'
import moment from 'moment';

// Date
import { getWeekRange, getEventsForDate, sortEvents } from '../../helpers/dateHelpers';

// UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import ActivityEventCard from '../Events/ActivityCard';
import RequestEventCard from '../Events/RequestCard';

const useStyles = makeStyles({
    routineContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, minmax(150px, 1fr))',
        gridTemplateRows: '1fr',
        borderRadius: 8,
        boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
        fontFamily: 'Helvetica, sans-serif',
    },
    day: {
        display: 'grid',
        gridTemplateRows: '65px minmax(450px, 1fr)',
        borderLeft: '1px solid #ccc',
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
        backgroundColor: '#eee',
        borderBottom: '1px solid #ccc',
        fontWeight: 300,
        fontSize: '0.8rem',
    },
    dateText: {
        fontWeight: 600,
        fontSize: '1.6rem',
    },
    dayBody: { backgroundColor: '#fff' },
});

const Routines = ({data, range, setup, eventType}) => {
    console.log('[Routines] Builder setup:', setup)
    
    const classes = useStyles();
    const startDate = range.startDate.format('YYYY-MM-DD');
    const weekDays = getWeekRange(startDate, 'YYYY-MM-DD');
    
    return (
    <div className={classes.routineContainer}>
        {weekDays.map(date => {
            const eventsForDate = getEventsForDate(data, date);
            const sortedEvents = sortEvents(eventsForDate, 'timeStart');
            return (
                <DayColumn 
                    key={date} 
                    date={date} 
                    events={sortedEvents} 
                    eventType={eventType} 
                    limit={8}
                />
            )
        })}
    </div>
    )
}

Routines.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    range: PropTypes.shape({
        startDate: PropTypes.object.isRequired,
        endDate: PropTypes.object.isRequired,
    }),
    setup: PropTypes.string.isRequired,
    eventType: PropTypes.string,
}

export default Routines;


// Grid Components
const DayColumn = (props) => {
    const classes = useStyles();
    const {date = Date.now(), events = [], limit = 8, eventType } = props;

    return (
    <div className={classes.day}>
        <DayHeader date={date} />
        <DayBody events={events} limit={limit} type={eventType} />
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
    const {events, limit, type} = props;

    const EventCard = (props) => {
        if(type === 'request') return <RequestEventCard {...props} />
        if(type === 'activity') return <ActivityEventCard {...props} />
        return null;
    }

    return (
    <div className={classes.dayBody}>
        {events
            .filter((_,index) => index < limit)
            .map(event => <EventCard {...event} key={event._id} />)
        }
    </div>
    )    
}