import styles from './index.module.scss'
import imgHomeBanner from '../../assets/images/img_home_banner.png'
import imgHomeHeart from '../../assets/images/img_home_heart.png';
import imgHomeHandsInHands from '../../assets/images/img_home_hands_in_hands.png';
import imgHomeBlockedHeart from '../../assets/images/img_home_blocked_heart.png'
import icQualification1 from '../../assets/ic_home_qualification1.svg';
import icQualification2 from '../../assets/ic_home_qualification2.svg';
import icQualification3 from '../../assets/ic_home_qualification3.svg';
import icHonor from '../../assets/ic_home_honor.svg';
import icInvestigation from '../../assets/ic_home_investigation.svg';
import icReport from '../../assets/ic_home_report.svg';
import icHomeLogoDouyin from '../../assets/ic_logo_douyin.png';
import icHomeLogoJinritoutiao from '../../assets/ic_logo_jinritoutiao.png';
import icHomeLogoSinaBlog from '../../assets/ic_logo_sina_blog.png';
import icHomeLogoLongwen from '../../assets/ic_logo_longwen.png';

import {Button} from "antd-mobile";


function HomePage() {
    // 监听：为亲友加入
    const handleJoinForRelatives = () => {

    }

    // 监听：点击查看互助案例公示
    const handleViewCases = () => {

    }

    return (
        <div className={styles.rootContainer}>
            {/*banner*/}
            <div className={styles.bannerWrapper}>
                <img src={imgHomeBanner} className={styles.bannerImage}/>
                <div className={styles.bannerTextWrapper}>
                    <span>免费请律师·平稳运行6年211天</span>
                    <span style={{fontSize: '2.8rem', fontWeight: 'bold'}}>已捐助互助金3.24亿元</span>
                    <span>累计帮助全国6889个人</span>
                </div>
            </div>

            {/*律携互助原理*/}
            <div className={styles.principleWrapper}>
                <div className={styles.titleWrapper}>
                    <div className={styles.indicator}/>
                    <span className={styles.title}>免费请律师互助原理</span>
                </div>
                <div className={styles.heartWrapper}>
                    <img src={imgHomeHeart} className={styles.heartShape}/>
                    <div className={styles.textWrapper}>
                        <span>如果100万会员，有1人需要法律协助！<br/>每人均摊1元，民事案件1000元；<br/> 刑事案件3000元；即可助其度过难关</span>
                        <span style={{color: 'red'}}>无事儿我帮人，有事儿人帮我</span>
                    </div>
                </div>
                <div className={styles.qualificationWrapper}>
                    <div className={styles.qualificationItemWrapper}>
                        <img src={icQualification1} className={styles.iconWrapper}/>
                        <span>资金安全透明</span>
                    </div>
                    <div className={styles.qualificationItemWrapper}>
                        <img src={icQualification2} className={styles.iconWrapper}/>
                        <span>案件笔笔公开</span>
                    </div>
                    <div className={styles.qualificationItemWrapper}>
                        <img src={icQualification3} className={styles.iconWrapper}/>
                        <span>专业勘察审核</span>
                    </div>
                </div>
                <div className={styles.planWrapper}>
                    <div className={styles.planTitle}>免费请律师互助计划60元(5年服务)</div>
                    <div className={styles.planContent}>
                        <img src={imgHomeHandsInHands} className={styles.placeholderBlock} />
                        <div className={styles.planDetailWrapper}>
                            <span style={{fontSize: '1.6rem', color: '#030303'}}>最高互助金额<span
                                style={{color: 'red'}}>30000元</span></span>
                            <span>民事案件10000元</span>
                            <span>刑事案件30000元</span>
                            <Button className={styles.styledButton}>为亲友加入</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/*互助案例公示*/}
            <div className={styles.caseWrapper}>
                <div className={styles.caseShowUpWrapper}>
                    <img src={imgHomeBlockedHeart} className={styles.blockedHeartShape}/>
                    <div className={styles.caseTextWrapper}>
                        <span>已经有<span style={{color: 'red'}}>6445人</span>获得帮助</span>
                        <span>已互助<span style={{color: 'red'}}>3.24亿元</span></span>
                        <Button className={styles.styledButton2}>点击查看</Button>
                    </div>
                </div>
                <div className={styles.caseVideoWrapper}>
                    <video src={''}></video>
                </div>
            </div>

            {/*底部布局*/}
            <div className={styles.bottomWrapper}>
                <div className={styles.itemWrapper}>
                    <div className={styles.descTitleWrapper}>
                        <img src={icHonor} className={styles.iconWrapper2}/>
                        <span>获得荣誉</span>
                    </div>
                    <div className={styles.descContentWrapper}>
                        <span>河南龙文律师事务所</span>
                        <span>中国·创新大赛优秀奖</span>
                        <span>2024科技创新创业先进单位</span>
                    </div>
                </div>
                <div className={styles.itemWrapper}>
                    <div className={styles.descTitleWrapper}>
                        <img src={icReport} className={styles.iconWrapper2}/>
                        <span>权威报道</span>
                    </div>
                    <div className={styles.descContentWrapper2}>
                        <img src={icHomeLogoDouyin} className={styles.logoWrapper}/>
                        <img src={icHomeLogoJinritoutiao} className={styles.logoWrapper}/>
                        <img src={icHomeLogoSinaBlog} className={styles.logoWrapper}/>
                    </div>
                </div>
                <div className={styles.itemWrapper}>
                    <div className={styles.descTitleWrapper}>
                        <img src={icInvestigation} className={styles.iconWrapper2}/>
                        <span>权威投资</span>
                    </div>
                    <div className={styles.descContentWrapper2}>
                        <img src={icHomeLogoLongwen} className={styles.logoWrapper}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage