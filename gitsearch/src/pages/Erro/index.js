import React from 'react';
import { toast } from 'react-toastify';
import { Container } from './styles';

export default function Erro() {
  toast.error('This page doesn\'t exist!');
  return (
    <Container>
      <strong>ERROR 404</strong>
      <span>Not found</span>
    </Container>


  );
}
