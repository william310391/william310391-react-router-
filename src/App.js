import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/Navbar';
import Dashboard from './pages/Dashboard';


export default function App() {
  return (

      <BrowserRouter>
      <NavBar/>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/About" element={<AboutPage/>} />
              <Route path="/Users" element={<UsersPage/>} />
              <Route path="/Usuarios" element={<Navigate to="/Users"/>} />
              <Route path="/Users/:id" element={<UserPage/>} />
              <Route path='/Dashboard/*' element={<Dashboard />}>
                  <Route path='welcome' element={<p>welcome...!!!</p>} />
                  <Route path='goodbye' element={<p>goodbye...!!!</p>} />
              </Route>
              <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
      </BrowserRouter>
  
  );
}


