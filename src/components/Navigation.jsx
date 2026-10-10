import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navigation p4-navigation" aria-label="Main navigation">
      <Link className="brand" to="/" aria-label="DEV@Deakin home">DEV@Deakin</Link>
      <div className="search-wrap">
        <span aria-hidden="true">⌕</span>
        <input type="search" placeholder="Search..." aria-label="Search" disabled />
      </div>
      <button className="nav-placeholder" type="button" disabled>Post</button>
      <Link className="nav-login" to="/login">Login</Link>
    </nav>
  );
}
