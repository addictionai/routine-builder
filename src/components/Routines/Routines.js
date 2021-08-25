import { Fragment } from 'react';
import PropTypes from 'prop-types'

// Context
import RoutineContextProvider from '../../context/RoutineContext';

// Components
import Header from './Header';
import WeekView from './WeekView';

// Setup
import { config } from '../../config';

const Routines = ({range, setup}) => {

    const headerProps = {
        setup,
        hasFilters: true,
    };

    const weekViewProps = {
        data: config?.[setup].data,
        eventType: config?.[setup].eventType,
        range: range,
    };

    console.log('[Routines] Builder Setup:', setup)

    return (
    <RoutineContextProvider value={{setup}}>
        <Fragment>
            <Header {...headerProps} />
            <WeekView {...weekViewProps} />
        </Fragment>
    </RoutineContextProvider>
    )
}

Routines.propTypes = {
    setup: PropTypes.string.isRequired,
}

export default Routines;
