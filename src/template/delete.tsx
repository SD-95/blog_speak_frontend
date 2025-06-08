import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';

const Delete = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  // 1. Fetch posts from backend
  useEffect(() => {
    axios.get(`${API_BASE}/posts`)
      .then(res => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(_err => {
        setError('Failed to load posts.');
        setLoading(false);
      });
  }, []);

  // 3. Delete post handler
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${API_BASE}/posts/${id}`);
      // 4. Update UI by removing deleted post
      setPosts(posts.filter(post => post.id !== id));
    } catch (err) {
      alert('Failed to delete post. Please try again.');
    }
  };

  return (
    <React.Fragment>
      <header className="masthead py-5 bg-light text-center">
        <Container>
          <h1>Delete a Post</h1>
          <p className="lead">Remove blog posts easily</p>
        </Container>
      </header>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            {loading && <p>Loading posts...</p>}
            {error && <p className="text-danger">{error}</p>}

            {!loading && posts.length === 0 && <p>No posts available.</p>}

            {posts.map(post => (
              <Card key={post.id} className="mb-3 p-3 shadow-sm">
                <h4>{post.title}</h4>
                <h6 className="text-muted">{post.subtitle}</h6>
                <p className="text-secondary mb-3">
                  By <strong>{post.author}</strong> | <em>{post.date}</em>
                </p>
                <Button variant="danger" onClick={() => handleDelete(post.id)}>
                  Delete
                </Button>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Delete;