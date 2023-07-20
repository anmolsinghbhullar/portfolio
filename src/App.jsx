import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/404Page';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} index />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/*' element={<NotFoundPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/projects' element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;