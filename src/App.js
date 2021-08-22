import {useState} from 'react';

// Data
import { title as routineTitle, events as routineEvents } from './data';
import { title as transportTitle, events as transportEvents } from './dataTransport';
import { startDate, endDate } from './helpers/dateHelpers';

// Components
import Routines from './components/Routines/Routines';

// UI
import { 
  BACKGROUND_COLOR, 
  FONT_COLOR_MAIN, 
  FONT_COLOR_SECONDARY, 
  COLOR_LINK, 
} from './styles/dark';
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import RefreshIcon from '@material-ui/icons/Refresh';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0, bottom: 0, 
    left: 0, right: 0,
    padding: 15,
    background: BACKGROUND_COLOR,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '75px 1fr 50px',
    height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
    fontWeight: 600,
    fontSize: '1.2rem',
    color: FONT_COLOR_MAIN,
    "& Button": {
      color: FONT_COLOR_SECONDARY,
    },
  },
  headerMain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateRange: {  
    marginLeft: 50,
  },
  configSetup: {
    "& Button": {
      marginLeft: 10,
      borderColor: 'transparent',
      color: COLOR_LINK,
      fontWeight: 800,
      fontSize: '0.9rem',
      fontFamily: 'Helvetica, sans-serif',
      textTransform: 'none',
    },
  },
  body: {
    margin: 10,
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 10,
    color: FONT_COLOR_SECONDARY,
  },
});

const App = () => {

  const classes = useStyles();
  const [start, setStart] = useState(Date.now())
  const [type, setType] = useState('routine')

  const handleRefresh = () => {
    setStart(Date.now());
    console.log('[Routines] Refetching data...')
  }

  const handleSetupTransport = () => setType(prevType => 'transport');
  const handleSetupRoutines = () => setType(prevType => 'routine');

  const config = {
    'routine': {
      title: routineTitle,
      data: routineEvents,
      eventType: 'activity',
    },
    'transport': {
      title: transportTitle,
      data: transportEvents,
      eventType: 'request',
    },
  };

  const routineProps = {
    setup: type,
    data: config?.[type].data,
    eventType: config?.[type].eventType,
    range: {
      startDate: startDate(start),
      endDate: endDate(start),
    },
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.headerMain}>
            <div>
              <IconButton onClick={null} aria-label="home" children={<EventIcon />} />
              {config?.[type].title}
            </div>
            <div className={classes.dateRange}>
              {startDate(start).format('MMM DD')} - {endDate(start).format('MMM DD, YYYY')}
              <IconButton onClick={handleRefresh} aria-label="refresh" children={<ExpandMoreIcon />} />
            </div>
          </div>
          <div className={classes.configSetup}>
            <IconButton onClick={handleRefresh} aria-label="refresh" children={<RefreshIcon />} />
            <Button variant="outlined" aria-label="routines-view" onClick={handleSetupRoutines}>Routines</Button>
            <Button variant="outlined" aria-label="transport-view" onClick={handleSetupTransport}>Transport</Button>
          </div>
        </div>
        <div className={classes.body}>
          <Routines {...routineProps} />
        </div>
        <div className={classes.footer}>
          Routine Builder &copy; 2021 inRecovery
        </div>
      </div>
    </div>
  );
}

export default App;
