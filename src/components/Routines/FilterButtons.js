import PropTypes from 'prop-types'

// Data
import useRoutineContext from '../../context/useRoutineContext';

// UI
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

// Components
import MemberAvatar from '../Member/MemberAvatar';

const StaffButton = ({staff}) => {

    const { handleStaffFilter } = useRoutineContext();
    const classes = useStyles();

    return (
    <Button onClick={() => handleStaffFilter(staff._id)}>
        <div className={classes.avatar}><MemberAvatar {...staff} /></div> 
        {staff.firstName}
    </Button>
    )
};

export default StaffButton;

StaffButton.propTypes = {
    staff: PropTypes.object.isRequired,
}

const useStyles = makeStyles({
    avatar: {
        marginRight: 10,
    },  
});