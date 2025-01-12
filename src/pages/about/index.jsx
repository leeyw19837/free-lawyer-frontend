import styles from './index.module.scss';

import icAvatar from '../../assets/ic_about_avatar.svg';
import icChevronRight from '../../assets/ic_chevron_right.svg';

import icAboutJoinCertification from '../../assets/ic_about_join_certification.svg' // 加入凭证
import icAboutReportSuitcase from '../../assets/ic_about_report_suitcase.svg' // 报案
import icAboutCharge from '../../assets/ic_about_charge.svg' // 充值

import icAboutGift from '../../assets/ic_about_gift.svg' // 邀请有礼
import icAboutRelative from '../../assets/ic_about_relative.svg' // 为亲友加入
import icAboutCertificate from '../../assets/ic_about_certificate.svg' // 荣誉证书
import icAboutService from '../../assets/ic_about_service.svg' // 服务

import icAboutKnow from '../../assets/ic_about_know.svg' // 了解律携
import icAboutRewards from '../../assets/ic_about_rewards.svg' // 律携荣誉
import icAboutNews from '../../assets/ic_about_news.svg' // 新闻公告
import icAboutNotice from '../../assets/ic_about_notice.svg' // 消息通知
import icAboutOnlineService from '../../assets/ic_about_online_service.svg' // 在线客服

import icAboutImportantNotice from '../../assets/ic_about_important_notice.svg' // 重要消息通知方式
import icAboutAccountInfo from '../../assets/ic_account_info.svg' // 账户信息
import icAboutChangePassword from '../../assets/ic_about_change_password.svg' // 修改密码

import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {Modal, Popup} from "antd-mobile";
import {useDispatch, useSelector} from "react-redux";
import {fetchUser} from "../../redux/userSlice.js";

const settingsList = [
    {
        title: '重要信息通知方式',
        icon: icAboutImportantNotice,
        routePath: '/settings/info-notice'
    },
    {
        title: '账户信息',
        icon: icAboutAccountInfo,
        routePath: '/settings/account-info'
    },
    {
        title: '修改密码',
        icon: icAboutChangePassword,
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
    const [user, setUser] = useState(localStorage.getItem('user') || {});

    const dispatch = useDispatch();
    // const user = useSelector(state => state.user.user);
    // const status = useSelector(state => state.user.status);
    // const error = useSelector(state => state.user.error);

    // useEffect(() => {
    //     if (status === 'idle') {
    //         dispatch(fetchUser())
    //     }
    // }, [status, dispatch]);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [])

    // const currentVersion = useSelector(state => state.version || '1.0.0');
    const currentVersion = '1.0.0';

    // 导航
    const navigateTo = (operationType) => {
        switch (operationType) {
            case 'join-certification':
                navigate('/join-certification');
                break;
            case 'report-suitcase':
                navigate('/report-suitcase');
                break;
            case 'charge':
                navigate('/charge');
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

    // 页面弹出模态框
    const showModal = async (operationType) => {
        switch (operationType) {
            case 'know': {
                const result = await Modal.alert({
                    title: '关于律携',
                    content: (
                        <div style={{padding: '10px'}}>
                            <p>律携是河南龙文律师事务所以及多家投资机构成立的一家以“互帮互助”文化为核心的网络社群，维护广大人民群众权利和利益的法律援助，为百姓提供的一种低价亲民的全新援助保障形式。</p>
                            <p>截止目前，已稳定运行<span style={{color: 'red'}}>6年337天</span>，已经累计互助<span
                                style={{color: 'red'}}>6445人</span>，累计互助金额<span
                                style={{color: 'red'}}>3.24亿元</span>。赶快一起加入吧！</p>
                        </div>
                    ),
                    showCloseButton: true,
                    shouldCancelButton: false,
                })
                if (result) {
                    console.log('点击确定')
                }
                break;
            }
            default:
                break;
        }
    }

    // 点击头像弹出
    const onSettingsClicked = () => {
        setIsMaskVisible(true)
    }

    // 处理登出操作
    const handleLogout = () =>{
        dispatch({
            type: 'login/logout',
        })
        navigate('/login')
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
                        <span style={{fontSize: '2rem'}}>{user?.userName || '-'}</span>
                        <span style={{fontSize: '1.2rem'}}>编号：{user?.userId || '-'}</span>
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
                    <div className={styles.contentItemWrapper} onClick={() => showModal('know')}>
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

            {/*侧边栏弹出*/}
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
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100vh', position: 'relative'}}>
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
                    <div className={styles.logoutItemWrapper} onClick={handleLogout}>
                        退出登录
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default AboutPage;