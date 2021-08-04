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
 icon?: React.ReactNode;
 disable?: boolean;
 loading?: boolean;
 fitText?: boolean;
 hasFontWeight?: boolean;
 sizeValue?: Sizes;
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
 xxs: 30,
 xs: 50,
 lb: 80,
 sm: 100,
 md: 110,
 lg: 120,
 xl: 130,
}[size]);

export const DashboardUnderlineButton: React.FC<Props> = ({
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
 fitText = true,
 hasFontWeight = false,
 sizeValue,
 ...rest
}) => {
 return (
  <StyContainer
   width={width}
   size={getWidth(size)}
   height={getHeight(height)}
   disable={disable}
   fitText={fitText}
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
