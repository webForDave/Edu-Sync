import './globals.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

const App = () => {
  return (
    <div className='w-full h-screen bg-[#fff]'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/log-in' element={<LogIn />} />
      </Routes>
    </div>
  )
}

export default App