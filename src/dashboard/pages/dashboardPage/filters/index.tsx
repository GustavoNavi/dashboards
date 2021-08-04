import React, { useEffect, useState } from 'react';
import InfoIcon from '../../../../assets/icons/InfoIcon';
import { DashboardFillButton } from '../../../Components/DashboardButton/FillButton';
import { DashboardUnderlineButton } from '../../../Components/DashboardButton/UnderlineButton';
import DashboardRadio from '../../../Components/DashboardRadioGroup/DashboardRadio';
import DashboardSelectBox from '../../../Components/DashboardSelectBox';
import DashboardSpacingFormatter from '../../../Components/DashboardSpacingFormatter';
import DashboardText from '../../../Components/DashboardText';
import { useBundle } from '../../../hooks/useBundle';
import { bundleRoot } from '../../../i18n/root';
import { Sizes } from '../../../ts/enum/componentSize';
import { DashboardSpacing, SpacingDirection } from '../../../ts/enum/DashboardSpacing';

import {
 StyContainer,
 StyWrapperRadio,
 StyFilters,
} from './styles';

export interface IProps {
 id: string;
 children?: React.ReactNode;
 idiomOptions?: any;
 onChange?: Function;
 currentIdiom?: string;
 onShowModal?: Function;
}

/**
 * @description DashboardFilters Component.
 * @param {string} id Component Identification.
 * @param {ReactElement} children React elements children.
 * @param {object} idiomOptions Select idiom options.
 */
