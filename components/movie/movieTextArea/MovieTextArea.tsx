const MovieTextArea: React.FC = (props) => {
  return (
    <>
      <textarea
        className='bg-transparent placeholder:text-white border border-light-grey rounded-[0.3rem] w-full text-xl px-4 py-2'
        placeholder={props.placeholder}
      ></textarea>
      <span className='text-light-grey text-xl absolute top-1/2 right-4 -translate-y-1/2'>
        {props.locale}
      </span>
    </>
  )
}

export default MovieTextArea
