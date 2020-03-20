import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, Form } from './styles';

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const history = useHistory();

  async function handleSearch(e) {
    e.preventDefault();

    setLoading(true);

    if (username === '') {
      toast.warning('Insert any username.');
      setLoading(false);
      return;
    }

    try {
      const response = await api.get(`/users/${username}`);

      history.push('/profile', { data: response.data });
      setLoading(false);
    } catch (err) {
      toast.error('User not found!');
      setLoading(false);
    }
  }

  return (
    <Container>
        <div>
          <strong>Github</strong>
          <span>Search</span>
        </div>

        <Form onSubmit={handleSearch}>
          <input onChange={e => setUsername(e.target.value)} placeholder="Enter with your github username" />
          <button type="submit">{loading ? 'Carregando...' : 'Search'}</button>
        </Form>
    </Container>
  );
}
