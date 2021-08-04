import styled from 'styled-components';

export const StyContainer = styled.div`
  width: 120px;
  height: 120px;
  border: 3px solid rgb(255,255,255,0.9);
  border-left-color: orange;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;