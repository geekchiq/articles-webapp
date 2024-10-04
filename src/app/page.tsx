import Feed from '@/app/components/Feed'
import NewPost from '@/app/components/NewPost'
import { getSession } from '@/actions'
import { redirect } from 'next/navigation'

const Homepage = async () => {
  const session = await getSession()

  if (!session.isLoggedIn) {
    redirect('/login')
  }

  return (
    <div className="flex gap-6 pt-6">
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <NewPost />
          <Feed />
        </div>
      </div>
    </div>
  )
}

export default Homepage
