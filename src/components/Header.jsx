import { Search, UserRound } from 'lucide-react';

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="DEV@Deakin home">
        <span className="brand-dev">DEV</span><span className="brand-at">@</span><span className="brand-deakin">Deakin</span>
      </a>
      <form className="search" onSubmit={(event) => event.preventDefault()}>
        <Search size={18} aria-hidden="true" />
        <input aria-label="Search articles" placeholder="Search articles..." />
      </form>
      <nav className="header-actions" aria-label="Main navigation">
        <a href="#articles">Explore</a>
        <a className="write-link" href="#footer">Write an article</a>
        <a className="login-link" href="#footer"><UserRound size={17} /> Log in</a>
      </nav>
    </header>
  );
}