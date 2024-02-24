import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeaderTyper from './components/HeaderTyper'
import styles from './styles.module.css';
import { useWindowSize } from '@site/src/hooks/useWindowSize';

// import Astronaut from './components/Astronaut';
import { shuffle } from '@site/src/utils';

export type Props = { height: number };

const Spacer: React.FC<Props> = (props) => {
    const height = props.height ?? 100; // '??' because props.height can also be 0 and 0 is false

    return <div style={{ height: height }} />;
};

const HeaderView: React.FC = () => {
    const { siteConfig } = useDocusaurusContext();
    const { windowHeight } = useWindowSize();
    const [toTypeWords] = useState(
        shuffle([
            'simple',
            'straightforward',
            'understandable',
            'boilerplate free',
            'flexible',
            'fun',
        ])
    );

    return (
        <div
            className={styles.Container}
            style={{ height: windowHeight > 800 ? windowHeight : undefined }}>
            <div>
                <h1 className={styles.HeaderTitle}>
                    我的数字馆藏 <span className={styles.SeparatorText}>@YYPlore</span>
                </h1>
                <Spacer height={20} />
                <HeaderTyper
                    className={styles.HeaderTyper}
                    words={toTypeWords}
                    delay={5000}
                    defaultText={toTypeWords[0] || 'simple'}
                />
                <Spacer height={50} />
                <p className={styles.DescriptionText}>{siteConfig.tagline}</p>
                <Spacer height={50} />
            </div>
            {/*<Astronaut className={styles.AstronautImage} />*/}
            {/*{windowHeight > 900 && windowHeight < 1200 && <MouseScroller />}*/}
        </div>
    );
};

export default HeaderView;