import PropTypes from 'prop-types'

// UI
import { makeStyles } from '@material-ui/core/styles'
import pin from '../../assets/pin.png'

const useStyles = makeStyles({
    destination: {
        display: 'flex',
        alignItems: 'center',
        padding: 5,
        fontWeight: 600,
        fontFamily: 'Helvetica, sans-serif',
    },
    destinationText: {
        fontSize: '0.9rem',
    },
    mapPin: {
        width: 15,
        marginRight: 10,
        opacity: 0.75,
    },
});

const DestinationCard = ({destinationType, destination}) => {
    
    const classes = useStyles();
    return (
        <div className={classes.destination}>
            <img src={pin} className={classes.mapPin} alt="Map Pin" />
            <div className={classes.destinationText}>{`${destinationType} - ${destination}`}</div>
        </div>
    )
}

DestinationCard.propTypes = {
    destinationType: PropTypes.string,
    destination: PropTypes.string,
}

export default DestinationCard
