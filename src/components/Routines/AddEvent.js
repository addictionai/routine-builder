// Context
import useRoutineContext from '../../context/useRoutineContext';

// UI
import { makeStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const AddEvent = props => {

    const classes = useStyles();
    const { handleAddEvent } = useRoutineContext();

    return (
        <div className={classes.addEvent}>
            <IconButton onClick={handleAddEvent} aria-label="add-event" children={<AddCircleIcon />} /> Add Event
        </div> 
    )
}

export default AddEvent

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




// const newRequest = {
//     _id: nanoid(10),
//     status: 'pending',
//     memberId: '1',
//     staffId: '2',
//     destinationType: 'Work',
//     destination: 'Starbucks',
//     timeStart: '2021-08-26T17:00:00',
//   }
  
// <TextField variant="outlined" label="Time" />
// <TextField select variant="outlined" label="Category">
//     <MenuItem value={"Work"}>Work</MenuItem>
//     <MenuItem value={"School"}>School</MenuItem>
//     <MenuItem value={"AA"}>AA</MenuItem>
//     <MenuItem value={"Gym"}>Gym</MenuItem>
//     <MenuItem value={"Shop"}>Shop</MenuItem>
// </TextField>
// <TextField variant="outlined" label="Destination" />
// <TextField variant="outlined" label="Member" />
// <input type="submit" />
// </form>

// import { 
//     IconButton, 
//     Button, 
//     TextField, MenuItem,
//     Dialog, DialogContent, DialogTitle, 
// } from '@material-ui/core';

// import { useForm } from "react-hook-form";
// import CloseIcon from '@material-ui/icons/Close';

// const { register, handleSubmit, watch, formState: { errors } } = useForm();
// const onSubmit = data => console.log('onSubmit', data);

// const [open, setOpen] = useState(false);
// const handleClose = () => setOpen(false);

// <Dialog
// open={open}
// onClose={handleClose}
// fullWidth="true"
// >
// <DialogTitle disableTypography classes={{root: classes.popupTitle}}>
//     <div>Add Event</div>
//     <IconButton onClick={handleClose} aria-label="close-add-event-popup" children={<CloseIcon />} />
// </DialogTitle>
// <DialogContent className={classes.popup}>
//     <form className={classes.form} onSubmit={handleSubmit(onSubmit)}> 
//         Destination <input {...register("destination")} />
//         Category 
//         <select {...register("destinationType")}>
//             <option value="Work">Work</option>
//             <option value="School">School</option>
//             <option value="AA">AA</option>
//             <option value="Gym">Gym</option>
//             <option value="Shop">Shop</option>
//         </select>
//         Time<input {...register("timeStart")}/>
//         Member
//         <select {...register("memberId")}>
//             <option value="1">Sarah P</option>
//             <option value="2">Parker W</option>
//             <option value="3">Sammy D</option>
//         </select>
//         <input type="submit" />
//     </form>
// </DialogContent>
// </Dialog>