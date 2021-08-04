import styled, { css } from 'styled-components';

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
