import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Add = () => {
  // 1. State for form inputs
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    author: '',
    content: ''
  });

  // Optional state for success/error messages
  const [message, setMessage] = useState('');

  // 2. Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 3. Handle form submit
  const API_BASE = import.meta.env.VITE_API_BASE_URL;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post(`${API_BASE}/posts`, formData);
      setMessage('Post submitted successfully!');
      // 4. Reset form
      setFormData({ title: '', subtitle: '', author: '', content: '' });
    } catch (error) {
      setMessage('Failed to submit post. Please try again.');
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <header className="masthead py-5 bg-light text-center">
        <Container>
          <h1>Add a New Blog Post</h1>
          <p className="lead">Share your thoughts with the world</p>
        </Container>
      </header>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="p-4 shadow-sm">
              <h2 className="text-center mb-4">Create Post</h2>
              {message && <p className="text-center">{message}</p>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="postTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter post title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="postSubtitle">
                  <Form.Label>Subtitle</Form.Label>
                  <Form.Control
                    type="text"
                    name="subtitle"
                    placeholder="Enter subtitle"
                    value={formData.subtitle}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="postAuthor">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    type="text"
                    name="author"
                    placeholder="Your name"
                    value={formData.author}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="postContent">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="content"
                    rows={5}
                    placeholder="Write your post here..."
                    value={formData.content}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="text-center">
                  <Button type="submit" variant="primary">
                    Submit Post
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Add;