import {
  AddNewEmailModal,
  BackArrowIcon,
  Header,
  ImageInput,
  NotVerifiedEmailWarning,
  PrimaryEmailCheck,
  RightArrowIcon,
  Sidebar,
  TextInput,
} from 'components'
import { ProfileTextInput } from 'components'
import { useProfile } from 'hooks'
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
  } = useProfile()

  return (
    <div className='bg-news-feed  text-white min-h-screen'>
      <Header />
      <div className='pt-[7.375rem] px-[4.313rem] sm:px-0 flex py-60 lg:flex-col'>
        <Link href='/news-feed' className='sm:ml-10 mb-6'>
          <BackArrowIcon width='20' height='20' />
        </Link>
        <Sidebar userData={userData} userQuery={userQuery} />
        <div className='ml-[28rem] xl:ml-[16rem] lg:hidden max-w-[62.375rem] relative'>
          {showNewEmailModal && (
            <AddNewEmailModal showOrHideEmailModal={showNewEmailModalHandler} />
          )}
          <p className='text-2xl mb-[7.875rem] font-medium'>My profile</p>
          <div className=' bg-profile-dark-blue pb-10 rounded-xl relative pt-[12.188rem] px-[4.813rem] xl:px-[2rem]'>
            <FormProvider {...avatarForm}>
              <form className='flex flex-col gap-3 items-center absolute -top-16 left-1/2 -translate-x-1/2'>
                <ImageInput name='avatar' />
              </form>
            </FormProvider>

            <div className='mb-10'>
              <label className='mb-2 inline-block'>Username</label>
              <div className='flex items-baseline gap-[2.063rem]'>
                {!userNameEditing && (
                  <div className='w-[33rem] mb-6 bg-very-light-grey text-input-black px-[1.063rem] py-[0.563rem] rounded-[0.3rem]'>
                    {userData?.name}
                  </div>
                )}
                {userNameEditing && (
                  <FormProvider {...userNameForm}>
                    <form>
                      <ProfileTextInput name='username' error={error} />
                    </form>
                  </FormProvider>
                )}
                <button
                  onClick={() => setUserNameEditing(true)}
                  className='text-xl xl:text-base text-very-light-grey'
                >
                  Edit
                </button>
              </div>
              <div className='w-[33rem] bg-very-light-grey h-[0.006rem] bg-opacity-25 mt-14'></div>
            </div>

            <div>
              {userData?.emails?.map((email) => (
                <div key={email.id} className='mb-8'>
                  <label className='mb-2 inline-block'>Email</label>
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
                        Primary Email
                      </p>
                    ) : !email.email_verified_at ? (
                      <div className='flex gap-5 xl:gap-2'>
                        <p className='text-xl xl:text-base text-very-light-grey'>
                          Not Verified
                        </p>
                        <span>|</span>
                        <button
                          onClick={() => deleteEmailHandler(email.id)}
                          className='text-xl xl:text-base text-very-light-grey'
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className='flex gap-5'>
                        <button
                          onClick={() => makeEmailPrimaryHandler(email.id)}
                          className='text-xl text-very-light-grey'
                        >
                          Make this primary
                        </button>
                        <span>|</span>
                        <button
                          onClick={() => deleteEmailHandler(email.id)}
                          className='text-xl text-very-light-grey'
                        >
                          Remove
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
                Add new email
              </button>
              <div className='w-[33rem] bg-very-light-grey h-[0.006rem] bg-opacity-25 mt-14'></div>
            </div>

            <div className='mt-10'>
              <label className='mb-2 inline-block'>Password</label>
              <div className='flex items-center gap-[2.063rem]'>
                {!passwordEditing && (
                  <div className='w-[33rem] bg-very-light-grey text-input-black px-[1.063rem] py-[0.563rem] rounded-[0.3rem]'>
                    ●●●●●●●●
                  </div>
                )}
                {passwordEditing && (
                  <FormProvider {...passwordForm}>
                    <form>
                      <ProfileTextInput name='password' type='password' />
                    </form>
                  </FormProvider>
                )}
                <button
                  onClick={() => setPasswordEditing(true)}
                  className='text-xl xl:text-base text-very-light-grey'
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          {(userNameEditing ||
            passwordEditing ||
            userData.profile_image_file) && (
            <div className='flex gap-4 text-xl  justify-end mt-12'>
              <button>Cancel</button>
              <button
                className='bg-error-red-border py-[0.563rem] px-[1.063rem] rounded-[0.3rem] '
                onClick={onSaveChanges}
              >
                Save Changes
              </button>
            </div>
          )}
        </div>

        {!showNewUsernameForm && !showNewPasswordForm && !showEmailsTab && (
          <div className='bg-mobile-grey w-full rounded-xl h-[40.563rem] px-8'>
            {/* <div className='w-screen h-screen fixed top-0 left-0 z-50 '>
              <div className='w-full h-full bg-confirm-changes bg-opacity-70 backdrop-blur-sm'></div>
              <div className='rounded-[0.625rem] px-8 w-[22.75rem] h-[13.188rem] absolute top-36 left-1/2 -translate-x-1/2 bg-email-modal'>
                <p className='text-center mt-16 pb-11 border-b border-grey-border mb-6'>
                  Are you sure to make changes?
                </p>
                <div className='flex justify-between'>
                  <button>Cancel</button>
                  <button className='bg-dark-red px-4 py-2 rounded'>
                    Confirm
                  </button>
                </div>
              </div>
            </div> */}
            <FormProvider {...avatarForm}>
              <form className='flex flex-col gap-3 items-center mt-10'>
                <ImageInput name='avatar' />
              </form>
            </FormProvider>
            <div className='flex flex-col gap-1'>
              <p>Username</p>
              <div className='pb-4 border-b border-very-light-grey flex justify-between text-[1.125rem]'>
                <p>Nino Tabagari</p>
                <button
                  onClick={() => showNewUsernameFormHandler(true)}
                  className='text-very-light-grey'
                >
                  Edit
                </button>
              </div>
            </div>

            <div className='flex flex-col gap-1 mt-8'>
              <p>Password</p>
              <div className='pb-4 border-b border-very-light-grey flex justify-between text-[1.125rem]'>
                <p>••••••••••••</p>
                <button
                  onClick={() => {
                    showNewPasswordFormHandler(true)
                  }}
                  className='text-very-light-grey'
                >
                  Edit
                </button>
              </div>
            </div>

            <div className='flex justify-between mt-8'>
              <p>EMAIL</p>
              <button
                onClick={() => showEmailsTabHandler(true)}
                className='text-very-light-grey'
              >
                <RightArrowIcon />
              </button>
            </div>
          </div>
        )}
        {showNewUsernameForm && (
          <div className=''>
            <FormProvider {...mobileUserNameForm}>
              <form
                id='mobile_username'
                onSubmit={mobileUserNameForm.handleSubmit(mobileUserNameSubmit)}
                className='bg-mobile-grey rounded-xl px-8 pt-8 pb-16'
              >
                <TextInput
                  label='Enter new username'
                  type='text'
                  placeholder='username'
                  name='mobile_username'
                />
              </form>
            </FormProvider>
            <div className='flex justify-between px-12 mt-28'>
              <button onClick={() => showNewUsernameFormHandler(false)}>
                Cancel
              </button>
              <button
                form='mobile_username'
                className='bg-dark-red py-2 px-5 rounded'
              >
                Add
              </button>
            </div>
          </div>
        )}
        {showNewPasswordForm && (
          <div>
            <div className='bg-mobile-grey px-8 py-6 rounded-xl'>
              <FormProvider {...mobileUserNameForm}>
                <div className='bg-gradient-dark px-6 py-6 rounded'>
                  <p className='mb-4'>Password should contain:</p>
                  <div>
                    <p className='text-dark-grey'>
                      <span>•</span> 8 or more characters
                    </p>
                    <p>
                      <span className='text-primary-green'>•</span> 15 lowercase
                      characters
                    </p>
                  </div>
                </div>
                <form
                  id='mobile_username'
                  onSubmit={mobileUserNameForm.handleSubmit(
                    mobileUserNameSubmit
                  )}
                  className='rounded-xl mt-10'
                >
                  <TextInput
                    label='New password'
                    type='password'
                    placeholder='password'
                    name='password'
                  />

                  <TextInput
                    label='Confirm new password'
                    type='password'
                    placeholder='Confirm password'
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
                Cancel
              </button>
              <button
                form='mobile_username'
                className='bg-dark-red py-2 px-5 rounded'
              >
                Add
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
                  <p className='mb-6 text-sm'>PRIMARY EMAIL</p>
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
                        <span> Not verified</span>
                      </p>
                    )}
                    {!email.is_primary && email.email_verified_at && (
                      <button className='border border-border-white rounded-[0.3rem] px-[1.594rem] py-[0.438rem]'>
                        Make this primary
                      </button>
                    )}
                    {!email.is_primary && <button>Remove</button>}
                  </div>
                </div>
              </div>
            ))}
            <div>
              <p className='text-sm mb-6'>ADD NEW EMAIL</p>
              <button
                onClick={() => showMobileNewEmailFormHandler(true)}
                className='w-full border border-border-white rounded-[0.3rem] px-[1.594rem] py-[0.438rem]'
              >
                Add
              </button>
            </div>
          </div>
        )}

        {showMobileNewEmailForm && (
          <div className=''>
            <FormProvider {...mobileUserNameForm}>
              <form
                id='mobile_username'
                onSubmit={mobileUserNameForm.handleSubmit(mobileUserNameSubmit)}
                className='bg-mobile-grey rounded-xl px-8 pt-8 pb-16'
              >
                <TextInput
                  label='Enter new Email'
                  type='text'
                  placeholder='email'
                  name='mobile_email'
                />
              </form>
            </FormProvider>
            <div className='flex justify-between px-12 mt-28'>
              <button onClick={() => showMobileNewEmailFormHandler(false)}>
                Cancel
              </button>
              <button
                form='mobile_username'
                className='bg-dark-red py-2 px-5 rounded'
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
