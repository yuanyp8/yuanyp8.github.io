import React from 'react';
import styles from './styles.module.css';
import 'react-toastify/dist/ReactToastify.css';
import HeaderView from './components/HeaderView';
import Layout from '@theme/Layout';

// 暂时取消
// import StraightforwardView from './components/StraightforwardView';
// import GiveItATryView from './components/GiveItATriyView';
// import StartCodingView from './components/StartCodingView';
// import StatsView from './components/StatsView';
// import OtherFeaturesView from './components/OtherFeaturesView';
//import PageLayout from '../../components/layout/PageLayout';

const LandingPage: React.FC = () => {
    return (
        <Layout>
            <main className={styles.Container}>
                <HeaderView />
                {/*<StraightforwardView />*/}
                {/*<OtherFeaturesView />*/}
                {/*<StartCodingView />*/}
                {/*<StatsView />*/}
                {/*<GiveItATryView />*/}
            </main>
        </Layout>
    );
};

export default LandingPage;