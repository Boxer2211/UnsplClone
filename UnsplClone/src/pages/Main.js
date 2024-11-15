import PhotosField from 'src/components/PhotosField'
import { getPhotosByPage } from 'src/http/api'

const Main = () => {
  return (
    <main>
      <PhotosField getPhotoByQuery={getPhotosByPage} />
    </main>
  )
}

export default Main
