import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Pagination from 'src/components/Pagination'
import { useColumnContext } from 'src/context/ColumnContext'

const PhotosField = ({ getPhotoByQuery, query }) => {
  const { columns } = useColumnContext()
  const navigate = useNavigate()

  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const data = await getPhotoByQuery(query, page)
        setPhotos(data)
      } catch (error) {
        console.error('Error fetching photos:', error)
      }
    }

    fetchPhotos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      {photos.length ? (
        <div>
          <div
            style={{
              columnCount: columns,
              columnGap: '24px'
            }}
          >
            {photos.map(photo => (
              <img
                onClick={() => {
                  navigate(`/${photo.id}`, { state: photo.cover_photo || photo })
                }}
                key={photo.id}
                src={photo.urls?.small || photo.cover_photo.urls?.small}
                alt={photo.alt_description}
                className='mb-4 w-full object-cover break-inside-avoid block cursor-pointer'
              />
            ))}
          </div>
          <Pagination page={page} setPage={setPage} />
        </div>
      ) : (
        <div>Not found! Please, change search request or back to home</div>
      )}
    </>
  )
}

export default PhotosField
