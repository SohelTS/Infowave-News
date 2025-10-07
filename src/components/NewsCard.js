import React from "react";

function NewsCard({ article }) {
  return (
    <div className="news-card">
      <img src={article.urlToImage || "https://via.placeholder.com/300x180"} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noreferrer" style={{ margin: "10px", color: "#1e90ff" }}>
        Read more
      </a>
    </div>
  );
}

export default NewsCard;
