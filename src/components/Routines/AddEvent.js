import {useState} from 'react';
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';

// Context
import useRoutineContext from '../../context/useRoutineContext';

// UI
import { 
    IconButton, 
    Button, 
    TextField, MenuItem,
    Dialog, DialogContent, DialogTitle, 
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/styles';

const AddEvent = props => {

    const classes = useStyles();
    const { handleAddEvent } = useRoutineContext();

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true)


    
    return (
        <div className={classes.addEvent}>
            <IconButton onClick={handleOpen} aria-label="add-event" children={<AddCircleIcon />} /> Add Event
            <AddEventPopup open={open} handleClose={handleClose} />
        </div>
    )
}

export default AddEvent;

const AddEventPopup = ({open, handleClose}) => {
    
    const classes = useStyles();
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log('onSubmit', data);

    return (
    <Dialog
        open={open}
        onClose={handleClose}
        fullWidth="true"
    >
        <DialogTitle disableTypography classes={{root: classes.popupTitle}}>
            <div>Add Event</div>
            <IconButton onClick={handleClose} aria-label="close-add-event-popup" children={<CloseIcon />} />
        </DialogTitle>
        <DialogContent className={classes.popup}>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}> 
                Destination <input {...register("destination")} />
                Category 
                <select {...register("destinationType")}>
                    <option value="Work">Work</option>
                    <option value="School">School</option>
                    <option value="AA">AA</option>
                    <option value="Gym">Gym</option>
                    <option value="Shop">Shop</option>
                </select>
                Time<input {...register("timeStart")}/>
                Member
                <select {...register("memberId")}>
                    <option value="1">Sarah P</option>
                    <option value="2">Parker W</option>
                    <option value="3">Sammy D</option>
                </select>
                <input type="submit" />
            </form>
        </DialogContent>
    </Dialog>
)}

const useStyles = makeStyles({
    addEvent: {
        display: 'flex',
        alignItems: 'center',
    },
    popupTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 600,
        fontFamily: 'Helvetica, sans-serif',
    },
    popup: {
        borderRadius: 15,
        minHeight: 350,
        fontFamily: 'Helvetica, sans-serif'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        "& > *": {
            margin: 5,
        }
    }
});

