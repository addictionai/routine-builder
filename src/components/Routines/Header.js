import React from 'react'
import PropTypes from 'prop-types'

// UI
import { COLOR_LINK, FONT_COLOR_MAIN } from '../../styles/dark';
import { makeStyles } from '@material-ui/core/styles'; 

// Components
import DateSelect from './DateSelect';
import Filters from './Filters';

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        fontWeight: 600,
        fontSize: '1.2rem',
        fontFamily: 'Helvetica, sans-serif',
        color: FONT_COLOR_MAIN,
        "& Button": {
            color: COLOR_LINK,
        },
    },
});

const Header = ({setup}) => {

    const classes = useStyles();

    const dateSelectProps = {
        showDateRange: true,
        showNavScroll: true,
        showNavToday: true,
    }

    return (
        <div className={classes.header}>
            <DateSelect {...dateSelectProps}/>
            <Filters setup={setup} />
        </div>
    )
}

Header.propTypes = {
    setup: PropTypes.string.isRequired,
}

export default Header
