import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

//自定义配置
import LandingPage from '../_pages/LandingPage';
import AstronautDark from "@site/src/pages/LandingPage/components/Astronaut/AstronautDark";
import AstronautLight from "@site/src/pages/LandingPage/components/Astronaut/AstronautLight";
import React, { useState } from 'react';
import {animated, useSpring} from "react-spring";
import HeaderView from "@site/src/pages/LandingPage/components/HeaderView";
import Translate, {translate} from '@docusaurus/Translate';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
// import useThemeContext from '@docusaurus/theme-common/lib/hooks/useThemeContext';
import {useColorMode} from '@docusaurus/theme-common';


type Props = { className?: string };


export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    const {
        siteConfig: {customFields, tagline},
    } = useDocusaurusContext();
    const {description} = customFields as {description: string};
    return (
        <Layout title={tagline} description={description}>


            <main>
                {/*这是top banner*/}
                <TopBanner />
                {/*这是hero banner*/}
                <HeroBanner />
                <HomeBanner />


            {/*    <header className={clsx('hero hero--primary', styles.heroBanner)}>*/}

            {/*    <div className="container">*/}
            {/*        <Heading as="h1" className="hero__title">*/}
            {/*            {siteConfig.title}*/}
            {/*        </Heading>*/}
            {/*        <p className="hero__subtitle">{siteConfig.tagline}</p>*/}
            {/*        <div className={styles.buttons}>*/}
            {/*            <Link*/}
            {/*                className="button button--secondary button--lg"*/}
            {/*                to="/docs/intro">*/}
            {/*                Docusaurus Tutorial - 5min ⏱️*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className={styles.Container}>*/}
            {/*        <HeaderView />*/}
            {/*    </div>*/}

            {/*    <div className="container">*/}
            {/*        <Astronaut />*/}
            {/*    </div>*/}
            {/*</header>*/}
            </main>

        </Layout>
    );

    // return (<LandingPage />);
}

// done
function TopBanner() {
    return (
        <div className={styles.topBanner}>
            <div className={styles.topBannerTitle}>
                {'🎉\xa0'}
                <Link to="/docs" className={styles.topBannerTitleText}>
                        {/*{'文档\xa0持续更新\xa0哈哈!️'}*/}
                        {'孤松独立山巅,风雨不改其志'}
                </Link>
                {'\xa0🥳'}
            </div>

        </div>
    );
}

// 这是控制太空人依据背景变色的
// Done
function AstronautOfTheme() {
    const { isDarkTheme } = useColorMode();

    const astronautSrc = isDarkTheme ? '/img/pages/astronaut_dark.svg' : '/img/pages/astronaut_light.svg';

    return (
        <img
            alt={translate({ message: 'Docusaurus with Keytar' })}
            className={clsx(styles.heroLogo)}
            src={useBaseUrl(astronautSrc)}
            // 如果需要还可以添加响应式尺寸
            // width="600"
            // height="600"
        />
    );
}


function HeroBanner() {
    return (
        <div className={styles.hero} data-theme="dark">
            <div className={styles.heroInner}>
                <Heading as="h1" className={styles.heroProjectTagline}>
                    <AstronautOfTheme />
                    <span
                        className={styles.heroTitleTextHtml}
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: translate({
                                id: 'homepage.hero.title',
                                message:
                                    // 'Build <b>optimized</b> websites <b>quickly</b>, focus on your <b>content</b>',
                                    'YYPlore <b>数字花园</b> IT, <b>历史,</b> 生活, <b>运动</b>',
                                description:
                                    '我的数字花园',
                            }),
                        }}
                    />
                </Heading>
                <div className={styles.indexCtas}>
                    <Link className="button button--primary" to="/docs">
                        <Translate>文档</Translate>
                    </Link>
                    <Link className="button button--info" to="https://docusaurus.new">
                        <Translate>博客</Translate>
                    </Link>
                    <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
                className={styles.indexCtasGitHubButton}
                src="https://ghbtns.com/github-btn.html?user=yuanyp8&amp;repo=yuanyp8.github.io&amp;type=star&amp;count=true&amp;size=large"
                width={160}
                height={30}
                title="GitHub Stars"
            />
          </span>
                </div>
            </div>
        </div>
    );
}

