import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import Input from './Input'
import Switch from './Switch';
import Textarea from './Textarea';

// UI
import { makeStyles } from '@material-ui/core/styles';

//Components
import { 
    DialogTitle, 
    IconButton 
  } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const SaveAsTemplate = ({
    type,
    title,
    detail,
    points,
    tags,
}) => {
    const { control, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    const classes = useStyles();
    const onClose = () => {
        //onClose handler will be coming from outside, need to implement
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <div className={classes.popupTitle}>Save As Template</div>
                <IconButton  aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </div>
            <div className={classes.body}>
                <div className={classes.activityDetaits}>
                    <div className={classes.sectionTitle}>Activity Details</div>
                    <div className={classes.detailsBody}>
                        <div className={classes.categoryParagraph}>
                            <div className={classes.subtitle}>Type</div>
                            <div className={classes.value}>Recovery</div>
                        </div>
                        <div className={classes.categoryParagraph}>
                            <div className={classes.subtitle}>Title</div>
                            <div className={classes.value}>Morning AA Meeting</div>
                        </div>
                        <div className={classes.categoryParagraph}>
                            <div className={classes.subtitle}>Detail</div>
                            <div className={classes.value}>Start your day connected with a 12-step meeting</div>
                        </div>
                        <div className={classes.categoryParagraph}>
                            <div className={classes.subtitle}>Points</div>
                            <div className={classes.value}>50</div>
                        </div>
                        <div className={classes.categoryParagraph}>
                            <div className={classes.subtitle}>Tags</div>
                            <div className={classes.value}>Tags???</div>
                        </div>
                        <div className={classes.categoryParagraph}>
                            <div className={classes.subtitle}>After</div>
                            <div className={classes.value}>Show Assesment</div>
                        </div>
                    </div>
                </div>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Input control={control} name="Category" required={true} />
                        {errors.Category && "Category is required"}
                    </div>
                    <div>
                        <Input control={control} name="Name" required={true} />
                        {errors.Name && "Name is required"}
                    </div>
                    <div>
                        <Textarea control={control} name="Detail" required={true} />
                        {errors.Detail && "Detail is required"}
                    </div>
                    <div>
                        <Switch control={control} name="Private" />
                        {errors.Private && "Private is required"}
                    </div>
                    <Button variant="contained" color="primary" type="submit">
                        Primary
                    </Button>
                </form>
            </div>
            
        </div>
    )
}

// Styles
const useStyles = makeStyles({
    wrapper: {
        border: '1px solid lightgray',
        borderRadius: '10px',
        boxShadow: '3px 3px 3px lightgray, -3px -3px 3px lightgray',
        maxWidth: '740px',
        height: '480px',
        // padding: '10px',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5px 20px 0px 20px',
        borderBottom: 'solid 1px lightgray'
        // borderBottomWidth: 1,
        // borderBottomColor: 'lightgray',
    },
    popupTitle: {
        fontWeight: 'bold',
        fontSize: '20px',
    },
    closeButton: {
        //Need to implement according to the theme applied to website
        // position: 'absolute',
        // top: theme.spacing(0.75),
        // right: theme.spacing(1),
        // color: theme.palette.grey[500],
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: '17px',
        padding: '5px',
        marginBottom: '5px',
    },
    detailsBody: {
        padding: '5px'
    },
    value: {
        width: '180px',
    },
    form: {
        border: '1px solid lightgray',
        borderRadius: '10px',
        boxShadow: '2px 2px 2px lightgray, -2px -2px 2px lightgray',
        width: '320px',
        height: '320px',
        padding: '10px',
        margin: '10px',
    },
    activityDetaits: {
        flexGrow: 1,
    },
    categoryParagraph: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
        // marginTop: '10px'
    },
    subtitle: {
        width: '100px',
        fontWeight: 'bold'
    }
})

export default SaveAsTemplate