import './App.css'
import { ColumnProvider } from 'src/context/ColumnContext'
import Layout from 'src/layouts/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutImg from 'src/pages/AboutImg'
import Collections from 'src/pages/Collections'
import Main from 'src/pages/Main'
import Search from 'src/pages/Search'

function App() {
  return (
    <ColumnProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/:id' element={<AboutImg />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </Layout>
      </Router>
    </ColumnProvider>
  )
}

export default App
