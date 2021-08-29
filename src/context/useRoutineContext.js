import {useContext} from 'react'
import {RoutineContext} from './RoutineContext';

const useRoutineContext = () => {
    const context = useContext(RoutineContext);

    if(!context) {
        throw new Error(
            `This component cannot be rendered outside the RoutineContext`
        )
    }
    return context
}

export default useRoutineContext;
