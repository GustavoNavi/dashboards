import React, { useState } from 'react';
import { StyLabel, StyContainer, StyRadio } from './styles';
import { Sizes } from '../../../ts/enum/componentSize';
import DashboardText from '../../DashboardText';
import RadioOnIcon from '../../../../assets/icons/RadioOnIcon';
import RadioOffIcon from '../../../../assets/icons/RadioOffIcon';
export interface IProps {
 id: string;
 label?: JSX.Element | string;
 name: string;
 size?: Sizes;
 value?: string;
 disable?: boolean;
 onChange?: () => void;
 labelColor?: string;
 fill?: string;
 outsideCircleColor?: string;
 checked: boolean;
 hasMarginLeft?: boolean;
}

const getSize = (size: keyof typeof Sizes): number =>
({
 xxs: 10,
 lb: 12,
 xs: 16,
 sm: 18,
 md: 20,
 lg: 22,
 xl: 50,
}[size]);

/**
 * @description Dashboard Radio Component.
 * @param {string} label component label value.
 * @param {string} name name used to found data in unForm and component name.
 * @param {string} value component value.
 * @param {string} id component id.
 * @param {Function} onChange method used to trigger actions on component change.
 * @param {boolean} disable disable component
 * @param {object} theme text size.
 * @param {boolean} checked text size.
 * @param {boolean} hasMarginLeft if has margin left.
 */
const DashboardRadio: React.FC<IProps> = ({
 label,
 name,
 value,
 id,
 onChange,
 size = Sizes.md,
 disable = false,
 checked = false,
 hasMarginLeft = false,
 labelColor = 'rgb(255,255,255)',
 fill = 'rgb(255,255,255)',
 outsideCircleColor = 'rgba(255,255,255, 0.1)',
}) => {
 const [focus, setFocus] = useState<boolean>(false);
 return (
  <StyContainer
   hasMarginLeft={hasMarginLeft}
   onKeyDown={() => setFocus(false)}
   onKeyUp={() => setFocus(true)}
   focusTab={focus}
   onClick={() => setFocus(false)}
  >
   <StyLabel
    onClick={disable ? () => { } : onChange}
    htmlFor={name}
    disable={disable}
    data-testid={id}
   >
    {checked ?
     <div id={`${id}-radio-on-id`}>
      <RadioOnIcon
       fill={fill}
       height={getSize(size)}
       width={getSize(size)}
       middleCircleColor="gray"
       outsideCircleColor={outsideCircleColor}
      />
     </div>
     :
     <div id={`${id}-radio-off-id`}>
      <RadioOffIcon
       outsideCircleColor={outsideCircleColor}
       fill={fill}
       height={getSize(size)}
       width={getSize(size)}
      />

     </div>
    }
    <StyRadio
     id={id}
     value={value}
     name={name}
     checked={checked}
     readOnly
     onClick={() => setFocus(false)}
    />
    {label && (
     <DashboardText
      id={`${id}-label-id`}
      value={label}
      size={Sizes.lb}
      color={labelColor}
      fontWeight="600"
      hasMargin={true}
     />
    )}
   </StyLabel>
  </StyContainer>
 );
};

export default DashboardRadio;
