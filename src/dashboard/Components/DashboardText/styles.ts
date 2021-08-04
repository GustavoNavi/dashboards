import styled from 'styled-components';

interface IStyContainerProps {
  readonly size: string;
  readonly hasMargin: boolean;
  readonly fontWeight: "regular" | "600" | "bold";
  readonly icon: boolean;
  readonly color?: string;
}

export const StyContainer = styled.span<IStyContainerProps>`
  display: ${(props) => props.icon ? 'flex' : 'unset'};
  font-size: ${(props) => props.size};
  margin-left: ${(props) => (props.hasMargin ? '5px' : '0px')};
  font-weight: ${props => props.fontWeight};
  color: ${props => `${props.color}`};
`;

export const StyIcon = styled.div`
  justify-content: center;
  display: flex;
  margin-right: 6px;
  align-items: center;
  
  & > div > svg {
    cursor: pointer;
  }
`;