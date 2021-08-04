import styled, { css } from 'styled-components';

interface IContainer {
  readonly hasLabel: boolean;
  readonly width: string;
}

export const StyContainer = styled.div<IContainer>`
  position: relative;
  align-self: ${(props) => (!props.hasLabel ? 'flex-end' : 'unset')};
  width: ${(props) => props.width};
`;

interface IWrapper {
  readonly height: number;
  readonly width: string;
  readonly display: number;
}

export const StyWrapper = styled.div<IWrapper>`
  margin-top: 5px;
  background: rgba(66,65,65,0.03);
  position: ${(props) => (props.display === 1 ? 'absolute' : 'unset')};
  z-index: 2;
  height: ${(props) => `${props.height}px`};
  width: 100%;
  ${(props) =>
    props.display &&
    css`
      box-shadow: 0px 4px 7px 2px rgba(0, 0, 0, 0.1);
    `};
  & > span {
    display: flex;
    width: max-content;
  }
`;

interface IFakeBox {
  readonly disable: boolean;
  readonly isOpen: boolean;
  readonly height: number;
}

export const StyFakeBox = styled.div<IFakeBox>`
  align-items: center;
  height: ${(props) => `${props.height}px`};
  background: rgba(255,255,255,0.9);
  display: flex;
  flex-direction: row;
  border-radius: 1px;
  transition: 0.3s;
  justify-content: space-between;
  pointer-events: all;  
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
  border: rgba(255,255,255,0.00);
  ${(props) =>
    props.isOpen &&
    css<IFakeBox>`
      border: solid 1px rgba(51,114,214)};
      transition: 0.3s;
    `}

  & > span:first-of-type {
    color: rgba(66,65,65);
    font-weight: normal;
    padding-left: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
  }

  :focus {
    border: solid 1px rgba(51,114,214);
  }
`;

export const StyIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  #close {
    pointer-events: all;
    margin-right: 7px;
  }
  #arrow {
    pointer-events: none;
  }
`;

export const StyOptions = styled.div`
  background: rgba(255,255,255);
  z-index: 4;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: absolute;
`;

interface IItems {
  readonly maxRows: string;
}
export const StyItems = styled.div<IItems>`
  z-index: 200;
  max-height: ${(props) => props.maxRows};
  width: 100%;
  overflow-x: hidden;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: rgba(255,255,255);
  }
  ::-webkit-scrollbar-thumb:vertical {
    background-color: rgba(66,65,65,0.3);
  }
`;

interface IITem {
  readonly isSelected: boolean;
  readonly isDisabled: boolean;
}

export const StyItem = styled.div<IITem>`
  width: 100%;
  z-index: 300;
  cursor:  ${(props) => props.isDisabled ? "not-allowed" : "pointer"};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 35px;
  border-bottom: 0.1px solid #F0F0F0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: ${(props) =>
    props.isSelected && !props.isDisabled
      ? 'rgb(133,121,104)'
      : 'rgba(255,255,255)'};

  :focus {
    border: solid 1px rgba(51,114,214);
  }

  & > div {
    display: flex;
    height: 100%;
    width: 100%;
    padding-left: 5px;
    align-items: center;
    background: none;

    & > span {
      display: flex;
      color: ${(props) =>
    props.isSelected
      ? 'rgba(255,255,255)'
      : 'rgba(66,65,65)'};
      font-weight: normal;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    & > svg {
      margin-right: 5px;
    }

    :hover {
      background: ${(props) =>
    props.isSelected
      ? 'rgba(255,255,255,0.1)'
      : 'rgba(255,150,55,0.07)'};
    }
  }
`;

export const StyLoadWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const StyFilterWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 5px 5px 0 5px;
`;

interface IStyFilterInput {
  readonly fontSize: number;
}
export const StyFilterInput = styled.input<IStyFilterInput>`
  height: 35px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  background: rgba(66,65,65,0.03);
  border: 1px solid rgba(31,31,31,0.08);
  font-size: ${(props) => `${props.fontSize}rem`};
  color: rgba(66,65,65,0.8);
  padding-left: 5px;
  transition: 0.3s;
  padding-right: 55px;
  
  :focus {
    border: 1px solid rgba(51,114,214);
    transition: 0.3s;
  }
`;

interface IStyLabel {
  readonly disable?: boolean;
}

export const StyLabel = styled.div<IStyLabel>`
  width: max-content;
  transition: 0.3s;
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'default')};
`;

export const StyErrorWrapper = styled.div`
  width: max-content;
`;

interface ISelectedWrapper {
  readonly disable: boolean;
}

export const StySelectedWrapper = styled.div<ISelectedWrapper>`
  display: flex;
  align-items: center;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span {
    color: rgba(66,65,65);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > svg {
    margin-left: 10px;
  }
`;

export const StyPlaceholder = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  transition: 0.3s;
  cursor: pointer;
  span {
    color: rgba(66,65,65,0.6);
  }

  & > svg {
    margin-left: 10px;
  }
`;

export const StySearchWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-self: center;
  margin-left: auto;
  padding-right: 10px;
  position: absolute;
  right: 0;
  margin-top: 5px;
  align-items: center;

  & > hr {
    margin-right: 8px;
  }

  & > svg {
    margin-right: 8px;
  }
`;
