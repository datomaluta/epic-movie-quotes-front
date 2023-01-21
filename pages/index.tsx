import {
  Footer,
  LandingNavBar,
  MoviePoster,
  SignupModal,
  LoginModal,
  ForgotPasswordModal,
  ConfirmEmailModal,
  VerifiedEmailModal,
} from 'components'
import { useShowModals } from 'hooks'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { GetStaticProps, NextPage } from 'next'
import { IndexPropsType } from 'types'

const Home: NextPage<IndexPropsType> = (props) => {
  const {
    isRegistering,
    isLogining,
    showForgotPasswordModal,
    showConfirmEmailSentModal,
    showVerifiedEmailModal,
  } = useShowModals()
  const { t } = useTranslation()

  return (
    <div>
      <LandingNavBar />
      {isRegistering && <SignupModal />}
      {isLogining && <LoginModal />}
      {showForgotPasswordModal && <ForgotPasswordModal />}
      {showConfirmEmailSentModal && <ConfirmEmailModal />}
      {showVerifiedEmailModal && <VerifiedEmailModal />}
      <div className='text-center h-[50.5rem] bg-gradient-to-t from-gradient-dark via-gradient-almost-black to-black  flex flex-col items-center justify-center'>
        <h1
          className={`${
            props.locale === 'en' ? 'font-montserrat' : 'font-helvetica-geo'
          } font-bold max-w-[43.938rem] sm:w-[17.563rem] text-dark-yellow text-6xl sm:text-2xl  leading-[5.625rem] mb-6 sm:mb-10`}
        >
          {t('home:landing_main_text')}
        </h1>
        <button
          className={`bg-dark-red text-white px-4 py-2 rounded-[0.3rem] text-xl sm:text-base ${
            props.locale === 'en' ? 'font-helvetica-en' : 'font-helvetica-geo'
          }`}
        >
          {t('common:get_started')}
        </button>
      </div>

      <MoviePoster
        background='bg-interstellar'
        position='top-[30]%'
        movie={t('home:interstellar')}
        year='2014'
        locale={props.locale}
      >
        “{t('home:interstellar_quote')}”
      </MoviePoster>

      <MoviePoster
        background='bg-manAndWoman'
        position='top-[55]%'
        movie={t('home:the_royal_tenenbaums')}
        year='2001'
        locale={props.locale}
      >
        “{t('home:the_royal_tenenbaums_quote')}”
      </MoviePoster>

      <MoviePoster
        background='bg-lotr'
        position='top-[55]%'
        movie={t('home:lotr')}
        year='2003'
        locale={props.locale}
      >
        {t('home:lotr_quote')}
      </MoviePoster>
      <Footer />
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

export default Home
