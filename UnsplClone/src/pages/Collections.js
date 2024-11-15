import { useLocation } from 'react-router-dom'
import GoHomeButton from 'src/components/GoHomeButton'
import PhotosField from 'src/components/PhotosField'
import { searchPhotoCollections } from 'src/http/api'

const Collections = () => {
  const location = useLocation()

  const collectionItem = location.state

  return (
    <div>
      <div className=' w-full mb-4 '>
        <GoHomeButton />
      </div>
      <h1 className='font-bold text-center my-4'>{collectionItem.toUpperCase()}</h1>
      <PhotosField getPhotoByQuery={searchPhotoCollections} query={collectionItem} />
    </div>
  )
}

export default Collections
