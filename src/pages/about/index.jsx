import styles from './index.module.scss';

import icAvatar from '../../assets/ic_about_avatar.svg';
import icChevronRight from '../../assets/ic_chevron_right.svg';

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


function AboutPage() {
    const navigate = useNavigate();


    // 导航
    const navigateTo = (operationType) => {
        switch (operationType) {
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

    return (
        <div className={styles.rootContainer}>
            <div className={styles.baseInfoWrapper}>
                <div className={styles.avatarWrapper}>
                    <img src={icAvatar} alt="" style={{width: '4rem'}}/>
                    <div>

                    </div>
                    <img src={icChevronRight} className={styles.navButton}/>
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
        </div>
    )
}

export default AboutPage;