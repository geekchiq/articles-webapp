import { useEffect, useState } from 'react'

import { SessionData } from '@/types/sessionData'
import { getSession } from '@/actions'

const useSession = () => {
  const [session, setSession] = useState<SessionData | null>(null)

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession()
      setSession(sessionData)
    }

    fetchSession()
  }, [])

  return { session }
}

export default useSession
