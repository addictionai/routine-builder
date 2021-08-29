import PropTypes from 'prop-types'

// UI
import cn from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const MemberAvatar = ({firstName, lastName, photo, size = 'medium'}) => {

    const classes = useStyles();
    const avatarClasses = cn(classes.avatar, classes[size]);

    const hasName = !!firstName && !!lastName;

    const displayName = hasName ? `${firstName} ${lastName?.[0]}.` : null;
    const avatarInitials = hasName ? `${firstName?.[0]}${lastName?.[0]}` : null;
    

    return (
        <Avatar src={photo} className={avatarClasses} alt={`Avatar for ${displayName}`}>
            {avatarInitials}
        </Avatar>
    )
}

MemberAvatar.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    photo: PropTypes.string,
    size: PropTypes.string,
}

export default MemberAvatar;

const useStyles = makeStyles({
    avatar: { 
        border: '2px solid rgba(255,255,255,0.6)',
    },
    small: { height: 30, width: 30 },
    medium: { height: 40, width: 40 },
    large: { height: 75, width: 75 },
});
