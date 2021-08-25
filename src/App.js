import {useState} from 'react';

// Setup
import { config } from './config';

// UI
import { BACKGROUND_COLOR, FONT_COLOR_MAIN, FONT_COLOR_SECONDARY, COLOR_LINK } from './styles/dark';
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import RefreshIcon from '@material-ui/icons/Refresh';

// Components
import Routines from './components/Routines/Routines';

const App = () => {
  
  const classes = useStyles();
  const [type, setType] = useState('routine')

  const handleSetupTransport = () => setType(prevType => 'transport');
  const handleSetupRoutines = () => setType(prevType => 'routine');
  const handleRefresh = () => console.log('Refetching data')
            
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.headerMain}>
              <EventIcon /> <span>{config?.[type].title}</span>
          </div>
          <div className={classes.configSetup}>
            <IconButton onClick={handleRefresh} aria-label="refresh" children={<RefreshIcon />} />
            <Button variant="outlined" aria-label="routines-view" onClick={handleSetupRoutines}>Routines</Button>
            <Button variant="outlined" aria-label="transport-view" onClick={handleSetupTransport}>Transport</Button>
          </div>
        </div>
        <div className={classes.body}>
          <Routines setup={type} />
        </div>
        <div className={classes.footer}>
          Routine Builder &copy; 2021 inRecovery
        </div>
      </div>
    </div>
  );
}

export default App;

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0, 
    left: 0,
    minHeight: '100%',
    minWidth: '100%',
    height: 'auto',
    width: 'auto',
    backgroundImage: BACKGROUND_COLOR,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '75px 1fr 50px',
    padding: '0 15px 15px 15px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 15px',
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
    "& span": {
      margin: 12,
    },
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