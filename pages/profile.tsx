import {
  AddNewEmailModal,
  BackArrowIcon,
  ConfirmChangesModal,
  Header,
  ImageInput,
  NoSSR,
  NotVerifiedEmailWarning,
  PrimaryEmailCheck,
  RightArrowIcon,
  Sidebar,
  TextInput,
} from 'components'
import { ProfileTextInput } from 'components'
import { useProfile } from 'hooks'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { FormProvider } from 'react-hook-form'

const Profile = () => {
  const {
    userNameForm,
    passwordForm,
    userNameEditing,
    setUserNameEditing,
    userData,
    passwordEditing,
    setPasswordEditing,
    onSaveChanges,
    userQuery,
    showNewEmailModal,
    showNewEmailModalHandler,
    makeEmailPrimaryHandler,
    deleteEmailHandler,
    error,
    avatarForm,
    showNewUsernameForm,
    showNewUsernameFormHandler,
    mobileUserNameForm,
    mobileUserNameSubmit,
    showNewPasswordForm,
    showNewPasswordFormHandler,
    showMobileNewEmailForm,
    showMobileNewEmailFormHandler,
    showEmailsTab,
    showEmailsTabHandler,
    showConfirmChangesModal,
    showConfirmChangesModalHandler,
    whichFieldIsSubmiting,
    mobilePasswordForm,
    mobilePasswordSubmit,
    mobileEmailForm,
    mobileEmailSubmit,
    mobileAvatarForm,
    mobileAvatarSubmit,
    t,
    router,
  } = useProfile()

  return (
    <NoSSR>
      <div
        className={`bg-news-feed  text-white min-h-screen ${
          router.locale === 'en' ? 'font-helvetica-en' : 'font-helvetica-geo'
        }`}
      >
        <Header />
        <div className='pt-[7.375rem] px-[4.313rem] sm:px-0 flex py-60 lg:flex-col'>
          <Link
            href='/news-feed'
            className='sm:ml-10 mb-6 hidden lg:inline-block'
          >
            <BackArrowIcon width='20' height='20' />
          </Link>
          <Sidebar userData={userData} userQuery={userQuery} />
          <div className='ml-[28rem] xl:ml-[16rem] lg:hidden max-w-[62.375rem] relative'>
            {showNewEmailModal && (
              <AddNewEmailModal
                showOrHideEmailModal={showNewEmailModalHandler}
              />
            )}
            <p className='text-2xl mb-[7.875rem] font-medium'>
              {t('common:my_profile')}
            </p>
            <div className=' bg-profile-dark-blue pb-10 rounded-xl relative pt-[12.188rem] px-[4.813rem] xl:px-[2rem]'>
              <FormProvider {...avatarForm}>
                <form className='flex flex-col gap-3 items-center absolute -top-16 left-1/2 -translate-x-1/2'>
                  <ImageInput name='avatar' />
                </form>
              </FormProvider>

              <div className='mb-10'>
                <label className='mb-2 inline-block'>
                  {t('common:username')}
                </label>
                <div className='flex items-baseline gap-[2.063rem]'>
                  {!userNameEditing && (
                    <div className='max-w-[33rem] w-full mb-6 bg-very-light-grey text-input-black px-[1.063rem] py-[0.563rem] rounded-[0.3rem]'>
                      {userData?.name}
                    </div>
                  )}
                  {userNameEditing && (
                    <FormProvider {...userNameForm}>
                      <form className='max-w-[33rem] w-full'>
                        <ProfileTextInput name='username' error={error} />
                      </form>
                    </FormProvider>
                  )}
                  <button
                    onClick={() => setUserNameEditing(true)}
                    className='text-xl xl:text-base text-very-light-grey'
                  >
                    {t('common:edit')}
                  </button>
                </div>
                <div className='max-w-[33rem] bg-very-light-grey h-[0.006rem] bg-opacity-25 mt-14'></div>
              </div>

              <div>
                {userData?.emails?.map((email) => (
                  <div key={email.id} className='mb-8'>
                    <label className='mb-2 inline-block'>
                      {t('common:email')}
                    </label>
                    <div className='flex items-center'>
                      <div
                        className={`min-w-[33rem] mr-[2.063rem] relative text-black bg-very-light-grey px-[1.063rem] py-[0.563rem] rounded-[0.3rem] ${
                          email.is_primary &&
                          '!text-white bg-primary-green border-primary-border border bg-opacity-20 '
                        } ${
                          !email.email_verified_at &&
                          'bg-not-verified-yellow !text-white border-not-verified-border border bg-opacity-20'
                        } `}
                      >
                        {email.email}
                        <span className='absolute top-1/2 -translate-y-1/2 right-4'>
                          {email.is_primary ? <PrimaryEmailCheck /> : ''}
                          {!email.email_verified_at ? (
                            <NotVerifiedEmailWarning />
                          ) : (
                            ''
                          )}
                        </span>
                      </div>
                      {email.is_primary ? (
                        <p className='text-xl xl:text-base text-very-light-grey'>
                          {t('common:primary_email')}
                        </p>
                      ) : !email.email_verified_at ? (
                        <div className='flex gap-5 xl:gap-2'>
                          <p className='text-xl xl:text-base text-very-light-grey'>
                            {t('common:not_verified')}
                          </p>
                          <span>|</span>
                          <button
                            onClick={() => deleteEmailHandler(email.id)}
                            className='text-xl xl:text-base text-very-light-grey'
                          >
                            {t('common:remove')}
                          </button>
                        </div>
                      ) : (
                        <div className='flex gap-5'>
                          <button
                            onClick={() => makeEmailPrimaryHandler(email.id)}
                            className='text-xl text-very-light-grey'
                          >
                            {t('common:make_this_primary')}
                          </button>
                          <span>|</span>
                          <button
                            onClick={() => deleteEmailHandler(email.id)}
                            className='text-xl text-very-light-grey'
                          >
                            {t('common:remove')}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => showNewEmailModalHandler(true)}
                  className='border border-border-white rounded-[0.3rem] px-[1.594rem] py-[0.438rem] text-xl mt-10'
                >
                  {t('common:add_new_email')}
                </button>
                <div className='w-[33rem] bg-very-light-grey h-[0.006rem] bg-opacity-25 mt-14'></div>
              </div>

              <div className='mt-10'>
                <label className='mb-2 inline-block'>
                  {t('common:password')}
                </label>
                <div className='flex items-center gap-[2.063rem]'>
                  {!passwordEditing && (
                    <div className='w-[33rem] bg-very-light-grey text-input-black px-[1.063rem] py-[0.563rem] rounded-[0.3rem]'>
                      ●●●●●●●●
                    </div>
                  )}
                  {passwordEditing && (
                    <FormProvider {...passwordForm}>
                      <form className='max-w-[33rem] w-full'>
                        <ProfileTextInput name='password' type='password' />
                      </form>
                    </FormProvider>
                  )}
                  <button
                    onClick={() => setPasswordEditing(true)}
                    className='text-xl xl:text-base text-very-light-grey'
                  >
                    {t('common:edit')}
                  </button>
                </div>
              </div>
            </div>
            {(userNameEditing ||
              passwordEditing ||
              userData.profile_image_file) && (
              <div className='flex gap-4 text-xl  justify-end mt-12'>
                <button>{t('common:cancel')}</button>
                <button
                  className='bg-error-red-border py-[0.563rem] px-[1.063rem] rounded-[0.3rem] '
                  onClick={onSaveChanges}
                >
                  {t('common:save_changes')}
                </button>
              </div>
            )}
          </div>
          {showConfirmChangesModal && (
            <ConfirmChangesModal
              onClick={
                whichFieldIsSubmiting === 'username'
                  ? mobileUserNameSubmit
                  : whichFieldIsSubmiting === 'password'
                  ? mobilePasswordSubmit
                  : mobileEmailSubmit
              }
            />
          )}
          {!showNewUsernameForm && !showNewPasswordForm && !showEmailsTab && (
            <div className='hidden lg:block bg-mobile-grey w-full rounded-xl pb-16 relative px-8'>
              <FormProvider {...mobileAvatarForm}>
                <form
                  id='mobile_avatar_form'
                  className='flex flex-col gap-3 items-center mt-10'
                  onSubmit={mobileAvatarForm.handleSubmit(mobileAvatarSubmit)}
                >
                  <ImageInput name='mobile_avatar' />
                </form>
              </FormProvider>

              <div className='flex flex-col gap-1'>
                <p>{t('common:username')}</p>
                <div className='pb-4 border-b border-very-light-grey flex justify-between text-[1.125rem]'>
                  <p>{userData.name}</p>
                  <button
                    onClick={() => showNewUsernameFormHandler(true)}
                    className='text-very-light-grey'
                  >
                    {t('common:edit')}
                  </button>
                </div>
              </div>

              <div className='flex flex-col gap-1 mt-8'>
                <p>{t('common:password')}</p>
                <div className='pb-4 border-b border-very-light-grey flex justify-between text-[1.125rem]'>
                  <p>••••••••••••</p>
                  <button
                    onClick={() => {
                      showNewPasswordFormHandler(true)
                    }}
                    className='text-very-light-grey'
                  >
                    {t('common:edit')}
                  </button>
                </div>
              </div>

              <div className='flex justify-between mt-8'>
                <p>{t('common:email')}</p>
                <button
                  onClick={() => showEmailsTabHandler(true)}
                  className='text-very-light-grey'
                >
                  <RightArrowIcon />
                </button>
              </div>
              {userData.profile_image_file && (
                <button form='mobile_avatar_form' className='mt-10'>
                  {t('common:save')}
                </button>
              )}
            </div>
          )}
          {showNewUsernameForm && (
            <div>
              <FormProvider {...mobileUserNameForm}>
                <form
                  id='mobile_username'
                  onSubmit={mobileUserNameForm.handleSubmit(
                    mobileUserNameSubmit
                  )}
                  className='bg-mobile-grey rounded-xl px-8 pt-8 pb-16'
                >
                  <ProfileTextInput
                    label='enter_new_username'
                    placeholder='username'
                    name='username'
                  />
                </form>
              </FormProvider>
              <div className='flex justify-between px-12 mt-28'>
                <button onClick={() => showNewUsernameFormHandler(false)}>
                  {t('common:cancel')}
                </button>
                <button
                  onClick={() =>
                    showConfirmChangesModalHandler(true, 'username')
                  }
                  className='bg-dark-red py-2 px-5 rounded'
                >
                  {t('common:add')}
                </button>
              </div>
            </div>
          )}
          {showNewPasswordForm && (
            <div>
              <div className='bg-mobile-grey px-8 py-6 rounded-xl'>
                <FormProvider {...mobilePasswordForm}>
                  <div className='bg-gradient-dark px-6 py-6 rounded'>
                    <p className='mb-4'>
                      {t('common:password_should_contain')}
                    </p>
                    <div>
                      <p className='text-dark-grey'>
                        <span>•</span> {t('common:password_min_length')}
                      </p>
                      <p>
                        <span className='text-primary-green'>•</span>{' '}
                        {t('common:password_max_length')}
                      </p>
                    </div>
                  </div>
                  <form
                    id='mobile_username'
                    onSubmit={mobilePasswordForm.handleSubmit(
                      mobilePasswordSubmit
                    )}
                    className='rounded-xl mt-10'
                  >
                    <TextInput
                      label={t('common:new_password')}
                      type='password'
                      placeholder={t('common:password')}
                      name='password'
                    />

                    <TextInput
                      label={t('common:confirm_new_password')}
                      type='password'
                      placeholder={t('common:confirm_password')}
                      name='confirm_password'
                    />
                  </form>
                </FormProvider>
              </div>
              <div className='flex justify-between px-12 mt-14'>
                <button
                  onClick={() => {
                    showNewPasswordFormHandler(false)
                  }}
                >
                  {t('common:cancel')}
                </button>
                <button
                  // form='mobile_username'
                  onClick={() =>
                    showConfirmChangesModalHandler(true, 'password')
                  }
                  className='bg-dark-red py-2 px-5 rounded'
                >
                  {t('common:add')}
                </button>
              </div>
            </div>
          )}
          {showEmailsTab && !showMobileNewEmailForm && (
            <div className='bg-mobile-grey px-8 py-8 rounded'>
              {userData?.emails?.map((email) => (
                <div
                  key={email.id}
                  className='pb-6 border-b border-grey-border mb-8'
                >
                  {email.is_primary ? (
                    <p className='mb-6 text-sm'>{t('common:primary_email')}</p>
                  ) : (
                    ''
                  )}
                  <div
                    className={`${
                      email.is_primary &&
                      '!text-white bg-primary-green border-primary-border border bg-opacity-20 px-4 py-2 rounded text-xl '
                    } `}
                  >
                    <p className='text-xl flex justify-between items-center'>
                      {email.email}
                      {email.is_primary ? (
                        <span>
                          <PrimaryEmailCheck />
                        </span>
                      ) : (
                        ''
                      )}
                    </p>
                    <div
                      className={`flex justify-between ${
                        !email.is_primary && 'mt-4'
                      }`}
                    >
                      {!email.email_verified_at && (
                        <p className='text-not-verified-yellow italic flex items-center gap-1'>
                          <NotVerifiedEmailWarning />
                          <span>{t('common:not_verified')}</span>
                        </p>
                      )}
                      {!email.is_primary && email.email_verified_at && (
                        <button
                          onClick={() => makeEmailPrimaryHandler(email.id)}
                          className='border border-border-white rounded-[0.3rem] px-[1.594rem] py-[0.438rem]'
                        >
                          Make this primary
                        </button>
                      )}
                      {!email.is_primary && (
                        <button onClick={() => deleteEmailHandler(email.id)}>
                          {t('common:remove')}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div>
                <p className='text-sm mb-6'>{t('common:add_new_email')}</p>
                <button
                  onClick={() => showMobileNewEmailFormHandler(true)}
                  className='w-full border border-border-white rounded-[0.3rem] px-[1.594rem] py-[0.438rem]'
                >
                  {t('common:add')}
                </button>
              </div>
            </div>
          )}

          {showMobileNewEmailForm && (
            <div className=''>
              <FormProvider {...mobileEmailForm}>
                <form
                  id='myform'
                  onSubmit={mobileEmailForm.handleSubmit(mobileEmailSubmit)}
                  className='bg-mobile-grey rounded-xl px-8 pt-8 pb-16'
                >
                  <ProfileTextInput
                    label='enter_new_email'
                    type='text'
                    placeholder='email'
                    name='email'
                  />
                </form>
              </FormProvider>
              <div className='flex justify-between px-12 mt-28'>
                <button onClick={() => showMobileNewEmailFormHandler(false)}>
                  {t('common:cancel')}
                </button>
                <button
                  onClick={() => showConfirmChangesModalHandler(true, 'email')}
                  className='bg-dark-red py-2 px-5 rounded'
                >
                  {t('common:add')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </NoSSR>
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

export default Profile
