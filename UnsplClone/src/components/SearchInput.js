import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchInput = () => {
  const navigate = useNavigate()

  const [searchRequest, setSearchRequest] = useState()

  function handleSearch() {
    if (searchRequest.trim() !== '') {
      navigate(`/search`, { state: searchRequest })
    }
  }

  return (
    <input
      type='text'
      placeholder='Search...'
      value={searchRequest}
      onChange={e => setSearchRequest(e.target.value)}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          handleSearch()
        }
      }}
      className='w-full pl-10 pr-4 py-2 border rounded-full bg-gray-200
                           hover:bg-gray-300 focus:bg-white focus:outline-none
                           focus:ring-2 focus:ring-gray-400 transition-colors duration-200'
    />
  )
}

export default SearchInput
