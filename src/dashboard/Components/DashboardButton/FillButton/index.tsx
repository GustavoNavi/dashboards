import React, { ButtonHTMLAttributes } from 'react';
import { Sizes } from '../../../ts/enum/componentSize';
import DashboardText from '../../DashboardText';

import { StyContainer, StyLoadWrapper } from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {

 action?: () => void;
 height?: Sizes;
 width?: string;
 size?: Sizes;
 type?: 'button' | 'submit' | 'reset';
 title?: string;
 icon?: JSX.Element;
 disable?: boolean;
 id: string;
 loading?: boolean;
 hasFontWeight?: boolean;
 sizeValue?: Sizes;
 borderRadius?: string;
}

const getHeight = (size: keyof typeof Sizes): number =>
({
 xxs: 30,
 xs: 35,
 lb: 40,
 sm: 45,
 md: 50,
 lg: 55,
 xl: 60,
}[size]);

const getWidth = (size: keyof typeof Sizes): number =>
({
 xxs: 20,
 xs: 50,
 lb: 80,
 sm: 100,
 md: 110,
 lg: 120,
 xl: 130,
}[size]);

export const DashboardFillButton: React.FC<Props> = ({
 id,
 action = () => { },
 type = 'button',
 height = Sizes.lb,
 size = Sizes.md,
 width,
 title = '',
 icon,
 disable = false,
 loading = false,
 hasFontWeight = false,
 sizeValue,
 borderRadius,
 ...rest
}) => {
 return (
  <StyContainer
   width={width}
   size={getWidth(size)}
   height={getHeight(height)}
   disable={disable}
   borderRadius={borderRadius}
   id={`${id}-button-container-id`}
  >
   <button
    type={type}
    id={`${id}-button-id`}
    onClick={disable ? () => null : action}
    {...rest}
   >
    <>
     {icon && icon}
     <DashboardText
      id={`${title}-text-id`}
      value={title}
      size={sizeValue ? sizeValue : Sizes.lb}
      hasMargin={icon ? true : false}
      bold={hasFontWeight}
     />
    </>
   </button>
  </StyContainer>
 );
};
