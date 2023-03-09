import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import NavBar from '../../components/NavBar/NavBar';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path='/about' element={<AboutPage />} />   
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/login' element={<AuthPage setUser={setUser} />} /> 
            <Route path='/*' element={<AboutPage />} />
          </Routes>
        </>
  
        

    </main>
  );
}

 
