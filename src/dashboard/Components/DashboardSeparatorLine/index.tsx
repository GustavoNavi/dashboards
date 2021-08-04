import React from 'react';
import { StyContainer } from './styles';

interface Props {
 id?: string;
 width?: string;
 height?: string;
 backgroundColor?: string;
 margin?: string;
}

/**
 * @description Dashboard Separtor Line.
 * @param {string} value text value.
 * @param {number} size text size.
 * @param {boolean} hasMargin text left margin.
 * @param {boolean} bold text bold condition.
 * @param {JSX.Element} icon text icon attribute.
 * @param {"regular" | "600" | "bold"} fontWeight text weight style.
 * @param {string} id text id.
 */
const DashboardSeparatorLine: React.FC<Props> = ({
 id = '',
 width = '',
 height = '',
 backgroundColor = '',
 margin = '',
}) => {
 return (
  <StyContainer
   id={id}
   width={width}
   height={height}
   margin={margin}
   backgroundColor={backgroundColor}
  />
 );
};

export default DashboardSeparatorLine;
