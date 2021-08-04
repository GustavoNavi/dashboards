import React, { useState } from 'react';
import { getNavigatorLanguage } from '../utils/NavigatorLanguage';

const currentLanguage: string = getNavigatorLanguage();

export const LanguageContext: React.Context<{}> = React.createContext({});
const LanguageProvider: React.FC = ({ children }) => {
 const [language, setLanguage] = useState<string>(currentLanguage);

 /**
  * @description Change current system language.
  * @param language next language.
  */
 function changeLanguage(language: string) {
  localStorage.setItem('language', language);
  setLanguage(language);
 }

 return (
  <LanguageContext.Provider value={{ language, changeLanguage }}>
   {children}
  </LanguageContext.Provider>
 );
};

export default LanguageProvider;
