import { Fragment } from 'react';
import PropTypes from 'prop-types'

// Context
import RoutineContextProvider from '../../context/RoutineContext';

// Components
import Header from './Header';
import WeekView from './WeekView';

const Routines = ({data, range, setup, eventType}) => {

    console.log('[Routines] Builder Setup:', setup)

    return (
    <RoutineContextProvider value={{setup}}>
        <Fragment>
            <Header setup={setup} hasFilters={true} />
            <WeekView data={data} eventType={eventType} range={range} />
        </Fragment>
    </RoutineContextProvider>
    )
}

Routines.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    setup: PropTypes.string.isRequired,
    eventType: PropTypes.string,
}

export default Routines;
