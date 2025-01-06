import styles from './index.module.scss';

import icAvatar from '../../assets/ic_about_avatar.svg';
import icChevronRight from '../../assets/ic_chevron_right.svg';

import icAboutJoinCertification from '../../assets/ic_about_join_certification.svg' // 加入凭证
import icAboutReportSuitcase from '../../assets/ic_about_join_certification.svg' // 报案
import icAboutCharge from '../../assets/ic_about_join_certification.svg' // 充值

import icAboutGift from '../../assets/ic_about_gift.svg' // 邀请有礼
import icAboutRelative from '../../assets/ic_about_gift.svg' // 为亲友加入
import icAboutCertificate from '../../assets/ic_about_gift.svg' // 荣誉证书
import icAboutService from '../../assets/ic_about_gift.svg' // 服务

import icAboutKnow from '../../assets/ic_about_gift.svg' // 了解律携
import icAboutRewards from '../../assets/ic_about_gift.svg' // 律携荣誉
import icAboutNews from '../../assets/ic_about_gift.svg' // 新闻公告
import icAboutNotice from '../../assets/ic_about_gift.svg' // 消息通知
import icAboutOnlineService from '../../assets/ic_about_gift.svg' // 在线客服

import {useNavigate} from "react-router";
import {useState} from "react";
import {Popup} from "antd-mobile";
import {useSelector} from "react-redux";

const settingsList = [
    {
        title: '重要信息通知方式',
        icon: icAboutOnlineService,
        routePath: '/settings/info-notice'
    },
    {
        title: '账户信息',
        icon: icAboutOnlineService,
        routePath: '/settings/account-info'
    },
    {
        title: '修改密码',
        icon: icAboutOnlineService,
        routePath: '/settings/change-pwd'
    },
    {
        title: '当前版本',
        icon: null,
        routePath: 'current-version'
    }
]

