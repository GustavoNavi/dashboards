import styled from 'styled-components';

export const StyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyPositionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const StyErrorWrapper = styled.div`
  width: max-content;
  & > span {
    display: flex;
    width: max-content;
  }
`;
export const StyLabel = styled.div`

  & > div {
    display: flex;
  }
  
`;

export const StyIcon = styled.div`
  margin-left: 6px;
  
  & > div > svg {
    cursor: pointer;
  }
`;