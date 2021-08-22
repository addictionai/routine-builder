import PropTypes from 'prop-types'
import moment from 'moment';

// UI
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
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
    date: {
        fontWeight: 600,
        fontSize: '1.6rem',
    },
})

const DayHeader = (props) => {

    const classes = useStyles();

    const {date = Date.now()} = props;
    const day = moment(date).format('ddd');
    const dateNumber = moment(date).format('DD');

    return (
        <div className={classes.dayHeader}>
            {day} <span className={classes.date}>{dateNumber}</span>
        </div> 
    )
}


DayHeader.propTypes = {
    date: PropTypes.string,
}

export default DayHeader
