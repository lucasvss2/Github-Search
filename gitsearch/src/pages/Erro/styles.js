import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.light};

  strong {
    font-size: 40px;
  }

  span {
    margin-top: 20px;
    font-size: 20px;
  }
`;
