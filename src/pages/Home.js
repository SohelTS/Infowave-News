// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { BASE_URL, NEWS_API_KEY } from "../config";
// import NewsCard from "../components/NewsCard";
// import Loader from "../components/Loader";

// function Home() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await axios.get(`${BASE_URL}/top-headlines`, {
//           params: {
//             country: "us",
//             apiKey: "103a25ae536d4e94bd5357ab64a95f86",
//           },
//         });
//         setArticles(res.data.articles);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading) return <Loader />;

//   return (
//     <div className="news-container">
//       {articles.length > 0 ? articles.map((article, index) => <NewsCard key={index} article={article} />) : <p>No news found</p>}
//     </div>
//   );
// }

// export default Home;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, NEWS_API_KEY } from "../config";
import NewsCard from "../components/NewsCard";
import Loader from "../components/Loader";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const targetUrl = `${BASE_URL}/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

        const response = await axios.get(proxyUrl + encodeURIComponent(targetUrl));
        const data = JSON.parse(response.data.contents);

        if (data.articles) setArticles(data.articles);
        else setError("No articles found");
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default Home;


