
import React from 'react';
import { SpacingDirection } from '../../ts/enum/DashboardSpacing';
import { IDashboardSpacingFormatter } from './interface';
import { StyContainer } from './styles';

/**
 * @description Component used to pattern components spacing
 * @param {DashboardSpacing} margin margin size value
 * @param {DashboardSpacing} pading padding size value
 * @param {SpacingDirection} marginDirection Component margin direction
 * @param {SpacingDirection} paddingDirection Component padding direction
 */
const DashboardSpacingFormatter: React.FC<IDashboardSpacingFormatter> = ({
 margin = undefined,
 padding = undefined,
 marginDirection = SpacingDirection.ALL,
 paddingDirection = SpacingDirection.ALL,
 children,
}) => {
 return (
  <StyContainer
   margin={margin}
   padding={padding}
   marginDirection={marginDirection}
   paddingDirection={paddingDirection}
  >
   {children}
  </StyContainer>
 );
};

export default DashboardSpacingFormatter;
