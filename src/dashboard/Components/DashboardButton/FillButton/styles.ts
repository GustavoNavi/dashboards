import styled from 'styled-components';

export interface IsStyContainer {
  readonly disable: boolean;
  readonly height: number;
  readonly size?: number;
  readonly width?: string;
  readonly borderRadius?: string;
}

export const StyContainer = styled.div<IsStyContainer>`
  max-width: auto;
  width: ${(props) => props.width || `${props.size}px`};
  height: ${(props) => `${props.height}px`};
  border-radius: 2px;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '2px'};
  button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border: none;
    align-items: center;
    border-radius: 2px;
    background: rgba(51,114,214);
    cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
    border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '2px'};
    color: rgba(255,255,255);
    :hover {
      background: rgba(51,114,214, 0.9);
    }
  }
`;

export const StyLoadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
