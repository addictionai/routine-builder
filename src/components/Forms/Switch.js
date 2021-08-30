import PropTypes from 'prop-types'
import { Switch as MSwitch } from '@material-ui/core';
import { useController } from 'react-hook-form';

const Switch = ({ control, name, defaultValue = false }) => {
    const {
      field: { ref, ...inputProps },
    //   fieldState: { invalid, isTouched, isDirty },
    //   formState: { touchedFields, dirtyFields }
    } = useController({
      name,
      control,
      checked:defaultValue,
    });
  
    return <MSwitch {...inputProps} inputRef={ref} />;
}

Switch.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.bool,
}

export default Switch;