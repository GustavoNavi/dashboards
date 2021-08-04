import styled from 'styled-components';

export const StyContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  background-image: linear-gradient(gray, black);
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const StyRadioGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;