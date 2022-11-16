
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Rutas from './pages/Rutas'

const App = () => {
  return (
    <Router >
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <div className='content'>
                <Routes>
                    <Route path='/' element={ <Rutas /> } />
                    <Route path='/dashboard' element={ <Dashboard /> } />
                </Routes>
            </div>
        </div>
        
    </Router>
  )
}

export default App