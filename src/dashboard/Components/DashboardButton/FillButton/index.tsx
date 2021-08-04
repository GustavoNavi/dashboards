import React, { ButtonHTMLAttributes } from 'react';
import { Sizes } from '../../../ts/enum/componentSize';
import DashboardText from '../../DashboardText';
import { StyContainer } from './styles';

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

/**
 * @description Fill Button Component
 * @param {string} id Id Component
 * @param {Function} action Action that the button is realize
 * @param {'button' | 'submit' | 'reset'} type primitive html buttons "button" | "submit" | "reset"
 * @param {Sizes} height Height of button
 * @param {Sizes} size Alternative way to define the size of button
 * @param {string} width Width of button
 * @param {string} title Title that will appear in the button's span
 * @param {JSX.Element} icon Icon yo show.
 * @param {boolean} disable Disabled button or not
 * @param {boolean} loading Component loading
 * @param {boolean} hasFontWeight Define if has font weight 600
 * @param {Sizes} sizeValue Define size of button's label 
 * @param {string} borderRadius Add a border radios on the button
 */
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
