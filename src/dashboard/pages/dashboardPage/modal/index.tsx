import React from 'react';
import CloseXIcon from '../../../../assets/icons/CloseXIcon';
import { DashboardCircleButton } from '../../../Components/DashboardButton/CircleButton';
import DashboardText from '../../../Components/DashboardText';
import { useBundle } from '../../../hooks/useBundle';
import { bundleRoot } from '../../../i18n/root';
import { Sizes } from '../../../ts/enum/componentSize';
import {
 StyCloseWrapper,
 StyContainer,
 StyContent,
 StyDialogWrapper,
 StyHeader,
 StyLine,
 StyModal,
 StyName,
 StyFormGroupInfo,
 StyJustifyText,
 StyLink
} from './styles';

interface IProps {
 id: string;
 isOpen: boolean;
 closeModal: () => void;
}

/**
 * @description Dashboard StatusModalInfo Component.
 * @param {string} id Component Id .
 * @param {boolean} isOpen If true the modal show up.
 * @param {Function} closeModal Function state to show modal.
 */
export const StatusModalInfo: React.FC<IProps> = ({
 id,
 isOpen = false,
 closeModal,
}) => {

 const {
  title_subtitles_information,
  msg_not_available,
  msg_estimate_s,
  msg_1_ecommerce,
  msg_2_includes_other,
  msg_3_includes_nonmerchandise,
  msg_revised_data_r,
  msg_note,
  msg_note_sales,
  msg_note_estimates,
 } = useBundle(bundleRoot);

 const optionBundles: string[] =
  [
   msg_not_available,
   msg_estimate_s,
   msg_1_ecommerce,
   msg_2_includes_other,
   msg_3_includes_nonmerchandise,
   msg_revised_data_r,
   msg_note_sales,
   msg_note_estimates,
  ]

 const optionAcronyms: string[] =
  [
   'NA - ',
   'S - ',
   '1 -',
   '2 -',
   '3 -',
   'r -',
   msg_note
  ];

 const optionLinks: string[] =
  [
   'http://www.census.gov/about/policies/quality/standards/standardf1.html',
   'http://www.census.gov/retail/arts/how_surveys_are_collected.html',
  ];

 /**
  * @description Get correct link to correct bundle.
  * @param index index of bundles.
  * @returns Correct link.
  */
 function getCorrectLink(index: number) {
  let bundle: string = '';

  if (index === 1) {
   bundle = optionLinks[0];
  } else if (index === 7) {
   bundle = optionLinks[1];
  };

  return bundle;
 }

 /**
  * @description Get correct correct bundle.
  * @param index index of bundles.
  * @returns Correct bundle.
  */
 function getCorrectBundle(index: number) {
  let bundle: string = '';

  if (index === 0) {
   bundle = optionAcronyms[0];
  } else if (index === 1) {
   bundle = optionAcronyms[1];
  } else if (index === 2) {
   bundle = optionAcronyms[2];
  } else if (index === 3) {
   bundle = optionAcronyms[3];
  } else if (index === 4) {
   bundle = optionAcronyms[4];
  } else if (index === 5) {
   bundle = optionAcronyms[5];
  } else if (index === 6) {
   bundle = optionAcronyms[6];
  } else if (index === 7) {
   bundle = optionAcronyms[6];
  }

  return bundle;
 }

 return (
  <>
   {isOpen ? (
    <>
     <StyContainer show={isOpen} id={`${id}-id`}>
      <StyModal>
       <StyDialogWrapper>
        <>
         <StyCloseWrapper>
          <span style={{ cursor: 'pointer' }} onClick={closeModal}>
           <DashboardCircleButton
            id="close-modal"
            action={closeModal}
            icon={
             <CloseXIcon
              width="18px"
              height="18px"
              fill="rgba(51,114,214)"
             />
            }
           />
          </span>
         </StyCloseWrapper>
         <StyHeader>
          <StyName>
           <DashboardText
            id="id-status"
            size={Sizes.lg}
            value={title_subtitles_information}
            fontWeight="600"
           />
          </StyName>
         </StyHeader>
         <StyLine />
         <StyContent>
          {optionBundles.map((bundle: string, index: number) => {
           return (
            <StyFormGroupInfo>
             <DashboardText
              id="id-status"
              size={Sizes.sm}
              value={getCorrectBundle(index)}
              fontWeight="bold"
             />
             <StyJustifyText>
              <DashboardText
               id="id-status"
               size={Sizes.sm}
               value={bundle}
               hasMargin={true}
              />
              <DashboardText
               id="id-status"
               size={Sizes.sm}
               value={
                <StyLink
                 href={getCorrectLink(index)}
                 rel="noopener noreferrer"
                 target="_blank">
                 {getCorrectLink(index)}
                </StyLink>
               }
               hasMargin={true}
              />
             </StyJustifyText>
            </StyFormGroupInfo>
           )
          })}
         </StyContent>
        </>
       </StyDialogWrapper>
      </StyModal>
     </StyContainer>
    </>
   ) : null
   }
  </>
 );
};
export default StatusModalInfo;
