import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 15px 0;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 55px;
    div {
    margin-bottom: 0px;
    font-size: 20px;
    color: ${colors.light};

    span {
      margin-left: 8px;
      font-style: italic;
    }
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.light};

  h1 {
    margin-bottom: 2px;
  }

  h2 {
    margin-bottom: 20px;
  }

  button {
    width: 300px;
    height: 42px;
    border-radius: 5px;
    background: ${colors.purple};
    border: 0;
    color: ${colors.light};

    &:hover {
      opacity: 0.8;
    }

  }
`;

export const Form = styled.form.attrs(props => ({
  disabled: props.loading,
}))`
  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 234px;
    height: 38px;
    border: 0;
    background: #2e2f45;
    padding: 0 15px;
    color: ${colors.light};
    border-radius: 15px;
    margin: 0 15px;
    &::placeholder {
      opacity: 0.6;
    }
    @media (max-width: 840px) {
      margin: 20px 0 10px;
    }
  }
`;

export const Content = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
  }
  aside {
    width: 238px;
    background: ${colors.secondary};
    color: ${colors.light};
    border-radius: 15px;
    padding: 15px;
    @media (max-width: 840px) {
      width: 100%;
      margin-bottom: 20px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 138px;
      height: 138px;
      border-radius: 50%;
      border: 2px solid ${colors.light};
      background: ${colors.gray};
      margin-bottom: 15px;
    }
    div {
      width: 200px;
      text-align: center;
      p {
        margin: 20px 0;
      }
      ul {
        display: flex;
        flex-direction: column;
        padding-left: 60px;
        text-align: center;
        li {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          svg {
            margin-right: 5px;
          }
        }
      }
    }
  }
  main {
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 20px;
    color: ${colors.light};
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;

      @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 840px) {
        grid-template-columns: 1fr;
      }

      li {
        background: ${colors.secondary};
        border-radius: 15px;
        padding: 20px;

        span {
          display: flex;
          align-items: center;
          margin-top: 5px;

          svg {
            margin-right: 5px;
          }
        }
      }
    }
  }
`;
