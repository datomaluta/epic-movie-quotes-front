import { useLogout } from 'hooks'

const NewsFeed = () => {
  const { logoutHandler } = useLogout()
  return (
    <div>
      <div>This is NewsFeed page</div>
      <button onClick={logoutHandler}>Log out</button>
    </div>
  )
}

export default NewsFeed
