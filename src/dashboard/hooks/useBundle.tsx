import { LanguageContext } from '../store/language';
import { useContext } from 'react';
import { getNavigatorLanguage } from '../utils/NavigatorLanguage';

export interface IBundleRoot {
 pt: Object;
 en: Object;
 es: Object;
}

/**
 * @description Dasboard Bundle I18N Hook.
 * @param root product root bundles
 * @returns i18n bundles.
 */
export function useBundle(root: any): any {
 const { language }: any = useContext(LanguageContext);
 const bundleIdiom = language
  ? language.toLowerCase()
  : getNavigatorLanguage().toLowerCase();
 return root[bundleIdiom];
}
