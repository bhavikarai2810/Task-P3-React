import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-main">
        <div className="footer-about">
          <a className="brand footer-brand" href="#home"><span className="brand-dev">DEV</span><span className="brand-at">@</span><span className="brand-deakin">Deakin</span></a>
          <p>A community for sharing knowledge, stories and ideas.</p>
          <div className="social-links" aria-label="Social media">
            <a href="https://www.facebook.com/DeakinUniversity/" aria-label="Facebook"><Facebook /></a>
            <a href="https://twitter.com/Deakin" aria-label="Twitter"><Twitter /></a>
            <a href="https://www.instagram.com/deakinuniversity/" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.linkedin.com/school/deakin-university/" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#articles">Articles</a>
          <a href="#articles">Topics</a>
          <a href="#articles">Community</a>
        </div>
        <div className="footer-column">
          <h3>About</h3>
          <a href="https://www.deakin.edu.au/">About Deakin</a>
          <a href="#footer">Contact us</a>
          <a href="#footer">Help centre</a>
        </div>
        <div className="footer-newsletter">
          <h3>Stay in the loop</h3>
          <p>Get updates and stories from the DEV@Deakin community.</p>
          <form onSubmit={(event) => { event.preventDefault(); alert('Thanks for subscribing!'); }}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 DEV@Deakin. Student project.</span>
        <div><a href="#footer">Privacy</a><a href="#footer">Terms</a></div>
      </div>
    </footer>
  );
}