import React from 'react';
import { Sizes } from '../../ts/enum/componentSize';
import { DashboardSpacing, SpacingDirection } from '../../ts/enum/DashboardSpacing';
import DashboardRadioGroup from '../DashboardRadioGroup';
import DashboardSeparatorLine from '../DashboardSeparatorLine';
import DashboardSpacingFormatter from '../DashboardSpacingFormatter';
import DashboardText from '../DashboardText';
import { StyContainer, StyRadioGroupWrapper } from './styles';
import BrazilFlagIcon from '../../../assets/icons/countries/Brazil';
import SpainFlagIcon from '../../../assets/icons/countries/Spain';
import UnitedStatesFlagIcon from '../../../assets/icons/countries/USA';

interface IProps {
 onChange?: Function;
}

/**
 * @description Dasboard Header Component.
 */
const DashboardHeader: React.FC<IProps> = ({
 onChange = () => null
}) => {

 const radioOptions = [
  { value: 'PT', label: <BrazilFlagIcon width="30px" height="30px" /> },
  { value: 'EN', label: <UnitedStatesFlagIcon width="30px" height="30px" /> },
  { value: 'ES', label: <SpainFlagIcon width="30px" height="30px" /> },
 ];

 return (
  <>
   <StyContainer>
    <DashboardSpacingFormatter
     marginDirection={SpacingDirection.LEFT}
     margin={DashboardSpacing.base25}
    >
     <img src="/images/KabumLogo.png" alt='KaBuM Logo' width="150px" height="65px" />
    </DashboardSpacingFormatter>
    <DashboardSpacingFormatter
     marginDirection={SpacingDirection.RIGHT_LEFT}
     margin={DashboardSpacing.base20}
    >
     <DashboardSeparatorLine
      height="45px"
      width="1px"
      backgroundColor="rgb(255,255,255)"
     />
    </DashboardSpacingFormatter>
    <DashboardText
     size={Sizes.lg}
     fontWeight="600"
     value="Dashboard"
     color="rgb(255,255,255)"
    />
    <StyRadioGroupWrapper>
     <DashboardSpacingFormatter
      marginDirection={SpacingDirection.RIGHT}
      margin={DashboardSpacing.base25}
     >
      <DashboardRadioGroup
       id="profile-type"
       name="isGeneric"
       options={radioOptions}
       initialState="PT"
       onChange={(data: string) => onChange(data)}
       hasMarginLeft={true}
      />
     </DashboardSpacingFormatter>
    </StyRadioGroupWrapper>
   </StyContainer>
  </>
 );
};

export default DashboardHeader;