// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoadingProvider } from '@/utils/context/loading/LoadingProvider'
import Loading from '@/components/Loading'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import ProjectDetail from '@/pages/ProjectDetail'

function App() {
  return (
    <Router>
      <LoadingProvider>
        <Loading />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectID" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </LoadingProvider>
    </Router>
  )
}

export default App
