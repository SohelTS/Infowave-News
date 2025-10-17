import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, NEWS_API_KEY } from "../config";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";

function Home({ category }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError("");

      try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const targetUrl = `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${NEWS_API_KEY}`;
        const response = await axios.get(proxyUrl + encodeURIComponent(targetUrl));
        const data = JSON.parse(response.data.contents);

        if (data.articles) setArticles(data.articles);
        else setError("No articles found");
      } catch (err) {
        console.error("Error fetching:", err);
        setError("Failed to load news. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]); 

  if (loading) return <Loader />;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <div className="news-container">
      {articles.map((article, i) => (
        <NewsCard key={i} article={article} />
      ))}
    </div>
  );
}

export default Home;
