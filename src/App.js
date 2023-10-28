import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Homepage from './pages/Homepage'
import Blog from './pages/Blog'
import SinglePost from './pages/SinglePost'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
