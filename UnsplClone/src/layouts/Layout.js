import Header from 'src/layouts/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='mt-[80px] mx-auto max-w-[1000px] px-4'>{children}</main>
    </>
  )
}

export default Layout
