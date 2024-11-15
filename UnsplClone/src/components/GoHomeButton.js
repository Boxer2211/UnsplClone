import { useNavigate } from 'react-router-dom'
import CustomButton from 'src/components/CustomButton'

const GoHomeButton = () => {
  const navigate = useNavigate()

  function goHome() {
    navigate('/')
  }
  return <CustomButton label={'Back to Home'} action={goHome} />
}

export default GoHomeButton
