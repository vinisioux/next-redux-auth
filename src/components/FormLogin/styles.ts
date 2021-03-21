import styled from 'styled-components';

export const Container = styled.div`
  background: #2d2d2d;
  padding: 100px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  h1 {
    margin-bottom: 20px;
  }

  button {
    margin-top: 15px;
    width: 100%;
    border-radius: 5px;
    border: 0;
    height: 40px;
    background: #7328eb;
    color: #fff;
    font-size: 20px;
  }
`;

export const FieldInput = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }

  input {
    height: 40px;
    border-radius: 5px;
    border: 0;
    padding-left: 5px;
  }

  & + div {
    margin-top: 15px;
  }
`;
