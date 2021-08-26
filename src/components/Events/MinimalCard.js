import PropTypes from 'prop-types'
import moment from 'moment';

// UI
import { makeStyles} from '@material-ui/core/styles'

// Components
import MemberCard from '../Member/MemberCard'

// Data
import { userData } from '../../config';

const EventCard = ({
    _id, 
    memberId, 
    timeStart,
}) => {

    const classes = useStyles();
    
    const member = userData.members.find(m => m._id === memberId);

    const memberCardProps = {
        firstName: member?.firstName,
        lastName: member?.lastName,
        photo: member?.photo,
        size: 'medium',
        showName: true,
        rtl: true,
    }

    return (
        <div className={classes.event}>
            <div className={classes.eventTime}>
                <div className={classes.time}>{moment(timeStart).format('LT')}</div>
            </div>
            <div className={classes.memberCard}>
                <MemberCard {...memberCardProps} />
            </div>
        </div>
    )
}

EventCard.propTypes = {
    _id: PropTypes.string, 
    memberId: PropTypes.string, 
    timeStart: PropTypes.string, 
}

export default EventCard

const useStyles = makeStyles({
    event: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    eventTime: {
        display: 'flex',
        padding: 8,
        fontWeight: '600',
    },
    time: { fontSize: '1.1rem' },
    memberCard: { 
        padding: 8
    }
})