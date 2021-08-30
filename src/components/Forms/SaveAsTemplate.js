import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import Input from './Input'
import Switch from './Switch';
import Textarea from './Textarea';

const SaveAsTemplate = ({
    type,
    title,
    detail,
    points,
    tags,
}) => {
    const { control, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
    )
}

export default SaveAsTemplate