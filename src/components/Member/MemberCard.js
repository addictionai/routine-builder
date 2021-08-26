import PropTypes from 'prop-types'

// UI
import { makeStyles } from '@material-ui/core/styles';

// Components 
import MemberAvatar from './MemberAvatar';

const useStyles = makeStyles({
    member: {
        display: 'flex',
        flexDirection: props => !!props.rtl ? 'row-reverse' : 'row',
        alignItems: 'center',
        margin: '5px 0',
        fontFamily: 'Helvetica, sans-serif',
        color: '#1F3040',
    },
    memberDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 10,
    },
    name: {
        fontSize: '0.95rem',
        fontWeight: 400,
    },
    memberLocation: {
        color: '#8C9AA7',
        fontSize: '0.8rem',
    },
});

const MemberCard = ({firstName, lastName, photo, location, size = 'medium', showName = true, rtl = false}) => {

    const classes = useStyles({rtl});
    const displayName = `${firstName} ${lastName?.[0]}.`

    const avatarProps = {
        size,
        photo,
        firstName,
        lastName,
    }

    return (
    <div className={classes.member}>
        <div className={classes.avatar}>
            <MemberAvatar {...avatarProps} />
        </div> 
        <div className={classes.memberDetails}>
            {showName ? <div className={classes.name}>{displayName}</div> : null}
            {!!location ? <div className={classes.memberLocation}>{location}</div> : null}
        </div>
    </div>
    )
}

MemberCard.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photo: PropTypes.string,
    location: PropTypes.string,
    size: PropTypes.string,
    showName: PropTypes.bool,
    rtl: PropTypes.bool,
}

export default MemberCard
