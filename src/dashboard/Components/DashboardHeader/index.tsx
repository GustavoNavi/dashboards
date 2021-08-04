import React, { useContext } from 'react';
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
import { LanguageContext } from '../../store/language';
import { getLocalStorageItem, setLocalStorageItem } from '../../utils/NavigatorLanguage';
import { ISidebarConfig } from '../DashboardAppTemplate';

/**
 * @description Dasboard Header Component.
 */
const DashboardHeader: React.FC<{}> = () => {

 const radioOptions = [
  { value: 'PT', label: <BrazilFlagIcon width="30px" height="30px" /> },
  { value: 'EN', label: <UnitedStatesFlagIcon width="30px" height="30px" /> },
  { value: 'ES', label: <SpainFlagIcon width="30px" height="30px" /> },
 ];

 const { changeLanguage }: any = useContext(LanguageContext);

 /**
  * @description Handle idiom changes .
  * @param {string} idiom.
  */
 function handleChangeIdiom(idiom: string) {
  const config: any = getLocalStorageItem('sidebarConfigs');
  const sidebarConfigs: ISidebarConfig = JSON.parse(config);
  sidebarConfigs.idiom = idiom;
  setLocalStorageItem(
   'sidebarConfigs',
   JSON.stringify(sidebarConfigs),
   false
  );
  changeLanguage(idiom);
 }

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
       onChange={(data: string) => handleChangeIdiom(data)}
       hasMarginLeft={true}
      />
     </DashboardSpacingFormatter>
    </StyRadioGroupWrapper>
   </StyContainer>
  </>
 );
};

export default DashboardHeader;