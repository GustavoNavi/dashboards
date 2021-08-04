
import styled from 'styled-components';
import { DashboardSpacing, SpacingDirection } from '../../ts/enum/DashboardSpacing';
import { IDashboardSpacingFormatter } from './interface';

function handleMargin(
 marginDirection: SpacingDirection | undefined,
 margin: DashboardSpacing | undefined
) {
 if (marginDirection && margin) {
  switch (marginDirection) {
   case SpacingDirection.TOP:
    return `${margin} 0px 0px 0px`;
   case SpacingDirection.RIGHT:
    return `0px ${margin} 0px 0px`;
   case SpacingDirection.BOTTOM:
    return `0px 0px ${margin} 0px`;
   case SpacingDirection.LEFT:
    return `0px 0px 0px ${margin}`;
   case SpacingDirection.RIGHT_LEFT:
    return `0px ${margin} 0px ${margin}`;
   case SpacingDirection.TOP_BOTTOM:
    return `${margin} 0px ${margin} 0px`;
   default:
    return `${margin}`;
  }
 }
}

function handlePadding(
 paddingDirection: SpacingDirection | undefined,
 padding: DashboardSpacing | undefined
) {
 if (paddingDirection && padding) {
  switch (paddingDirection) {
   case SpacingDirection.TOP:
    return `${padding} 0px 0px 0px`;
   case SpacingDirection.RIGHT:
    return `0px ${padding} 0px 0px`;
   case SpacingDirection.BOTTOM:
    return `0px 0px ${padding} 0px`;
   case SpacingDirection.LEFT:
    return `0px 0px 0px ${padding}`;
   case SpacingDirection.RIGHT_LEFT:
    return `0px ${padding} 0px ${padding}`;
   case SpacingDirection.TOP_BOTTOM:
    return `${padding} 0px ${padding} 0px`;
   default:
    return `${padding}`;
  }
 }
}

export const StyContainer = styled.div<IDashboardSpacingFormatter>`
  margin: ${(props) => handleMargin(props.marginDirection, props.margin)};
  padding: ${(props) => handlePadding(props.marginDirection, props.padding)};
`;
