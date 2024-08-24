import './globals.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div className='w-full h-screen bg-[#fff]'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App