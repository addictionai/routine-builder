import { Fragment, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
// UI
import { makeStyles } from '@material-ui/core/styles';
import { FONT_COLOR_SECONDARY, COLOR_LINK } from '../../styles/dark';
import { Button } from '@material-ui/core';

// Components
import StaffButton from './FilterButtons';

// Data
import { userData } from '../../config';
import { RoutineContext } from '../../context/RoutineContext';

const Filters = ({setup}) => {
    
    const { handleActivityFilter, handleStaffFilter } = useContext(RoutineContext);
    const classes = useStyles();
 
    const isRoutine = setup === 'routine';
    const isTransport = setup === 'transport';
    const displayFilters = isTransport || isRoutine;

    const StaffPicker = useMemo(() => ({staff}) => (
        <StaffButton staff={staff} />
    ), []);

    return (
        <Fragment>
            {displayFilters && 
                <div className={classes.filters}>
                {isTransport && 
                <Fragment>
                    Filter by Staff
                    {userData.staff.map(staff => <StaffPicker key={staff._id} staff={staff} />)}
                    <Button onClick={() => handleStaffFilter(null)}>All</Button>
                </Fragment>
                }
                {isRoutine && 
                <Fragment>
                    Filter by Type
                    <Button onClick={() => handleActivityFilter('call')}>Call</Button>
                    <Button onClick={() => handleActivityFilter('recovery')}>Recovery</Button>
                    <Button onClick={() => handleActivityFilter('personal')}>Personal</Button>
                    <Button onClick={() => handleActivityFilter(null)}>All</Button>
                </Fragment>
                }
                </div>
            }
        </Fragment>
    )
}

Filters.propTypes = {
    setup: PropTypes.string.isRequired,
}

export default Filters;

const useStyles = makeStyles({
    filters: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 8,
        color: FONT_COLOR_SECONDARY,
        fontSize: '1.1rem',
        fontWeight: 600,
        fontFamily: 'Helvetica, sans-serif',
        "& Button": {
            marginLeft: 10,
            fontFamily: 'Helvetica, sans-serif',
            textTransform: 'none',
            fontSize: '0.9rem',
            fontWeight: 800,
            color: COLOR_LINK,
        },
    },
});