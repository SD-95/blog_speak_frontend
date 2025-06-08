import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]); // ✅ to hold fetched posts

  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    axios.get(`${API_BASE}/posts`)
      .then(res => setPosts(res.data))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  return (
    <React.Fragment>
      <Container fluid className="mt-5">
        <Row>
          {/* 80% Main Content */}
          <Col lg={9} md={8} sm={12}>
            {!selectedPost ? (
              <header className="masthead bg-light p-4 rounded shadow-sm">
                <div className="container">
                  <h1 className="display-5">Welcome to Blog Speaks</h1>
                  <p className="lead tagline">
                    Turning your thoughts into influence.
                  </p>
                </div>
              </header>
            ) : (
              <div className="post-details bg-light p-4 rounded shadow-sm">
                <h2 className="display-4 mb-3">{selectedPost.title}</h2>
                <h5 className="text-secondary fst-italic mb-3">{selectedPost.subtitle}</h5>
                <p className="text-muted mb-4">
                  Posted by <strong>{selectedPost.author}</strong> on{' '}
                  <em>{selectedPost.date}</em>
                </p>
                <hr />
                <p className="fs-5">{selectedPost.content}</p>
              </div>
            )}
          </Col>

          {/* 20% Sidebar */}
          <Col lg={3} md={4} sm={12}>
            <div className="bg-white p-3 border rounded shadow-sm">
              <h5 className="mb-3">Recent Posts</h5>
              <ListGroup variant="flush">
                {posts.length === 0 ? (
                  <p className="text-muted">No posts available</p>
                ) : (
                  posts.map((post, idx) => (
                    <ListGroup.Item
                      action
                      key={idx}
                      onClick={() => setSelectedPost(post)}
                    >
                      <strong>{post.title}</strong>
                      <br />
                      <small className="text-muted">
                        By {post.author} on {post.date}
                      </small>
                    </ListGroup.Item>
                  ))
                )}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Home;