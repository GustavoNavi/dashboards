import styled from 'styled-components';

interface IStyContainerProps {
  readonly width: number;
  readonly hasShadow: boolean;
  readonly hasMargin: boolean;
  readonly hasBorderRadius: boolean;
  readonly hasBackground: boolean;
  readonly hasPadding: boolean;
}

export const StyContainer = styled.div<IStyContainerProps>`
  width: 96%;
  height: 100%;
  min-height: 400px;
  margin: 2% 2% 2% 2%;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.4),
      0px 4px 5px 0px rgba(0, 0, 0, 0.4),
      0px 1px 10px 0px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  background-color: rgb(255,255,255, 0.9);
`;
