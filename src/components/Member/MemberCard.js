import PropTypes from 'prop-types'

// UI
import { makeStyles } from '@material-ui/core/styles';

// Components 
import MemberAvatar from './MemberAvatar';

const useStyles = makeStyles({
    member: {
        display: 'flex',
        alignItems: 'center',
        margin: '5px 0',
        fontFamily: 'Helvetica, sans-serif',
    },
    memberDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    memberLocation: {
        fontSize: '0.8rem',
    },
    avatar: { marginRight: 10 },
});

const MemberCard = ({firstName, lastName, photo, location, size = 'medium'}) => {

    const classes = useStyles();

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
            <div>{displayName}</div>
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
}

export default MemberCard
