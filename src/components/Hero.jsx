export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow">LEARN · SHARE · GROW</p>
        <h1>DEV@Deakin</h1>
        <p>A place for students to share ideas, discover useful resources and learn together.</p>
        <a className="primary-button" href="#articles">Explore articles</a>
      </div>
      <img
        className="hero-image"
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55fauto=format&fit=crop&w=1200&q=80"
        alt="Students working together around a table"
      />
    </section>
  );
}