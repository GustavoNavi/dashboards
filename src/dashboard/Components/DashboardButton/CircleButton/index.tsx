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

/**
 * @description Circle Button Component
 * @param {string} id Id Component
 * @param {Function} action Action that the button is realize
 * @param {'button' | 'submit' | 'reset'} type primitive html buttons "button" | "submit" | "reset"
 * @param {Sizes} height Height of button
 * @param {Sizes} size Alternative way to define the size of button
 * @param {string} width Width of button
 * @param {JSX.Element} icon Icon yo show.
 * @param {boolean} disable Disabled button or not
 * @param {boolean} background Define transparence of button
 * @param {selected} selected Define if is selected.
 */
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
