import React, { useEffect, useState } from 'react';
import AppTemplate from '../../Components/DashboardAppTemplate';
import DashboardPage from '../../Components/DashboardPage';
import { Sizes } from '../../ts/enum/componentSize';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { StyWrapperBar, StyWrapperFilters, StySpinner, StyLabelInfo, StyBar } from './styles';
import DashboardFilters from './filters';
import StatusModalInfo from './modal';
import googleSheets from '../../services/googleSheets-controller';
import DashboardCircleSpinner from '../../Components/DashboardSpinner';
import DashboardText from '../../Components/DashboardText';
import { bundleRoot } from '../../i18n/root';
import { useBundle } from '../../hooks/useBundle';
import DashboardErrorIcon from '../../../assets/icons/ErrorIcon';
import InfoIcon from '../../../assets/icons/InfoIcon';
import WarningIcon from '../../../assets/icons/WarningIcon';

export const Dashboard: React.FC<{}> = ({ }) => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const [contentData, setContentData] = useState<any[]>([]);
  const [contentObject, setContentObject] = useState<any[]>([]);
  const [contentString, setContentString] = useState<any[]>([]);
  const [contentAfterSplit, setContentAfterSplit] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string | boolean>();
  const [filterNameSelected, setFilterNameSelected] = useState<string>();
  const [filterBundleSelected, setFilterBundleSelected] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const replaceRegex: RegExp = /\./g;

  const [contentTotalYear, setContentTotalYear] = useState<string[]>([]);
  const [contentTotalEcommerce, setContentTotalEcommerce] = useState<string[]>([]);

  const {
    lbl_select_filter,
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
    lbl_unsold,
    lbl_sold,
    lbl_sold_from,
    lbl_sold_from_ecommerce,
    lbl_product_sold_ecommerce_in,
    lbl_product_sold_in,
    lbl_product_unsold,
    lbl_product_sold,
    lbl_not_show_pie,
    lbl_product_sold_from_ecommerce,
    lbl_product_sold_from,
    msg_error
  } = useBundle(bundleRoot);

  const bundlesProducts: string[] = [
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
    lbl_nonmerchandise_receipts3
  ]

  const totalArray: string[] = [
    contentAfterSplit[0]?.replace(replaceRegex, ''),
    contentAfterSplit[3]?.replace(replaceRegex, ""),
    contentAfterSplit[5]?.replace(replaceRegex, ""),
    contentAfterSplit[7]?.replace(replaceRegex, ""),
    contentAfterSplit[9]?.replace(replaceRegex, ""),
    contentAfterSplit[11]?.replace(replaceRegex, ""),
    contentAfterSplit[13]?.replace(replaceRegex, ""),
    contentAfterSplit[15]?.replace(replaceRegex, ""),
    contentAfterSplit[17]?.replace(replaceRegex, ""),
    contentAfterSplit[19]?.replace(replaceRegex, ""),
    contentAfterSplit[21]?.replace(replaceRegex, ""),
    contentAfterSplit[23]?.replace(replaceRegex, ""),
    contentAfterSplit[25]?.replace(replaceRegex, ""),
    contentAfterSplit[27]?.replace(replaceRegex, ""),
    contentAfterSplit[29]?.replace(replaceRegex, ""),
    contentAfterSplit[31]?.replace(replaceRegex, ""),
    contentAfterSplit[33]?.replace(replaceRegex, ""),
  ]

  const totalArrayECommerce: string[] = [
    contentAfterSplit[1]?.replace(replaceRegex, ""),
    contentAfterSplit[4]?.replace(replaceRegex, ""),
    contentAfterSplit[6]?.replace(replaceRegex, ""),
    contentAfterSplit[8]?.replace(replaceRegex, ""),
    contentAfterSplit[10]?.replace(replaceRegex, ""),
    contentAfterSplit[12]?.replace(replaceRegex, ""),
    contentAfterSplit[14]?.replace(replaceRegex, ""),
    contentAfterSplit[16]?.replace(replaceRegex, ""),
    contentAfterSplit[18]?.replace(replaceRegex, ""),
    contentAfterSplit[20]?.replace(replaceRegex, ""),
    contentAfterSplit[22]?.replace(replaceRegex, ""),
    contentAfterSplit[24]?.replace(replaceRegex, ""),
    contentAfterSplit[26]?.replace(replaceRegex, ""),
    contentAfterSplit[28]?.replace(replaceRegex, ""),
    contentAfterSplit[30]?.replace(replaceRegex, ""),
    contentAfterSplit[32]?.replace(replaceRegex, ""),
    contentAfterSplit[34]?.replace(replaceRegex, ""),
  ]

  const totalArrayYear: string[] = [
    contentTotalYear[2]?.replace(replaceRegex, ""),
    contentTotalYear[3]?.replace(replaceRegex, ""),
    contentTotalYear[4]?.replace(replaceRegex, ""),
    contentTotalYear[5]?.replace(replaceRegex, ""),
    contentTotalYear[6]?.replace(replaceRegex, ""),
    contentTotalYear[7]?.replace(replaceRegex, ""),
    contentTotalYear[8]?.replace(replaceRegex, ""),
    contentTotalYear[9]?.replace(replaceRegex, ""),
    contentTotalYear[10]?.replace(replaceRegex, ""),
    contentTotalYear[11]?.replace(replaceRegex, ""),
    contentTotalYear[12]?.replace(replaceRegex, ""),
    contentTotalYear[13]?.replace(replaceRegex, ""),
    contentTotalYear[14]?.replace(replaceRegex, ""),
    contentTotalYear[15]?.replace(replaceRegex, ""),
  ];

  const totalArrayEcommerce: string[] = [
    contentTotalEcommerce[2]?.replace(replaceRegex, ""),
    contentTotalEcommerce[3]?.replace(replaceRegex, ""),
    contentTotalEcommerce[4]?.replace(replaceRegex, ""),
    contentTotalEcommerce[5]?.replace(replaceRegex, ""),
    contentTotalEcommerce[6]?.replace(replaceRegex, ""),
    contentTotalEcommerce[7]?.replace(replaceRegex, ""),
    contentTotalEcommerce[8]?.replace(replaceRegex, ""),
    contentTotalEcommerce[9]?.replace(replaceRegex, ""),
    contentTotalEcommerce[10]?.replace(replaceRegex, ""),
    contentTotalEcommerce[11]?.replace(replaceRegex, ""),
    contentTotalEcommerce[12]?.replace(replaceRegex, ""),
    contentTotalEcommerce[13]?.replace(replaceRegex, ""),
    contentTotalEcommerce[14]?.replace(replaceRegex, ""),
    contentTotalEcommerce[15]?.replace(replaceRegex, ""),
  ];

  const arrayYearBundles: string[] = [
    '2015', '2014r', '2013r', '2012r', '2011r', '2010r', '2009', '2008',
    '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999'
  ];

  function compareBundle(sheetsList: any, bundles: string[]) {
    let array: string[] = [];
    sheetsList?.forEach((oi: any, index: number) => {
      if (oi === ' S' || oi === ' NA') {
        array.push(`${bundles[index]} ${oi}`)
      } else {
        array.push(bundles[index]);
      }
    });
    return array;
  }

  const [errorAttempts, setErrorAttempts] = useState<number>(0);

  useEffect(() => {
    if (selectedFilter) {
      teste();
    } else {
      setContentData([]);
      setContentObject([]);
      setContentString([]);
      setContentAfterSplit([]);
    }
  }, [selectedFilter, filterNameSelected]);

  async function teste() {
    setError(false);
    try {
      setLoading(true);
      const response: any = await googleSheets.get('');
      setContentData(response?.data?.feed?.entry);
      setLoading(false);
      if (response) {
        setErrorAttempts(0);
      }
    } catch (err: any) {
      if (errorAttempts < 5) {
        setErrorAttempts(errorAttempts + 1);
        teste();
      } else {
        setError(true);
      }
      throw err;
    }
  }

  useEffect(() => {
    let arrayAux: any[] = [];
    contentData?.forEach((values: any) => {
      arrayAux?.push(values?.content);
    });
    setContentObject(arrayAux);
  }, [contentData, selectedFilter]);

  useEffect(() => {
    let arrayAux: any[] = [];
    if (contentObject) {
      contentObject?.forEach((valueArray: any) => {
        arrayAux?.push([valueArray?.$t?.split(', ')]);
      })
      setContentString(arrayAux);
    }
  }, [contentObject, selectedFilter]);

  useEffect(() => {
    let arrayAux: any[] = [];
    let arrayTotal: any[] = [];
    let arrayEcommerce: any[] = [];
    let array2015EcommerceTotal: any[] = [];
    contentString?.forEach((teste: any) => {
      teste?.forEach((teste2: any) => {
        if (selectedFilter) {
          if (filterNameSelected === 'radio' || filterNameSelected === 'product') {
            typeof selectedFilter === 'string' &&
              arrayAux?.push(teste2[(Number(selectedFilter) + 2)]?.replace(/.+:/g, ""));
            typeof selectedFilter === 'boolean' &&
              arrayAux?.push(teste2[1]?.replace(/.+:/g, ""));
          }
        } else {
          arrayAux?.push();
          arrayTotal?.push();
          arrayEcommerce?.push();
          array2015EcommerceTotal?.push();
        }
      });
    });
    if (selectedFilter && filterNameSelected === 'year') {
      if (Number(selectedFilter) === 0) {
        contentString[0]?.forEach((aaaa: any) => {
          aaaa.forEach((testeeeeee: any) => {
            arrayTotal?.push(testeeeeee?.replace(/.+:/g, "")?.replace(replaceRegex, ""));
          });
        });
        contentString[1]?.forEach((aaaa: any) => {
          aaaa.forEach((testeeeeee: any) => {
            arrayEcommerce?.push(testeeeeee?.replace(/.+:/g, "")?.replace(replaceRegex, ""));
          });
        });
        contentString[2]?.forEach((aaaa: any) => {
          aaaa.forEach((testeeeeee: any) => {
            array2015EcommerceTotal?.push(testeeeeee?.replace(/.+:/g, "")?.replace(replaceRegex, ""));
          });
        });
      } else {
        contentString[Number(selectedFilter) * 2 + 1]?.forEach((aaaa: any) => {
          aaaa.forEach((testeeeeee: any) => {
            arrayTotal?.push(testeeeeee?.replace(/.+:/g, "")?.replace(replaceRegex, ""));
          });
        });
        contentString[Number(selectedFilter) * 2 + 2]?.forEach((aaaa: any) => {
          aaaa.forEach((testeeeeee: any) => {
            arrayEcommerce?.push(testeeeeee?.replace(/.+:/g, "")?.replace(replaceRegex, ""));
          });
        });
      }
    }
    setContentAfterSplit(arrayAux);
    setContentTotalYear(arrayTotal);
    setContentTotalEcommerce(arrayEcommerce);
  }, [contentString, selectedFilter, filterNameSelected]);

  function getSelectedFilter(filter: string | boolean, filterName: string, filterBundle: string) {
    setSelectedFilter(filter);
    setFilterNameSelected(filterName);
    if (filterNameSelected === 'product') {
      setFilterBundleSelected(bundlesProducts[Number(filterBundle)]);
    } else if (filterNameSelected === 'year') {
      setFilterBundleSelected(filterBundle);
    } else {
      setFilterBundleSelected('');
    }
  }

  function getPercentage(total: string, ecommerce: string) {
    let totalPercentage: number = Number(total);
    let ecommercePercentage: number = Number(ecommerce);

    ecommercePercentage = ((Number(ecommerce) * 100) / (Number(total)));
    totalPercentage = (100 - ecommercePercentage);

    if (totalPercentage?.toFixed(2) === 'NaN' ||
      ecommercePercentage?.toFixed(2) === 'NaN') {
      return false;
    } else {
      return [totalPercentage?.toFixed(2), ecommercePercentage?.toFixed(2)];
    }
  }

  return (
    <>
      <StatusModalInfo
        id="modalInfo"
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
      />
      <AppTemplate>
        <StyWrapperFilters>
          <DashboardFilters
            id="filters-id"
            onShowModal={(event: boolean) => setShowModal(event)}
            onChange={(filter: string | boolean, filterName: string, filterBundle: string) =>
              getSelectedFilter(filter, filterName, filterBundle)}
          />
        </StyWrapperFilters>
        <DashboardPage hasMargin={false} hasShadow={false} width={Sizes.xl}>
          {!selectedFilter &&
            <StyLabelInfo>
              <DashboardText
                size={Sizes.lb}
                value={lbl_select_filter}
                fontWeight="600"
                icon={
                  <InfoIcon
                    fill="rgba(51,114,214)"
                    height="16px"
                    width="16px"
                  />}
              />
            </StyLabelInfo>
          }
          {error &&
            <StyLabelInfo>
              <DashboardText
                size={Sizes.lb}
                value={msg_error}
                fontWeight="600"
                icon={<DashboardErrorIcon fill="red" />}
              />
            </StyLabelInfo>
          }
          {!error && loading &&
            <StySpinner>
              <DashboardCircleSpinner />
            </StySpinner>
          }
          {!error && !loading && selectedFilter &&
            <>
              {filterNameSelected === 'radio' || filterNameSelected === 'product' ?
                <StyBar inline={true}>
                  <StyWrapperBar height="400px" width="45%">
                    <Line
                      data={{
                        labels: arrayYearBundles?.reverse(),
                        datasets: [
                          {
                            label:
                              filterNameSelected === 'product' ?
                                `${filterBundleSelected} ${lbl_sold_from}` :
                                `${lbl_product_sold_from}`,
                            data: totalArray?.reverse(),
                            backgroundColor: 'rgba( 233, 117, 0, 0.6)',
                            borderColor: 'rgba( 233, 117, 0, 1)',
                            borderWidth: 1
                          },
                          {
                            label:
                              filterNameSelected === 'product' ?
                                `${filterBundleSelected} ${lbl_sold_from_ecommerce}` :
                                `${lbl_product_sold_from_ecommerce}`,
                            data: totalArrayECommerce?.reverse(),
                            backgroundColor: 'rgba(51,114,214, 0.6)',
                            borderColor: 'rgba(51,114,214)',
                            borderWidth: 1
                          },
                        ],
                      }}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true
                            }
                          }]
                        }
                      }}
                      width={50}
                      height={50}
                    />
                  </StyWrapperBar>
                  <StyWrapperBar height="400px" width="45%">
                    {
                      getPercentage(totalArray[16], totalArrayECommerce[16]) !== false ? (
                        <Pie
                          data={{
                            labels: filterNameSelected === 'product' ?
                              [
                                `${filterBundleSelected} ${lbl_unsold}`,
                                `${filterBundleSelected} ${lbl_sold}`
                              ] : [
                                `${lbl_product_unsold}`,
                                `${lbl_product_sold}`,
                              ],
                            datasets: [
                              {
                                data: getPercentage(totalArray[16], totalArrayECommerce[16]),
                                backgroundColor: ['rgba( 233, 117, 0, 0.6)', 'rgba(51,114,214, 0.6)'],
                                borderColor: ['rgba( 233, 117, 0, 1)', 'rgba(51,114,214)'],
                                borderWidth: 1
                              },
                            ],
                          }}
                          options={{
                            maintainAspectRatio: false,
                            scales: {
                              yAxes: [{
                                ticks: {
                                  beginAtZero: true,
                                }
                              }]
                            },
                          }}
                          width={50}
                          height={50}
                        />
                      ) : (
                        <>
                          <DashboardText
                            size={Sizes.xxs}
                            value={`${lbl_not_show_pie}`}
                            fontWeight="600"
                            icon={
                              <WarningIcon
                                fill="rgba(255,168,38)"
                                height="16px"
                                width="16px"
                              />}
                          />
                        </>
                      )
                    }
                  </StyWrapperBar>
                </StyBar>
                :
                <StyBar inline={false}>
                  <StyWrapperBar height="400px" width="90%">
                    <Bar
                      data={{
                        labels: compareBundle(totalArrayYear, bundlesProducts),
                        datasets: [{
                          label: `${lbl_product_sold_in} ${filterBundleSelected}`,
                          data: totalArrayYear,
                          backgroundColor: 'rgba( 233, 117, 0, 0.6)',
                          borderColor: 'rgba( 233, 117, 0, 1)',
                          borderWidth: 1
                        }]
                      }}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true
                            }
                          }]
                        }
                      }}
                    />
                  </StyWrapperBar>
                  <StyWrapperBar height="400px" width="90%">
                    <Bar
                      data={{
                        labels: compareBundle(totalArrayEcommerce, bundlesProducts),
                        datasets: [{
                          label: `${lbl_product_sold_ecommerce_in} ${filterBundleSelected}`,
                          data: totalArrayEcommerce,
                          backgroundColor: 'rgba(51,114,214, 0.6)',
                          borderColor: 'rgba(51,114,214)',
                          borderWidth: 1
                        }]
                      }}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true
                            }
                          }]
                        }
                      }}
                      width={50}
                      height={50}
                    />
                  </StyWrapperBar>
                  <StyWrapperBar height="400px" width="90%">
                    <Bar
                      data={{
                        labels: bundlesProducts,
                        datasets: [
                          {
                            label: `${lbl_product_sold_in} ${filterBundleSelected}`,
                            data: totalArrayYear,
                            backgroundColor: 'rgba( 233, 117, 0, 0.6)',
                            borderColor: 'rgba( 233, 117, 0, 1)',
                            borderWidth: 1
                          },
                          {
                            label: `${lbl_product_sold_ecommerce_in} ${filterBundleSelected}`,
                            data: totalArrayEcommerce,
                            backgroundColor: 'rgba(51,114,214, 0.6)',
                            borderColor: 'rgba(51,114,214)',
                            borderWidth: 1
                          }
                        ]
                      }}
                      options={{
                        maintainAspectRatio: false,
                        scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true
                            }
                          }]
                        }
                      }}
                      width={50}
                      height={50}
                    />
                  </StyWrapperBar>
                </StyBar>
              }
            </>
          }
        </DashboardPage>
      </AppTemplate>
    </>
  );
};

export default Dashboard;
