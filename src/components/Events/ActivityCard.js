import PropTypes from 'prop-types'
import moment from 'moment'
import { Draggable } from 'react-beautiful-dnd';

// UI
import cn from 'classnames'
import { makeStyles} from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

// Components
import MemberAvatar from '../Member/MemberAvatar'

// Data
import { userData } from '../../config'

const EventCard = ({
    _id, 
    status, 
    category,
    memberId = 1,
    eventType,
    eventName, 
    timeStart,
    showAvatars = true,
    avatarSize = "small",
    id
}) => {

    const classes = useStyles();

    const hasInvitedMembers = showAvatars;
    const member = userData.members.find(m => m._id === memberId);

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
        <Draggable
            draggableId={id}
        >
            {(provided) => (
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
            )}
        </Draggable>
        
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
    showAvatars: PropTypes.bool,
    avatarSize: PropTypes.string,
}

export default EventCard

const useStyles = makeStyles({
    event: {
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        padding: 3,
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
    call: { backgroundColor: '#8A4388'},
    recovery: { backgroundColor: '#386FA4' },
    personal: { backgroundColor: '#2AAF6F' },
    eventTime: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        color: '#1F3040',
        fontWeight: '600',
    },
    time: { fontSize: '1rem' },
    status: { 
        height: 15,
        padding: '2px 10px',
        borderRadius: 10,
        backgroundColor: '#ddd',
        color: '#333',
        fontSize: '0.8rem',
    },
    completed: { backgroundColor: 'lightgreen' },
    scheduled: { backgroundColor: 'lightblue' },
    cancelled: { backgroundColor: 'lightpink' },
    assignedTo: {
        display: 'flex',
        alignItems: 'center',
        padding: '2px 5px',
        borderRadius: '0 0 8px 8px',
        borderTop: '1px solid rgba(221, 230, 243, 1)',
        backgroundColor: 'rgba(221, 230, 243, 0.5)',
    },
    assignedText: {
        padding: 5,
        marginRight: 5,
        fontWeight: 600,
        fontSize: '0.8rem',
    },
    button: {
        color: '#3269A5',
        fontFamily: 'sans-serif',
        textTransform: 'capitalize',
    }
})