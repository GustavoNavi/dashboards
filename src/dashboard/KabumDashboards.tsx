import React from 'react';
import DashboardPage from './routes/route-manager';
import LanguageProvider from './store/language';
import { StyContainer } from './styles';

/**
 * @description Dashboard APP.
 */
const KabumDashboards: React.FC<{}> = ({ }) => {

    return (
        <>
            <StyContainer>
                <LanguageProvider>
                    <DashboardPage />
                </LanguageProvider>
            </StyContainer>
        </>
    );
};

export default KabumDashboards;