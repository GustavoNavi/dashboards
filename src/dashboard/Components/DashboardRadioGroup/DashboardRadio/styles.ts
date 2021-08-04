import styled, { css } from 'styled-components';

export interface ILabel {
  color?: string;
  onClick?: Function;
  disable: boolean;
}
export const StyLabel = styled.label<ILabel>`
  display: flex;
  align-items: center;
  position: relative;
  height: 22px;
  width: fit-content;
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
  user-select: none;
  color: green;
  font-size: 16px;

  svg {
    display: flex;
  };

  &:hover span,
  input:checked ~ span {
    background-color: ${(props) => props.color};
  }
  &:hover {
    & > svg {
      z-index: 2;
    }
  }
`;

interface IContainer {
  readonly hasMarginLeft: boolean;
  readonly focusTab?: boolean;
}

export const StyContainer = styled.div<IContainer>`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 35px;
  display: flex;
  ${(props) =>
    props.hasMarginLeft
      ? css`
          :not(:first-of-type) {
            margin-left: 25px;
          }
          :first-of-type {
            margin-left: 5px;
          }
        `
      : css`
          margin-left: 5px;
        `}     
  border-radius: ${(props) => props.focusTab && `1px`}
`;

export const StyRadio = styled.input.attrs({
  type: 'radio',
})`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0; 
`;