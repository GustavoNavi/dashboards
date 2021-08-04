import React from 'react';
import { Sizes } from '../../ts/enum/componentSize';
import { StyContainer } from './styles';

const getWidthBySize = (size: keyof typeof Sizes): number =>
({
 xxs: 5,
 lb: 10,
 xs: 20,
 sm: 40,
 md: 60,
 lg: 80,
 xl: 98,
}[size]);

interface Props {
 width?: Sizes;
 hasMargin?: boolean;
 hasShadow?: boolean;
 hasBorderRadius?: boolean;
 hasBackground?: boolean;
 hasPadding?: boolean;
}

/**
 * @description Dashboard Page Body.
 * @param {number} width page width.
 * @param {boolean} hasMargin page margin condition.
 * @param {boolean} hasShadow page shadow condition.
 * @param {boolean} hasBorderRadius page border-radius condition.
 * @param {boolean} hasBackground page background condition.
 * @param {boolean} hasPadding page padding condition.
 */
export const DashboardPage: React.FC<Props> = ({
 children,
 hasMargin = true,
 hasShadow = true,
 hasBorderRadius = false,
 hasBackground = true,
 hasPadding = true,
 width = Sizes.xl,
}) => {
 return (
  <StyContainer
   width={getWidthBySize(width)}
   hasMargin={hasMargin}
   hasShadow={hasShadow}
   hasBorderRadius={hasBorderRadius}
   hasBackground={hasBackground}
   hasPadding={hasPadding}
  >
   {children}
  </StyContainer>
 );
};
export default DashboardPage;
