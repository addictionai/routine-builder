import PropTypes from 'prop-types'
import moment from 'moment'

// UI
import cn from 'classnames'
import { makeStyles} from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

// Components
import MemberAvatar from '../Member/MemberAvatar'

// Data - Temporary
import { memberData } from '../../data'

const useStyles = makeStyles({
    event: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        padding: 5,
        minHeight: 65,
        borderRadius: 8,
        backgroundColor: '#fff',
        boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)',
        fontSize: '0.9rem',
        fontFamily: 'Helvetica, sans-serif',
    },
    eventDetails: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        padding: '5px 10px',
        color: '#fff',
        backgroundColor: '#777',
        borderRadius: '8px 8px 0 0',
    },
    type: { 
        textTransform: 'capitalize',
        fontWeight: '600',
    },
    call: { backgroundColor: 'rgba(138,67,136,1)'},
    recovery: { backgroundColor: '#205586' },
    personal: { backgroundColor: '#1a9f2c' },
    eventTime: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: '600',
        padding: 5,
    },
    time: { fontSize: '1rem' },
    status: { 
        borderRadius: 10,
        height: 15,
        padding: '2px 10px',
        backgroundColor: '#ddd',
        fontSize: '0.8rem',
        color: '#333',
    },
    completed: { backgroundColor: 'lightgreen' },
    scheduled: { backgroundColor: 'lightblue' },
    cancelled: { backgroundColor: 'lightpink' },
    assignedTo: {
        display: 'flex',
        alignItems: 'center',
        padding: '2px 5px',
        borderTop: '1px solid rgba(221, 230, 243, 1)',
        borderRadius: '0 0 8px 8px',
        backgroundColor: 'rgba(221, 230, 243, 0.5)',
    },
    assignedText: {
        fontSize: '0.8rem',
        fontWeight: 600,
        padding: 5,
        marginRight: 5,
    },
    button: {
        color: '#3269A5',
        fontFamily: 'sans-serif',
        textTransform: 'lowercase',
    }
})

const EventCard = ({
    _id, 
    status, 
    category,
    memberId = 1,
    eventType,
    eventName, 
    timeStart,
    avatarSize = "small",
}) => {

    const classes = useStyles();

    const hasInvitedMembers = true;
    const member = memberData.find(m => m._id === memberId);

    const avatarProps = {
        size: avatarSize,
        photo: member?.photo,
        firstName: member?.lastName,
        lastName: member?.lastName,
    }

    const InvitedMembers = () => {
        return <MemberAvatar {...avatarProps} />
    }

    const eventDetailsClass = cn(classes.eventDetails, classes[category]);

    return (
        <div className={classes.event}>
            <div className={eventDetailsClass}>
                <div>
                    <div className={classes.type}>{eventType}</div>
                    <div>{eventName}</div>
                </div>
                {hasInvitedMembers && <InvitedMembers />}
            </div>
            <div className={classes.eventTime}>
                <div className={classes.time}>{moment(timeStart).format('LT')}</div>
                <Button className={classes.button} size="small">Change</Button>
            </div>
        </div>
    )
}

EventCard.propTypes = {
    _id: PropTypes.string, 
    status: PropTypes.string, 
    memberId: PropTypes.string, 
    category: PropTypes.string,
    eventType: PropTypes.string,
    eventName: PropTypes.string, 
    timeStart: PropTypes.string,
    avatarSize: PropTypes.string,
}

export default EventCard
