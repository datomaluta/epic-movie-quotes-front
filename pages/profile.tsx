import {
  AddNewEmailModal,
  Header,
  HomeIcon,
  ImageInput,
  MovieIcon,
  NotVerifiedEmailWarning,
  PrimaryEmailCheck,
} from 'components'
import { ProfileTextInput } from 'components'
import { useProfile } from 'hooks'
import Image from 'next/image'
import Link from 'next/link'
import { profilePicture } from 'public'
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
  } = useProfile()

  return (
    <div className='bg-news-feed  text-white'>
      <Header />
      <div className='pt-[7.375rem] px-[4.313rem] flex py-60'>
        <div className='flex fixed flex-col gap-11 max-w-[28.188rem] '>
          <Link href='/profile'>
            <div className='flex gap-6 w-max'>
              {userData.profile_image_url ? (
                <Image
                  width={200}
                  height={200}
                  src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${userData.profile_image_url}`}
                  alt='profile picture'
                  className='w-[3.75rem] h-[3.75rem] rounded-full object-cover border-2 border-dark-red'
                />
              ) : (
                <Image
                  src={profilePicture}
                  alt='avatar'
                  className='border-2 border-dark-red'
                />
              )}
              <div>
                <p className='text-2xl'>{userQuery?.data?.data?.user?.name}</p>
                <p>Edit your profile</p>
              </div>
            </div>
          </Link>
          <div className='flex items-center gap-11 pl-[0.625rem]'>
            <HomeIcon />
            <Link href='/news-feed' className='text-2xl'>
              News feed
            </Link>
          </div>
          <div className='flex items-center gap-11 pl-[0.625rem]'>
            <MovieIcon />
            <p className='text-2xl'>List of movies</p>
          </div>
        </div>

        <div className=' ml-[20rem] xl:ml-[16rem]  max-w-[62.375rem] relative'>
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
      </div>
    </div>
  )
}

export default Profile
