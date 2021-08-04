import styled, { css } from 'styled-components';

export const StyRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  a {
    text-decoration: none;

    div {
      width: auto;

      button {
        padding: 5px;
      }
    }
  }
`;

export const StySearchAndFilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  & > button {
    margin-left: 20px;
  }
`;

export const StyHierarchyWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;

  & > div:first-of-type {
    position: absolute;
    align-self: flex-end;

    & > svg {
      display: inline-flex;
      margin-right: 135px;
    }
  }
`;

interface IStyWrapperBar {
  readonly width: string;
  readonly height: string;
}

export const StyWrapperBar = styled.div<IStyWrapperBar>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: justify;
`;

export const StyWrapperFilters = styled.div`
  margin: 20px 25px 0px 25px;
`;

export const StySpinner = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
`;

export const StyLabelInfo = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
`;

interface IStyBar {
  readonly inline: boolean;
}

export const StyBar = styled.div<IStyBar>`
  display: flex;
  padding: 25px 0px;

  ${(props) =>
    props.inline ?
      css`
    flex-flow: wrap;
    justify-content: space-around;
`
      :
      css`
  flex-direction: column;
  align-items: center;
`
  }
  `
