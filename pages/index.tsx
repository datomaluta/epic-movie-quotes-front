import {
  Footer,
  LandingNavBar,
  MoviePoster,
  SignupModal,
  LoginModal,
  ForgotPasswordModal,
} from 'components';
import { useShowModals } from 'hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';

const Home = () => {
  const { isRegistering, isLogining, showForgotPasswordModal } =
    useShowModals();
  const { t } = useTranslation();

  return (
    <div>
      <LandingNavBar />
      {isRegistering && <SignupModal />}
      {isLogining && <LoginModal />}
      {showForgotPasswordModal && <ForgotPasswordModal />}
      <div className='text-center h-[50.5rem] bg-gradient-to-t from-gradient-dark via-gradient-almost-black to-black  flex flex-col items-center justify-center'>
        <h1 className='max-w-[43.938rem] sm:w-[17.563rem] text-dark-yellow text-6xl sm:text-2xl font-montserrat font-bold leading-[5.625rem] mb-6 sm:mb-10'>
          {t('home:landing_main_text')}
        </h1>
        <button className='bg-dark-red text-white font-helvetica-eng px-4 py-2 rounded-[0.3rem] text-xl sm:text-base'>
          {t('common:get_started')}
        </button>
      </div>

      <MoviePoster
        background='bg-interstellar'
        position='top-[30]%'
        movie={t('home:interstellar')}
        year='2014'
      >
        “{t('home:interstellar_quote')}”
      </MoviePoster>

      <MoviePoster
        background='bg-manAndWoman'
        position='top-[55]%'
        movie={t('home:the_royal_tenenbaums')}
        year='2001'
      >
        “{t('home:the_royal_tenenbaums_quote')}”
      </MoviePoster>

      <MoviePoster
        background='bg-lotr'
        position='top-[55]%'
        movie={t('home:lotr')}
        year='2003'
      >
        {t('home:lotr_quote')}
      </MoviePoster>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['home', 'common'])),
    },
  };
};

export default Home;
