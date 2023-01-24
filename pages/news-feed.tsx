import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { logout } from 'services'

const NewsFeed = () => {
  const router = useRouter()
  const logoutHandler = async () => {
    await logout()
    deleteCookie('XSRF-TOKEN')
    router.reload()
  }
  return (
    <div>
      <div>This is NewsFeed page</div>
      <button onClick={logoutHandler}>Log out</button>
    </div>
  )
}

export default NewsFeed
