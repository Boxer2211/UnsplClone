import { useLocation } from 'react-router-dom'
import GoHomeButton from 'src/components/GoHomeButton'
import PhotosField from 'src/components/PhotosField'
import { searchPhotos } from 'src/http/api'

const SearchPage = () => {
  const location = useLocation()

  const searchRequest = location.state

  return (
    <div>
      <div className=' w-full mb-4 '>
        <GoHomeButton />
      </div>
      <PhotosField getPhotoByQuery={searchPhotos} query={searchRequest} />
    </div>
  )
}

export default SearchPage
