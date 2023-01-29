import React, { useState } from 'react';
import { Form, Input, Button, Message, Header } from 'semantic-ui-react';
import axios from 'axios';
import './styles.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3000/registration', formData);
      console.log(res);
    } catch (err) {
      setError(err.response.data.error);
    }
    setLoading(false);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    
      <Form onSubmit={handleSubmit} style={{ width: '30%' }}>
      <Header as='h1'>Login Form</Header>
        <Form.Field>
          <label>Email</label>
          <Input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder='Email'
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder='Password'
          />
        </Form.Field>
        <Button type='submit' loading={loading}>
          <Link to='/home'>Login</Link>
        </Button>
      </Form>
      {error && <Message negative>{error}</Message>}
    </div>
  )
}

export default Login;
