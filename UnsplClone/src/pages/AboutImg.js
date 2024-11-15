import { useLocation, useNavigate } from 'react-router-dom'
import CustomButton from 'src/components/CustomButton'
import GoHomeButton from 'src/components/GoHomeButton'

const AboutImg = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const photo = location.state

  console.log(photo)
  return (
    <div>
      <GoHomeButton />
      <p className='mt-4'>Description: {photo.alt_description}</p>
      <p>
        Author: {photo.user.first_name} {photo.user.last_name}
      </p>
      <div className='flex gap-3 my-2'>
        {Object.keys(photo.topic_submissions).map((submission, index) => (
          <CustomButton label={submission} action={() => navigate(`/collections`, { state: submission })} key={index} />
        ))}
      </div>
      <img src={photo.urls.full} alt={photo.alt_description} />
    </div>
  )
}

export default AboutImg
