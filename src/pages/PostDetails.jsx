import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch post details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="post-details">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/" className="back-to-home">Back to Home</Link>
    </div>
  );
}

export default PostDetails;

