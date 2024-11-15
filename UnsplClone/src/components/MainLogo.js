import { useNavigate } from 'react-router-dom'

const MainLogo = () => {
  const navigate = useNavigate()

  return (
    <div className='w-10 h-10 cursor-pointer' onClick={() => navigate('/')}>
      <img src='/logo192.png' alt='main-logo' />
    </div>
  )
}

export default MainLogo
