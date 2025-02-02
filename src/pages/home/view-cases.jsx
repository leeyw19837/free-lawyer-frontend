import styles from './view-cases.module.scss'
import provinces from './cities.json';
import icViewCasesLogo from '../../assets/ic_view_cases_logo.png';
import {Button, Swiper} from "antd-mobile";
import PageNavigation from "../../components/page-navigation.jsx";
import {useState} from "react";

import bgMain from '../../assets/bg_view_cases_main.png'
import bgCommon from '../../assets/bg_view_cases_common.png'
import {UpOutline} from "antd-mobile-icons";
import {useNavigate} from "react-router";

function ViewCasesPage() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    // 监听 省份点击事件
    const onItemClicked = (itemIndex) => {
        console.log('onItemClicked called: ', itemIndex)
        navigate(`/view-cases/case-city/${itemIndex}`);
    }

    // 监听 加入免费请律师计划
    const handleJoinPlan = () => {
        console.log('handleJoinPlan called')
    }

    // 监听分享
    const handleShare = () => {
        console.log('handleShare called')
    }

    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={`免费请律师案例`}
            />
            <div style={{position: 'relative', height: 'calc(100vh - 5rem)'}}>
                <img src={currentIndex === 0 ? bgMain : bgCommon}
                     style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'}}/>
                <Swiper
                    direction="vertical"
                    style={{'--height': "100vh"}}
                    onIndexChange={index => {
                        setCurrentIndex(index)
                    }}
                    indicatorProps={{
                        style: {
                            '--active-dot-border-radius': '1rem',
                            '--active-dot-color': 'red',
                            '--dot-color': '#fff',
                            '--dot-size': '10px',
                            '--active-dot-size': '1rem',
                            '--dot-border-radius': '50%',
                            '--dot-spacing': '8px',
                        }
                    }}
                >
                    {mainItem}
                    {swiperItems(0, currentIndex, null, null, onItemClicked)}
                    {swiperItems(12, currentIndex, null, null, onItemClicked)}
                    {swiperItems(24, currentIndex, handleJoinPlan, handleShare, onItemClicked)}
                </Swiper>
            </div>

        </div>
    )
}

// 主页
const mainItem = (
    <Swiper.Item>
        <div className={styles.mainContentWrapper}>
            <img src={icViewCasesLogo} alt="provinces" className={styles.logoWrapper}/>
            <div className={styles.inspirationWrapper}>
                <span style={{transform: 'skewX(-15deg)'}}>困难意外，不再担心</span>
                <span style={{transform: 'skewX(-15deg)'}}>免费请律师互助</span>
                <span style={{transform: 'skewX(-15deg)'}}>就在身边！</span>
            </div>
            <div className={styles.instructionWrapper}>
                <span>已经稳定运行<span style={{color: 'red'}}>6</span>年<span style={{color: 'red'}}>357</span>天，覆盖全国<span
                    style={{color: 'red'}}>31</span>个省级区域</span>
                <span><span style={{color: 'red'}}>6498</span>人获得帮助，受助金额<span
                    style={{color: 'red'}}>3.25</span>亿元</span>
            </div>
        </div>
    </Swiper.Item>
)

// 省份
const swiperItems = (startIndex, swiperItemIndex, handleJoinPlan = null, handleShare = null, onItemClicked) => {
    return (
        <Swiper.Item key={startIndex}>
            <div className={styles.logoContentWrapper}>
                <span><span style={{fontSize: '1.8rem'}}>点击省份</span> 查看该省互助事件</span>
                <img src={icViewCasesLogo} alt="provinces" style={{height: '4rem'}}/>
            </div>
            <div className={styles.swiperItemWrapper}>
                {(provinces || []).slice(startIndex, startIndex + 12).map((province, innerIndex) => {
                    return (
                        <div
                            key={innerIndex}
                            className={styles.provinceItemWrapper}
                            onClick={() => onItemClicked(startIndex + innerIndex)}
                        >
                            <span style={{fontSize: '1.8rem', color: 'red', marginBottom: '1rem',fontWeight: 'bold'}}>{(Math.random()*100).toFixed(0)}例</span>
                            <span>{province?.name}</span>
                        </div>)
                })}
            </div>
            {
                swiperItemIndex !== 3 && (
                    <div className={styles.chevronBottomWrapper}>
                        <UpOutline color={'red'} style={{fontSize: '1.8rem'}}/>
                        <span>向上滑动，查看你身边的爱心互助</span>
                    </div>
                )
            }
            {
                swiperItemIndex === 3 && (
                    <div className={styles.operationWrapper}>
                        <Button className={styles.buttonStyle} onClick={handleJoinPlan}>加入免费请律师计划</Button>
                        <Button className={styles.buttonStyle} style={{marginTop: '2rem'}} onClick={handleShare}>分享让更多人了解</Button>
                    </div>
                )
            }
        </Swiper.Item>
    )
}

export default ViewCasesPage;