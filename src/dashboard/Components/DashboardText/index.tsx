import React from 'react';
import { Sizes } from '../../ts/enum/componentSize';
import { StyContainer, StyIcon } from './styles';

interface Props {
 id?: string;
 value?: string | JSX.Element;
 size: Sizes;
 hasMargin?: boolean;
 bold?: boolean;
 fontWeight?: "regular" | "600" | "bold";
 color?: string;
 icon?: JSX.Element;
}

const getFontBySize = (size: Sizes): string =>
({
 lb: '16px',
 xxs: '12px',
 xs: '14px',
 sm: '16px',
 md: '18px',
 lg: '22px',
 xl: '36px',
}[size]);

/**
 * @description Dashboard Text Component.
 * @param {string} value text value.
 * @param {number} size text size.
 * @param {boolean} hasMargin text left margin.
 * @param {boolean} bold text bold condition.
 * @param {JSX.Element} icon text icon attribute.
 * @param {"regular" | "600" | "bold"} fontWeight text weight style.
 * @param {string} id text id.
 */
const DashboardText: React.FC<Props> = ({
 id = '',
 value = '',
 size,
 hasMargin = false,
 bold = false,
 fontWeight = 'regular',
 icon,
 color,
}) => {
 return (
  <StyContainer
   id={id}
   data-testid={id}
   size={size in Sizes ? getFontBySize(size as Sizes) : size}
   hasMargin={hasMargin}
   fontWeight={bold ? 'bold' : fontWeight}
   icon={icon ? true : false}
   color={color}
  >
   {icon &&
    <StyIcon>
     {icon}
    </StyIcon>
   }
   {value}
  </StyContainer>
 );
};

export default DashboardText;
