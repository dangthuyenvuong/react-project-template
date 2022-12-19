import { useEffect, useState } from "react"

export const useFetch = (promise, dependencyList = []) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [status, setStatus] = useState('idle')


    useEffect(() => {
        fetchData()
    }, dependencyList)


    const fetchData = async () => {
        try {
            setLoading(true)
            setStatus('pending')
            const res = await promise()
            setData(res.data)
            setStatus('success')
        } catch (err) { 
            setError(err)
            setStatus('error')
        }
        finally {
            setLoading(false)
        }
    }

    return {
        loading,
        error,
        data,
        status
    }
}