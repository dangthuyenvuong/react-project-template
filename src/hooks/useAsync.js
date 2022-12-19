import { useState } from "react"

export const useAsync = (promise) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [status, setStatus] = useState('idle')

    const excute = async (...data) => {
        try {
            setLoading(true)
            setStatus('pending')
            const res = await promise(...data)
            setData(res)
            setStatus('success')
            return res
        } catch (err) {
            setError(err.response.data)
            setStatus('error')
            throw err
        } finally {
            setLoading(false)
        }
    }

    return {
        loading, data, error, status, excute
    }
}