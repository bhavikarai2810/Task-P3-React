import ArticleCard from './ArticleCard.jsx';

export default function ArticleSection({ articles }) {
  return (
    <section id="work" className="work-section">
      <h2>Here's what I've done so far</h2>
      <h2>My Projects</h2>
      <div className="projects">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
