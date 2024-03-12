import { useState, useEffect, useCallback, useRef } from 'react'

const useFetch = (url, _options) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const optionsRef = useRef(_options)

    const getData = useCallback(async () => {
        const controller = new AbortController()
        const signal = controller.signal
        // eslint-disable-next-line no-unused-vars
        const options = optionsRef.current

        try {
            const response = await fetch(url, { signal })

            if (!response.ok) {
                throw new Error(response.statusText)
            }

            const json = await response.json()
            setData(json)
            setError(null)
        } catch (err) {
            if (err.name === 'AbortError') {
                console.log('Fetch aborted')
            } else {
                setError(err.message)
            }
        } finally {
            setIsPending(false)
        }

        return () => controller.abort()
    }, [url]);

    useEffect(() => {
        let cancel; // this is a flag to check if the component is unmounted

        (async () => {
            cancel = await getData()
        })()

        return () => {
            if (cancel) {
                cancel()
            }
        }

    }, [getData]);

    return { data, isPending, error }
}

export default useFetch