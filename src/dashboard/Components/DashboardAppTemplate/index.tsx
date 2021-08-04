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

 return (
  <>
   <StyShowContent>
    <DashboardTemplate id="DashboardTemplate-id">
     {children}
    </DashboardTemplate>
   </StyShowContent>
  </>
 );
};

export default AppTemplate;
