import { localStorageCache, sessionStorageCache, indexDBCache } from "@/utils/cache"
import { useEffect, useRef, useState } from "react"

const _cache = {
    localStorage: localStorageCache,
    sessionStorage: sessionStorageCache,
    indexDB: indexDBCache
}


export const useQuery = (options = {}) => {
    const { queryFn,
        queryKey,
        dependencyList = [],
        enabled = true,
        cacheTime,
        storeDriver = 'localStorage' } = options
    const cache = _cache[storeDriver]

    const fetchTimes = useRef(0)
    const [data, setData] = useState(() => {
        if (queryKey) {
            return cache.get(queryKey)
        }
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [status, setStatus] = useState('idle')

    useEffect(() => {
        if (enabled && !data) {
            fetchData()
        }
    }, [])

    useEffect(() => {
        if (enabled && fetchTimes.current > 1) {
            fetchData()
        }
    }, dependencyList)


    const fetchData = async () => {
        fetchTimes.current++
        try {
            setLoading(true)
            setStatus('pending')
            const res = await queryFn()
            setData(res.data)
            setStatus('success')

            if (queryKey && cacheTime) {
                cache.set(queryKey, res.data, Date.now() + cacheTime)
            }
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