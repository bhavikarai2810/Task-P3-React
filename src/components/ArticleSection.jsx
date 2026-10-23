import { ArrowUpRight } from 'lucide-react';

function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <img src={article.image} alt="" className="article-image" />
      <div className="article-content">
        <span className="category">{article.category}</span>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <div className="article-bottom">
          <span>By {article.author}</span>
          <a href="#footer" aria-label={`Read ${article.title}`}><ArrowUpRight size={19} /></a>
        </div>
      </div>
    </article>
  );
}

export default function ArticleSection({ title, articles }) {
  return (
    <section className="article-section" id="articles">
      <div className="section-heading">
        <h2>{title}</h2>
        <a href="#footer">View all articles <span aria-hidden="true">→</span></a>
      </div>
      <div className="article-grid">
        {articles.map((article) => <ArticleCard key={article.id} article={article} />)}
      </div>
    </section>
  );
}