const DashboardFilters: React.FC<IProps> = ({
 id,
 onChange = () => null,
 onShowModal = () => null,
}) => {

 const {
  lbl_books_and_maganizes,
  lbl_clothing_and_clothing_accessories,
  lbl_computer_hardware,
  lbl_computer_software,
  lbl_drugs_health_aids,
  lbl_electronics_and_appliances,
  lbl_food_beer_wine,
  lbl_furniture_home_furnishings,
  lbl_Music_and_videos,
  lbl_office_equipment_supplies,
  lbl_sporting_goods,
  lbl_toys_hobby_games,
  lbl_other_merchandise2,
  lbl_nonmerchandise_receipts3,
  lbl_filters,
  lbl_product_type,
  lbl_product_year,
  lbl_comparison_over_years,
  lbl_select,
  msg_only_one_filter,
  btn_subtitles,
  btn_clean_filter
 } = useBundle(bundleRoot);

 const filterProductOptions: any = {
  0: lbl_books_and_maganizes,
  1: lbl_clothing_and_clothing_accessories,
  2: lbl_computer_hardware,
  3: lbl_computer_software,
  4: lbl_drugs_health_aids,
  5: lbl_electronics_and_appliances,
  6: lbl_food_beer_wine,
  7: lbl_furniture_home_furnishings,
  8: lbl_Music_and_videos,
  9: lbl_office_equipment_supplies,
  10: lbl_sporting_goods,
  11: lbl_toys_hobby_games,
  12: lbl_other_merchandise2,
  13: lbl_nonmerchandise_receipts3
 }

 const filterYearOptions: any = {
  0: '2015',
  1: '2014r',
  2: '2013r',
  3: '2012r',
  4: '2011r',
  5: '2010r',
  6: '2009',
  7: '2008',
  8: '2007',
  9: '2006',
  10: '2005',
  11: '2004',
  12: '2003',
  13: '2002',
  14: '2001',
  15: '2000',
  16: '1999'
 }

 const [radioCheck, setRadioCheck] = useState<boolean>(false);
 const [filterTO, setFilterTO] = useState<string | boolean>();
 const [filterName, setFilterName] = useState<string>();
 const [resetProduct, setResetProduct] = useState<boolean>(false);
 const [resetYear, setResetYear] = useState<boolean>(false);
 const [filterBundle, serFilterBundle] = useState<string>('');

 function selectRadio(option: string | boolean) {
  if (typeof option === 'string') {
   setRadioCheck(true);
   setFilterTO(true);
   setFilterName('radio');
  } else {
   setRadioCheck(!radioCheck);
   setFilterTO(!radioCheck);
   setFilterName('radio');
  }
  if (option === true) {
   setFilterName('');
  }
  setResetProduct(true);
  setResetYear(true);
 }

 function selectProduct(option: string) {
  setResetProduct(false);
  setRadioCheck(false);
  setResetYear(true);
  setFilterTO(option);
  serFilterBundle(option);
  setFilterName('product');
 }

 function selectYear(option: string) {
  setResetYear(false);
  setRadioCheck(false);
  setResetProduct(true);
  setFilterTO(option);
  serFilterBundle(filterYearOptions[option]);
  setFilterName('year');
 }

 function clearFilters() {
  setResetYear(true);
  setRadioCheck(false);
  setResetProduct(true);
  setFilterTO('');
  setFilterName('');
 }

 useEffect(() => {
  onChange(filterTO, filterName, filterBundle);
 }, [filterTO, filterName, filterBundle, onChange]);

 return (
  <StyContainer
   id={`${id}-id`}
  >
   <StyFilters>
    <DashboardSpacingFormatter
     marginDirection={SpacingDirection.LEFT}
     margin={DashboardSpacing.base25}
    >
     <DashboardText
      size={Sizes.lb}
      value={lbl_filters}
      fontWeight="600"
      color="rgb(255,255,255)"
     />
    </DashboardSpacingFormatter>
    <div style={{ height: '80px', display: 'flex' }}>
     <DashboardSpacingFormatter
      marginDirection={SpacingDirection.RIGHT_LEFT}
      margin={DashboardSpacing.base25}
     >
      <DashboardSelectBox
       label={lbl_product_type}
       id="filter-by-product"
       name="filterByProduct"
       options={filterProductOptions}
       onChange={(option: string) => selectProduct(option)}
       executeReset={resetProduct}
       placeholder={lbl_select}
       width="280px"
      />
     </DashboardSpacingFormatter>
     <DashboardSpacingFormatter
      marginDirection={SpacingDirection.RIGHT}
      margin={DashboardSpacing.base25}
     >
      <DashboardSelectBox
       label={lbl_product_year}
       id="filter-by-year"
       name="filterByYear"
       options={filterYearOptions}
       onChange={(option: string) => selectYear(option)}
       executeReset={resetYear}
       placeholder={lbl_select}
       width="215px"
      />
     </DashboardSpacingFormatter>
     <StyWrapperRadio>
      <DashboardRadio
       id="aqui"
       name="aaaa"
       label={lbl_comparison_over_years}
       checked={radioCheck}
       onChange={() => selectRadio(radioCheck)}
       outsideCircleColor='gray'
       labelColor="rgb(255,255,255, 0.8)"
      />
     </StyWrapperRadio>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
     <div style={{ width: '50%' }}>
      <DashboardSpacingFormatter
       marginDirection={SpacingDirection.LEFT}
       margin={DashboardSpacing.base25}
      >
       <DashboardText
        size={Sizes.sm}
        value={msg_only_one_filter}
        icon={<InfoIcon
         fill="rgba(51,114,214)"
         height="16px"
         width="16px"
        />}
        color="rgb(255,255,255)"
       />
      </DashboardSpacingFormatter>
     </div>
     <div style={{ display: 'flex', flexDirection: 'row', width: '50%', alignItems: 'center' }}>
      <DashboardUnderlineButton
       title={btn_clean_filter}
       id="underline-button-id"
       action={clearFilters}
      />
      <DashboardSpacingFormatter
       marginDirection={SpacingDirection.LEFT}
       margin={DashboardSpacing.base80}
      >
       <DashboardFillButton
        title={btn_subtitles}
        id="underline-button-id"
        action={() => onShowModal(true)}
       />
      </DashboardSpacingFormatter>
     </div>
    </div>
   </StyFilters>
  </StyContainer>
 );
};

export default DashboardFilters;
