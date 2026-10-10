import ForgotPassword from './ForgotPassword.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Banner from './components/Banner.jsx';
import About from './components/About.jsx';
import ArticleSection from './components/ArticleSection.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import { articles } from './data/articles.js';

function HomePage() {
  return (
    <>
      <Banner />
      <main>
        <About />
        <hr className="section-divider" />
        <ArticleSection articles={articles} />
        <Gallery />
      </main>
    </>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <Navigation />
      {location.state?.message && location.pathname === '/login' && <p className="success-message">{location.state.message}</p>}
      <Routes>
        <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}
