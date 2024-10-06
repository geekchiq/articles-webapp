import Feed from '@/app/components/Feed'
import { getSession } from '@/actions'
import { redirect } from 'next/navigation'

const Homepage = async () => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect('/login')
  }

  return (
    <div className="flex gap-6 py-6">
      <div className="w-full">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
    </div>
  )
}

export default Homepage
