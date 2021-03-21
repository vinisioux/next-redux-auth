import { store } from '../store';

import { FormLogin } from '../components/FormLogin';

import { Container } from '../styles/pages/home';
import Dashboard from './dashboard';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isSigned, setIsSigned] = useState(false);
  const { signed } = store.getState().auth;

  useEffect(() => {
    setIsSigned(signed);
  }, [signed]);

  if (!isSigned) {
    return (
      <Container>
        <FormLogin />
      </Container>
    );
  } else {
    return (
      <Container>
        <Dashboard />
      </Container>
    );
  }
}
