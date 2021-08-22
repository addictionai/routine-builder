import PropTypes from 'prop-types'

// UI
import cn from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
    avatar: { borderRadius: '50%' },
    small: { height: 25, width: 25 },
    medium: { height: 50, width: 50 },
    large: { height: 75, width: 75 },
});

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
