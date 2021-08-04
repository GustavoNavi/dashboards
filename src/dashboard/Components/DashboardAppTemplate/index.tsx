import { useBundle } from '../../hooks/useBundle';
import { bundleRoot } from '../../i18n/root';
import React, { useContext } from 'react';
import { LanguageContext } from '../../store/language';
import { StyShowContent } from './styles';
import { getLocalStorageItem, setLocalStorageItem } from '../../utils/NavigatorLanguage';
import DashboardTemplate from '../DashboardTemplate';

export interface ISidebarConfig {
 idiom: string;
}

interface IProps {
 children?: React.ReactNode;
}

export const AppTemplate: React.FC<IProps> = ({
 children,
}) => {
 const {
  lbl_portuguese,
  lbl_spanish,
  lbl_english,
 } = useBundle(bundleRoot);

 const { changeLanguage }: any = useContext(LanguageContext);

 const idiomOptions = {
  PT: lbl_portuguese,
  EN: lbl_english,
  ES: lbl_spanish,
 };

 /**
  * @description handle Sidebar idiom changes .
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
   <StyShowContent>
    <DashboardTemplate
     onChange={handleChangeIdiom}
     id="appTemplate"
     idiomOptions={idiomOptions}
     currentIdiom='PT'
    >
     {children}
    </DashboardTemplate>
   </StyShowContent>
  </>
 );
};

export default AppTemplate;