function AboutPage() {
    const navigate = useNavigate();
    const [isMaskVisible, setIsMaskVisible] = useState(false);
    // const currentVersion = useSelector(state => state.version || '1.0.0');
    const currentVersion = '1.0.0';

    // 导航
    const navigateTo = (operationType) => {
        switch (operationType) {
            case 'join-certification':
                navigate('/about/join-certification');
                break;
            case 'report-suitcase':
                navigate('/about/report-suitcase');
                break;
            case 'charge':
                navigate('/about/charge');
                break;

            case 'gift':
                navigate('/about/gift');
                break;
            case 'relative':
                navigate('/about/relative');
                break;
            case 'certificate':
                navigate('/about/certificate');
                break;
            case 'service':
                navigate('/about/service');
                break;

            case 'know':
                navigate('/about/know');
                break;
            case 'rewards':
                navigate('/about/rewards');
                break;
            case 'news':
                navigate('/about/news');
                break;
            case 'notice':
                navigate('/about/notice');
                break;
            case 'online-service':
                navigate('/about/online-service');
                break;
            default:
                break;
        }
    }

    // 直接导航
    const navigateDirectlyTo = (routePath) => {
        navigate(routePath);
    }

    // 点击头像弹出
    const onSettingsClicked = () => {
        setIsMaskVisible(true)
    }

    return (
        <div className={styles.rootContainer}>
            <div className={styles.baseInfoWrapper}>
                <div className={styles.avatarWrapper} onClick={onSettingsClicked}>
                    <img src={icAvatar} alt="" style={{width: '5rem'}}/>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        marginLeft: '10px'
                    }}>
                        <span style={{fontSize: '2rem'}}>用户1</span>
                        <span style={{fontSize: '1.2rem'}}>编号：24636000</span>
                    </div>
                    <img src={icChevronRight} className={styles.navButton}/>
                </div>
                <div className={styles.mainInfoWrapper}>
                    <div className={styles.infoItemWrapper} onClick={() => navigateTo('join-certification')}>
                        <img src={icAboutJoinCertification} className={styles.infoItemIcon}/>
                        <span>加入凭证</span>
                    </div>
                    <div className={styles.infoItemWrapper} onClick={() => navigateTo('report-suitcase')}>
                        <img src={icAboutReportSuitcase} className={styles.infoItemIcon}/>
                        <span>报案</span>
                    </div>
                    <div className={styles.infoItemWrapper} onClick={() => navigateTo('charge')}>
                        <img src={icAboutCharge} className={styles.infoItemIcon}/>
                        <span>充值</span>
                    </div>
                </div>
            </div>

            <div className={styles.myProfitInfoWrapper}>
                <span className={styles.title}>我的福利</span>
                <div className={styles.content}>
                    <div className={styles.contentItemWrapper} onClick={() => navigateTo('gift')}>
                        <img src={icAboutGift} className={styles.contentItemImage}/>
                        <span className={styles.contentItemLabel}>邀请有礼</span>
                    </div>
                    <div className={styles.contentItemWrapper} onClick={() => navigateTo('relative')}>
                        <img src={icAboutRelative} className={styles.contentItemImage}/>
                        <span className={styles.contentItemLabel}>为亲友加入</span>
                    </div>
                    <div className={styles.contentItemWrapper} onClick={() => navigateTo('certificate')}>
                        <img src={icAboutCertificate} className={styles.contentItemImage}/>
                        <span className={styles.contentItemLabel}>荣誉证书</span>
                    </div>
                    <div className={styles.contentItemWrapper} onClick={() => navigateTo('service')}>
                        <img src={icAboutService} className={styles.contentItemImage}/>
                        <span className={styles.contentItemLabel}>服务</span>
                    </div>
                </div>
            </div>

            <div className={styles.moreServiceInfoWrapper}>
                <span className={styles.title}>更多服务</span>
                <div className={styles.content}>
                    <div className={styles.contentItemWrapper} onClick={() => navigateTo('know')}>
                        <img src={icAboutKnow} className={styles.contentItemImage}/>
                        <span className={styles.contentItemLabel}>了解律携</span>
                    </div>
                    <div className={styles.contentItemWrapper} onClick={() => navigateTo('rewards')}>
                        <img src={icAboutRewards} className={styles.contentItemImage}/>
                        <span className={styles.contentItemLabel}>律携荣誉</span>
                    </div>
                    <div className={styles.contentItemWrapper} onClick={() => navigateTo('news')}>
                        <img src={icAboutNews} className={styles.contentItemImage}/>
                        <span className={styles.contentItemLabel}>新闻公告</span>
                    </div>
                    <div className={styles.contentItemWrapper} onClick={() => navigateTo('notice')}>
                        <img src={icAboutNotice} className={styles.contentItemImage}/>
                        <span className={styles.contentItemLabel}>消息通知</span>
                    </div>
                    <div className={styles.contentItemWrapper} onClick={() => navigateTo('online-service')}>
                        <img src={icAboutOnlineService} className={styles.contentItemImage}/>
                        <span className={styles.contentItemLabel}>在线客服</span>
                    </div>
                </div>
            </div>

            <Popup
                visible={isMaskVisible}
                onMaskClick={() => setIsMaskVisible(false)}
                onClose={() => setIsMaskVisible(false)}
                bodyStyle={{
                    width: '50vw',
                }}
                position="left"
                // showCloseButton={true}
            >
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                    {
                        settingsList.map((item, index) => {
                            return (
                                <div
                                    className={styles.popupContentItemWrapper}
                                    key={index}
                                    onClick={() => item.icon ? navigateDirectlyTo(item.routePath) : null}
                                >
                                    {item.icon && <img src={item.icon} style={{width: '26px', marginRight: '20px'}}/>}
                                    <span>{item.title}</span>
                                    {item.routePath === 'current-version' ? `: ${currentVersion}` : ''}
                                </div>
                            )
                        })
                    }
                </div>
            </Popup>
        </div>
    )
}

export default AboutPage;