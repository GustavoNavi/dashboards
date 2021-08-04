import styled from 'styled-components';

export interface IsStyContainer {
  readonly disable: boolean;
  readonly height?: number;
  readonly size?: number;
  readonly width?: string;
}

export const StyContainer = styled.div<IsStyContainer>`
  min-width: fit-content;
  max-width: auto;
  width: fit-content;
  height: fit-content;
  background: transparent;

  button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    border: none;
    align-items: center;
    background: none;
    color: rgba(51,114,214);
    font-size: 16px;
    cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};

    :hover {
      text-decoration: ${(props) => !props.disable && 'underline'};
    }
  }
`;

export const StyLoadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
