import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  // const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines/sources?apiKey=09658cd7f2554410a2153c9d534e3df4",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        // Update the state with the fetched articles
        setArticles(data.sources);
      } catch (error) {
        console.log("Error fetching articles", error);
      }
    };

    fetchArticles(); // Call the fetchArticles function
  }, []);

  return (
    <>
      <div>
        <div className="flex gap-10">
          <div className="w-6/12 mx-10 h-screen overflow-auto">
            <h1 className="text-center font-semibold text-3xl">Articles</h1>
            {articles &&
              articles.map((article) => (
                <div key={article.id} className="p-4">
                  <div className="font-semibold text-xl">{article.name}</div>
                  <div>{article.description}</div>
                  <Link to={article.url}>
                    <div className="text-blue-800">{article.url}</div>
                  </Link>
                </div>
              ))}
          </div>
          <div className="w-full  overflow-hidden ">
            <h1 className="font-semibold text-3xl w-96 m-auto text-center">
              Videos
            </h1>
            <div className="flex justify-center w-full  overflow-x-scroll h-80 overflow-y-hidden">
              {articles &&
                articles.map((article) => (
                  <div key={article.id} className="p-4">
                    <div className="font-semibold text-xl">{article.name}</div>
                    <div>{article.description}</div>
                    <Link to={article.url}>
                      <div className="text-blue-800">{article.url}</div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleList;
