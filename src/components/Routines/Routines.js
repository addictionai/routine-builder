import { Fragment } from 'react';
import PropTypes from 'prop-types'

// Context
import RoutineContextProvider from '../../context/RoutineContext';

// Components
import Filters from './Filters';
import WeekView from './WeekView';

const Routines = ({data, range, setup, eventType}) => {

    console.log('[Routines] Builder Setup:', setup)

    return (
    <RoutineContextProvider value={{setup}}>
        <Fragment>
            <Filters setup={setup} />
            <WeekView data={data} eventType={eventType} range={range} />    
        </Fragment>
    </RoutineContextProvider>
    )
}

Routines.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    range: PropTypes.shape({
        startDate: PropTypes.object.isRequired,
        endDate: PropTypes.object.isRequired,
    }),
    setup: PropTypes.string.isRequired,
    eventType: PropTypes.string,
}

export default Routines;
