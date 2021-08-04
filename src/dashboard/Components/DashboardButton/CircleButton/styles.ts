import styled from 'styled-components';

export interface IsStyContainer {
  readonly disable: boolean;
  readonly height?: number;
  readonly size?: number;
  readonly width?: string;
  readonly background: boolean;
  readonly selected: boolean;
}

export const StyContainer = styled.div<IsStyContainer>`
  width: ${(props) => props.width || `${props.size}px`};
  height: ${({ height }) => `${height}px`};
  background: transparent;
  border-radius: 50%;

  button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border: none;
    align-items: center;
    border-radius: 50%;
    background: transparent;
    font-size: 16px;
    cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};

    :hover {
      background: rgba(51,114,214,0.2);
    }
  }
`;
