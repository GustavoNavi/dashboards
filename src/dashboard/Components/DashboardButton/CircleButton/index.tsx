import React, { ButtonHTMLAttributes } from 'react';
import { Sizes } from '../../../ts/enum/componentSize';

import { StyContainer } from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {

 action?(): void;
 width?: string;
 size?: Sizes;
 height?: Sizes;
 type?: 'button' | 'submit' | 'reset';
 icon?: JSX.Element;
 disable?: boolean;
 id: string;
 background?: boolean;
 selected?: boolean;
}

const getWidth = (size: keyof typeof Sizes): number =>
({
 xxs: 20,
 xs: 30,
 sm: 40,
 md: 45,
 lg: 50,
 lb: 55,
 xl: 60,
}[size]);

const getHeight = (size: keyof typeof Sizes): number =>
({
 xxs: 20,
 xs: 30,
 sm: 40,
 md: 45,
 lg: 50,
 lb: 55,
 xl: 60,
}[size]);

export const DashboardCircleButton: React.FC<Props> = ({
 id,
 action = () => { },
 type = 'button',
 size = Sizes.md,
 width,
 height = Sizes.md,
 icon,
 disable = false,
 background = false,
 selected = false,
 ...rest
}) => {
 return (
  <StyContainer
   height={getHeight(height)}
   width={width}
   size={getWidth(size)}
   disable={disable}
   background={background}
   selected={selected}
  >
   <button
    type={type}
    id={`${id}-button-id`}
    onClick={disable ? () => null : action}
    {...rest}
   >
    {icon && icon}
   </button>
  </StyContainer>
 );
};
