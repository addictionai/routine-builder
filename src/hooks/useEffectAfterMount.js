import {useEffect, useRef} from 'react'

const useEffectAfterMount = (callback, dependencies = []) => {
    const firstMount = useRef(true)

    useEffect(() => {

        if (!firstMount.current) return callback();

        firstMount.current = false

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies)

}

export default useEffectAfterMount;
