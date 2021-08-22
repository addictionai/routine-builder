import PropTypes from 'prop-types'
import moment from 'moment';

// UI
import cn from 'classnames';
import { makeStyles} from '@material-ui/core/styles'

// Components
import MemberCard from '../Member/MemberCard'
import DestinationCard from './DestinationCard'

// Data - Temporary
import { memberData, staffData } from '../../dataTransport';

const useStyles = makeStyles({
    event: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        padding: 3,
        minHeight: 65,
        borderRadius: 8,
        backgroundColor: '#fff',
        color: '#1F3040',
        fontSize: '0.9rem',
        fontFamily: 'Helvetica, sans-serif',
        boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
    },
    eventDetails: {
        padding: '0 5px',
    },
    eventTime: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 8,
        fontWeight: '600',
    },
    time: { fontSize: '1.1rem' },
    status: { 
        height: 15,
        padding: '2px 10px',
        borderRadius: 10,
        backgroundColor: '#ddd',
        color: '#333',
        fontSize: '0.8rem',
    },
    completed: { backgroundColor: 'lightgreen' },
    assigned: { backgroundColor: 'lightblue' },
    missed: { backgroundColor: 'lightpink' },
    denied: { backgroundColor: 'lightpink' },
    assignedTo: {
        display: 'flex',
        alignItems: 'center',
        padding: '2px 5px',
        borderRadius: '0 0 8px 8px',
        backgroundColor: 'rgba(221, 230, 243, 0.6)',
    },
    assignedText: {
        padding: 5,
        marginRight: 5,
        fontSize: '0.8rem',
        fontWeight: 600,
    }
})

const EventCard = ({
    _id, 
    status, 
    memberId, 
    staffId,
    destinationType,
    destination, 
    timeStart,
}) => {

    const classes = useStyles();

    // Replace with Query
    const member = memberData.find(m => m._id === memberId);
    const staff = staffData.find(m => m._id === staffId)

    const memberCardProps = {
        firstName: member?.firstName,
        lastName: member?.lastName,
        photo: member?.photo,
        location: member?.location,
    }

    const staffCardProps = {
        firstName: staff?.firstName,
        lastName: staff?.lastName,
        photo: staff?.photo,
    }

    const destinationCardProps = {
        destination,
        destinationType,
    }

    const statusClass = cn(classes.status, classes[status]);

    const AssignedToStaff = ({staff}) => {
        return (
        <div className={classes.assignedTo}>
            <MemberCard {...staff} size="small" />
        </div>
        )
    };

    return (
        <div className={classes.event}>
            <div className={classes.eventTime}>
                <div className={classes.time}>{moment(timeStart).format('LT')}</div>
                <div className={statusClass}>{status}</div>
            </div>
            <div className={classes.eventDetails}>
                <MemberCard {...memberCardProps} size="medium" />
                <DestinationCard {...destinationCardProps} />
            </div>
            {status !== 'denied' && <AssignedToStaff staff={staffCardProps} />}
        </div>
    )
}

EventCard.propTypes = {
    _id: PropTypes.string, 
    status: PropTypes.string, 
    memberId: PropTypes.string, 
    staffId: PropTypes.string,
    destinationType: PropTypes.string,
    destination: PropTypes.string, 
    timeStart: PropTypes.string, 
}

export default EventCard