// 这是ok的功能,暂时未使用
const Astronaut: React.FC<Props> = (props) => {
    const [isHovered, setIsHovered] = useState(false); // 初始状态为false
    const { className } = props;
    const [isRaised, setIsRaised] = useState(false);
    const [inAnimation, setInAnimation] = useState(false);
    const [triggeredAnimationColor, setTriggeredAnimationColor] = useState(false);

    // Animation
    const animatedAstronautProps = useSpring({
        to: { x: isRaised ? 0 : 1 },
        config: {
            mass: 1,
            tension: 400,
            friction: 15,
            duration: 500,
        },
        onRest: () => {
            if (inAnimation) {
                setInAnimation(false);
                setTriggeredAnimationColor(false);
            }
        },
        onChange: ({ value }) => {
            if (value.x >= 0.45 && value.x <= 0.5 && !triggeredAnimationColor) {
                setTriggeredAnimationColor(true);
            }
        },
    });

    const onMouseEnter = () => {
        if (!inAnimation) {
            setInAnimation(true);
            setIsRaised(!isRaised);
        }
    };

    return (
        <div
            className={clsx(styles.Container, className)}
            onMouseOver={() => setIsHovered(true)} // 鼠标进入，设置isHovered为true
            onMouseLeave={() => setIsHovered(false)} // 鼠标离开，设置isHovered为false
        >
            <animated.div
                style={{
                    transform: (animatedAstronautProps as any).x.to({
                        range: [0, 0.5, 1],
                        output: [
                            `translateY(${0}px)`,
                            `translateY(-${30}px)`,
                            `translateY(${0}px)`,
                        ],
                    }),
                }}
                className={styles.ImageContainer}>

                {/* 根据isHovered值切换两个组件 */}
                {isHovered ? (
                    <AstronautDark onMouseEnter={onMouseEnter} />
                ) : (
                    <AstronautLight onMouseEnter={onMouseEnter} />
                )}

            </animated.div>
            <p className={styles.Text}>👆来改变我的颜色状态</p>
        </div>
    );
};


// Home页面

const svgList = [
    {
        title: 'github',
        Svg: require('../../static/img/github.svg').default,
        color: 'black',
        link: 'https://github.com/yuanyp8/yuanyp8.github.io',
    },
    {
        title: 'wechat',
        Svg: require('../../static/img/wechat.svg').default,
        color: '#64dd17',
        link: 'https://mp.weixin.qq.com/s/TKPZdsVNoDYs7HBpHxC7Yg',
    },
    {
        title: 'bilibili',
        Svg: require('../../static/img/bilibili.svg').default,
        color: '#2979ff',
        link: 'https://space.bilibili.com/601013790',
    },
]
const Svg = ({ Svg, color, title, link }) => {
    return (
        <a href={link} target='_blank'>
            <Svg className={styles.svg} style={{ fill: color }} />
        </a>
    )
}
// import HeroImg from '@site/static/img/hero.png'
import HeroImg from '@site/static/img/robot.svg'

function RobotSvg() {


    const RobotSrc = '/img/robot.svg';

    return (
        <img
            className={clsx(styles.heroLogo)}
            src={useBaseUrl(RobotSrc)}
            // 如果需要还可以添加响应式尺寸
            // width="600"
            // height="600"
        />
    );
}

function HomeBanner() {
    return (
        // 这是整个banner的style
        <div className={styles.myHeroContainer}>
            <div className={styles.leftContainer}>
                    <div className={styles.topBannerTitle}>
                        Always <br /> Ready to Code.
                    </div>

                <p className={styles.colorText} style={{ fontSize: '24px', textDecoration: 'none' }}>
                    我在这里记录知识，希望同样能够帮助到你。
                </p>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}>
                        <a className={styles.hero_a} href='/'>
                            Click
                        </a>
                    </button>
                    <span className={styles.buttonLeftText}>
            Get Started. <br /> 开启学习之旅.
          </span>
                    <div className={styles.svgContainer}>
                        {svgList.map((item, index) => {
                            return <Svg {...item} key={item.title} />
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                {/*<img src={HeroImg} alt='HeroImg' />*/}
                <RobotSvg />
            </div>
        </div>
    )
}