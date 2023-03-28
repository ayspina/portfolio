import { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import Projects from '../../components/Projects/Projects';
import NavBar from '../../components/NavBar/NavBar';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
        <>
          <NavBar user={user} setUser={setUser}/>
          <About />
          <Projects />
          <Contact />

          <Routes>
            {/* <Route path='/about' element={<AboutPage />} />   
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/projects' element={<ProjectsPage />} /> */}
            <Route path='/login' element={<AuthPage setUser={setUser} />} /> 
          </Routes>
        </>
  
        

    </main>
  );
}

 
