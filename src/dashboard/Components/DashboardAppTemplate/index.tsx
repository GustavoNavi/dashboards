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

/**
 * @description AppTemplate of all pages.
 * @param {React.ReactNode} children Page inside AppTemplate. 
 */
export const AppTemplate: React.FC<IProps> = ({
 children,
}) => {

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
   <StyShowContent>
    <DashboardTemplate
     onChange={handleChangeIdiom}
     id="appTemplate"
    >
     {children}
    </DashboardTemplate>
   </StyShowContent>
  </>
 );
};

export default AppTemplate;
