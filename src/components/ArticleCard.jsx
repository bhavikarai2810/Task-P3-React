export default function ArticleCard({ article }) {
  return (
    <article className="project">
      <img src={article.image} alt={article.alt} />
      <div className="project-info">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </div>
    </article>
  );
}
