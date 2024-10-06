'use client'

import { useCallback, useEffect, useState } from 'react'

function useAsyncFunction<T>(asyncFunction: () => Promise<T>) {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const execute = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await asyncFunction()
      setData(response)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [asyncFunction])

  useEffect(() => {
    execute()
  }, [execute])

  return { data, loading, error, refetch: execute }
}

export default useAsyncFunction
