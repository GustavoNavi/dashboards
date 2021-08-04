import styled from 'styled-components';

interface IStyContainerProps {
  readonly width: string;
  readonly height: string;
  readonly margin: string;
  readonly backgroundColor: string;
}

export const StyContainer = styled.div<IStyContainerProps>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  margin: ${(props) => props.margin};
`;