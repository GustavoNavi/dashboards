import React from 'react';
import {
 StyContainer,
 StyFooterWrapper,
} from './styles';
import { withTheme, StyledProps } from 'styled-components';
import DashboardText from '../DashboardText';
import { Sizes } from '../../ts/enum/componentSize';
import DashboardSeparatorLine from '../DashboardSeparatorLine';
import DashboardSpacingFormatter from '../DashboardSpacingFormatter';
import { DashboardSpacing, SpacingDirection } from '../../ts/enum/DashboardSpacing';

/**
 * @description Dashboard Footer Page.
 */
const DashboardFooter: React.FC<StyledProps<{}>> = ({ }) => {

 /**
  * @description Get current year.
  * @returns current year.
  */
 function getCurrentYear(): number {
  const currentDate = new Date();
  return currentDate.getFullYear();
 }

 return (
  <StyContainer >
   <DashboardSeparatorLine
    height="2px"
    backgroundColor="rgba(255, 255, 255, 0.6)"
    margin="20px 25px 20px 25px"
   />
   <DashboardSpacingFormatter
    marginDirection={SpacingDirection.RIGHT_LEFT}
    margin={DashboardSpacing.base25}
   >
    <DashboardSpacingFormatter
     marginDirection={SpacingDirection.BOTTOM}
     margin={DashboardSpacing.base20}
    >
     <StyFooterWrapper>
      <img src="/images/KabumLogo.png" alt='KaBuM Logo' width="150px" height="65px" />
      <DashboardText
       id="footerId"
       value={`Copyright © ${getCurrentYear()} - KaBuM - All right reserved`}
       color='rgb(255,255,255)'
       size={Sizes.xxs}
      />
     </StyFooterWrapper>
    </DashboardSpacingFormatter>
   </DashboardSpacingFormatter>
  </StyContainer>
 );
};

export default withTheme(DashboardFooter);
