import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';
import { Container, FormContainer, FieldInput } from './styles';

export function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <h1>Faça seu login</h1>

        <FieldInput>
          <label htmlFor='email'>E-mail</label>
          <input
            type='text'
            id='email'
            placeholder='Digite seu e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FieldInput>

        <FieldInput>
          <label htmlFor='password'>Senha</label>
          <input
            type='password'
            id='password'
            placeholder='Digite sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FieldInput>

        <button type='submit'>Entrar</button>
      </FormContainer>
    </Container>
  );
}
