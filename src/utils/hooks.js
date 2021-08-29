import {useReducer, useEffect, useRef} from 'react'

/**
 * Forces component re-render by triggering a state update
 * @returns state change
 */
const useForceRerender = () => useReducer(x => x + 1, 0)[1]

/**
 * useEffect that runs after first mount to prevent firing on initial load
 * @param {function} callback function to run on useEffect
 * @param {array} dependencies depedency array for useEffect
 */
const useEffectAfterMount = (callback, dependencies = []) => {
    const firstMount = useRef(true)

    useEffect(() => {

        if (!firstMount.current) return callback();

        firstMount.current = false

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies)

}

export { 
    useEffectAfterMount,
    useForceRerender,
}