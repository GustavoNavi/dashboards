import React from 'react';
import DashboardPageRoute from './routes/route-manager';
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
                    <DashboardPageRoute />
                </LanguageProvider>
            </StyContainer>
        </>
    );
};

export default KabumDashboards;