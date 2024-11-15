import ButtonChangeColumnImg from 'src/components/ButtonChangeColumnImg'
import MainLogo from 'src/components/MainLogo'
import SearchInput from 'src/components/SearchInput'

const Header = () => {
  return (
    <header
      className='fixed top-0 left-0 w-full h-[60px] flex items-center justify-between
    gap-4 mb-7 px-4 py-2 border-b border-gray-300 bg-white'
    >
      <MainLogo />
      <SearchInput />
      <ButtonChangeColumnImg />
    </header>
  )
}

export default Header
