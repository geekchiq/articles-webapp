'use client'

import { useCallback, useEffect, useState } from 'react'

import { ParamType } from '@/types/paramType'

function useAsyncFunctionWithParam<T>(
  // eslint-disable-next-line no-unused-vars
  asyncFunction: (keyword: string) => Promise<T>,
  param: ParamType
) {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const execute = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await asyncFunction(param.toString())
      setData(response)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [asyncFunction, param])

  useEffect(() => {
    execute()
  }, [execute])

  return { data, loading, error, refetch: execute }
}

export default useAsyncFunctionWithParam
