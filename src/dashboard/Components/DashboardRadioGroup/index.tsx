import React, { useRef, useState } from 'react';
import { Sizes } from '../../ts/enum/componentSize';
import DashboardText from '../DashboardText';
import {
 StyContainer,
 StyPositionWrapper,
 StyLabel,
 StyIcon,
} from './styles';
import DashboardRadio from './DashboardRadio';

interface Props {
 id: string;
 name: string;
 label?: string;
 bindForm?: boolean;
 options: IOptions[];
 disable?: boolean;
 initialState?: string;
 onChange?: (data: string) => void;
 hasMarginLeft?: boolean;
 initialValue?: string;
 icon?: JSX.Element;
}

interface IOptions {
 value: string;
 label: JSX.Element | string;
}

/**
 * @description DashboardRadioGroup Component.
 * @param id Id Component
 * @param name Componente Name
 * @param options Options of component
 * @param onChange Action on change
 * @param label label about the radio
 * @param disable disable radio
 * @param initialState initial state position
 * @param hasMarginLeft has margin left
 * @param icon icon beside the text
 */
export const DashboardRadioGroup: React.FC<Props> = ({
 id,
 name,
 options,
 onChange = () => null,
 label = '',
 disable = false,
 initialState = '0',
 hasMarginLeft = false,
 icon,
}) => {
 const inputRef = useRef<HTMLInputElement>(null);
 const [selected, setSelected] = useState<string>(initialState);

 /**
  * @description Handle radio-group change.
  * @param value selected radio value.
  */
 function handleChange(value: string) {
  setSelected(value);
  onChange && onChange(value);
 }

 return (
  <StyContainer id={`${id}-container-id`}>
   <input
    id={id}
    data-testid={id}
    name={name}
    type="hidden"
    value={selected}
    ref={inputRef}
    autoComplete="off"
   />
   <StyLabel>
    <div>
     <DashboardText
      id={`${id}-label-id`}
      value={label}
      size={Sizes.xs}
      hasMargin={true}
      fontWeight="600"
     />
     <StyIcon>{icon}</StyIcon>
    </div>
   </StyLabel>
   <StyPositionWrapper>
    {options.map((op, index) => {
     return (
      <DashboardRadio
       key={op.value}
       id={`${id}-radio-option-${index}`}
       name={name}
       value={op.value}
       label={op.label}
       disable={disable}
       checked={selected === op.value}
       onChange={() => handleChange(op.value)}
       hasMarginLeft={hasMarginLeft}
      />
     );
    })}
   </StyPositionWrapper>
  </StyContainer>
 );
};

export default DashboardRadioGroup;
