import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  div {
    margin-bottom: 40px;
    font-size: 30px;
    color: ${colors.light};

    span {
      margin-left: 8px;
      font-style: italic;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    width: 235px;
    height: 42px;
    border-radius: 5px;
    background: ${colors.secudary};
    border: 0;
    color: ${colors.gray};
    padding: 0 15px;
    margin-bottom: 15px;
  }

  button {
    width: 235px;
    height: 42px;
    border-radius: 5px;
    background: ${colors.purple};
    border: 0;
    color: ${colors.light};
    opacity: ${props => props.loading ? 0.5 : 1};

    &:hover {
      opacity: 0.8;
    }

  }
`;
