import {useEffect, useRef} from 'react'

const useEffectAfterMount = (callback, dependencies = []) => {
    const firstMount = useRef(true)

    useEffect(() => {

        if (!firstMount.current) return callback();

        firstMount.current = false

    }, dependencies)

}

export default useEffectAfterMount;
