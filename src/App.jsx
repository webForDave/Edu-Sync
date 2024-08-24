import './globals.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <div className='w-full h-screen bg-[#fff]'>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App