import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-about">
          <h2>Contact</h2>
          <p>Thanks for visiting my personal website.</p>
          <a className="email-link" href="mailto:bhavika@email.com">
            <Mail size={16} aria-hidden="true" /> bhavika@email.com
          </a>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#about">About</a>
          <a href="#work">My Projects</a>
          <a href="https://www.deakin.edu.au/" target="_blank" rel="noreferrer">Deakin University</a>
        </div>
        <div className="footer-social">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Bhavika. All rights reserved.</div>
    </footer>
  );
}
