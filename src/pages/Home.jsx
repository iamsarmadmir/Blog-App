import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 5)); // Display first 5 posts for example
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch posts");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home">
      <h1>Latest Blog Posts</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
            <Link to={`/posts/${post.id}`} className="read-more">Read More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

