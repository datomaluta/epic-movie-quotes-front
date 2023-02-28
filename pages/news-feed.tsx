import { Header, Sidebar } from 'components'
import { useNewsFeed } from 'hooks'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const NewsFeed = () => {
  const { userData, userQuery } = useNewsFeed()

  return (
    <div className='bg-news-feed h-[1200px] text-white'>
      <Header />
      <div className='pt-[7.375rem] px-[4.313rem] flex'>
        <Sidebar userData={userData} userQuery={userQuery} />
        <div className='bg-red-500 ml-[33.125rem]'>posts</div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'home',
        'common',
        'validations',
      ])),
      locale,
    },
  }
}

export default NewsFeed
