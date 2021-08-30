import PropTypes from 'prop-types'

import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";

const Textarea = ({ control, name, defaultValue = "", required = false, maxRows }) => {
    const {
      field: { ref, ...inputProps },
    //   fieldState: { invalid, isTouched, isDirty },
    //   formState: { touchedFields, dirtyFields }
    } = useController({
      name,
      control,
      rules: { required },
      defaultValue,
    });
  
    return <TextField {...inputProps} inputRef={ref} multiline={true} />;
}

Textarea.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    required: PropTypes.bool
}

export default Textarea;