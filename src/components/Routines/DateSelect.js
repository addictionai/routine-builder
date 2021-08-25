import {useContext} from 'react'
import PropTypes from 'prop-types'

// Data
import { RoutineContext } from '../../context/RoutineContext';
import { startDate, endDate } from '../../helpers/dateHelpers';

// UI
import { Button, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { FONT_COLOR_SECONDARY } from '../../styles/dark';

const DateSelect = ({showDateRange, showNavScroll, showNavToday}) => {
    
    const {start, handleDateShift, handleDateChange} = useContext(RoutineContext);
    const classes = useStyles();

    const displayStart = startDate(start).format('MMM DD');
    const displayEnd = endDate(start).format('MMM DD, YYYY')

    return (
    <div className={classes.dateHeader}>
        {showNavToday && 
        <div className={classes.dateNav}>
            <Button onClick={() => handleDateChange(Date.now())}>Today</Button>
        </div>
        }
        {showNavScroll &&
        <div className={classes.dateScroll}>    
            <IconButton onClick={() => handleDateShift(-1, 'week')} aria-label="refresh" children={<ChevronLeftIcon />} />
            <IconButton onClick={() => handleDateShift(1, 'week')} aria-label="refresh" children={<ChevronRightIcon />} />
        </div>
        }
        {showDateRange && <div className={classes.dateRange}>{`${displayStart} - ${displayEnd}`}</div>}
    </div>
    )
}

DateSelect.propTypes = {
    start: PropTypes.string,
    showDateRange: PropTypes.bool,
    showNavScroll: PropTypes.bool,
    showNavToday: PropTypes.bool,
}

export default DateSelect


const useStyles = makeStyles({
    dateHeader: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 600,
        fontSize: '1.2rem',
        fontFamily: 'Helvetica, sans-serif',
    },
    dateNav: {
        "& Button": {
            fontWeight: 800,
            fontSize: '1rem',
            fontFamily: 'Helvetica, sans-serif',
            textTransform: 'none',
        },
    },
    dateScroll: {
        "& Button": {
            padding: 8,
            color: FONT_COLOR_SECONDARY,
        }
    },
    dateRange: {
        padding: '12px 8px', // offset Button padding
    }
});