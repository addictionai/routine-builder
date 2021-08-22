import {useState} from 'react';

// Data
import { title as routineTitle, events as routineEvents } from './data';
import { title as transportTitle, events as transportEvents } from './dataTransport';
import { startDate, endDate } from './helpers/dateHelpers';

// Components
import Routines from './components/Routines/Routines';

// UI
import { Button, IconButton } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0, bottom: 0, 
    left: 0, right: 0,
    padding: 25,
    backgroundImage: 'linear-gradient(135deg, #245C98 30%, #3269A5 70%)',
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
    fontWeight: 600,
    fontSize: '1.2rem',
    color: '#fff',
    padding: '0 10px',
  },
  configSetup: {
    "& Button": {
      color: '#fff',
      borderColor: 'lightblue',
      fontWeight: 800,
      marginLeft: 10,
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
    color: 'lightblue'
  }
});

const App = () => {

  const classes = useStyles();
  const [start, setStart] = useState(Date.now())
  const [type, setType] = useState('routine')

  const handleRefresh = () => {
    setStart(Date.now());
    console.log('[Routines] Refetching data...')
  }

  const handleSetupTransport = () => {
    setType(type => 'transport')
  }

  const handleSetupRoutines = () => {
    setType(type => 'routine')
  }

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
          <div>{config?.[type].title}: {startDate(start).format('MMM DD')} - {endDate(start).format('MMM DD, YYYY')}</div>
          <div className={classes.configSetup}>
            <IconButton onClick={handleRefresh} aria-label="delete" children={<RefreshIcon />} />
            <Button variant="outlined" onClick={handleSetupRoutines}>Routines</Button>
            <Button variant="outlined" selected onClick={handleSetupTransport}>Transport</Button>
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
