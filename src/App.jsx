import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotFoundPage from './components/404Page';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} index />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;