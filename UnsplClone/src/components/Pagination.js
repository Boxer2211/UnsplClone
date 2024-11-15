import CustomButton from 'src/components/CustomButton'

const Pagination = ({ page, setPage }) => {
  function handlePageNext() {
    setPage(() => page + 1)
  }

  function handlePagePrevious() {
    setPage(() => page - 1)
  }

  return (
    <div className='w-full my-4 flex items-center justify-center gap-3'>
      <CustomButton label={'Previous'} action={handlePagePrevious} disabled={page === 1} />
      <CustomButton label={'Next'} action={handlePageNext} />
    </div>
  )
}

export default Pagination
