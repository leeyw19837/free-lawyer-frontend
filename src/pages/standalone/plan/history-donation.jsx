// 我的-加入凭证-我的互助计划-计划详情-往期捐款
import styles from './history-donation.module.scss';
import {useCallback, useEffect, useState} from "react";
import {PullToRefresh} from "antd-mobile";
import dayjs from "dayjs";
import icShowupAvatar from '../../../assets/ic_showup_avatar.png';
import icDonateMale from '../../../assets/ic_donate_male.svg';
import icDonateFemale from '../../../assets/ic_donate_female.svg';
import icDonateHelped from '../../../assets/ic_donate_helped.svg';
import {useNavigate} from "react-router";
import PageNavigation from "../../../components/page-navigation.jsx";
import {ExclamationCircleFill} from "antd-mobile-icons";

function HistoryDonation() {
    const navigate = useNavigate();
    const [listData, setListData] = useState({});

    const fetchData = useCallback(async () => {
        const response = await new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    code: 200,
                    data: {
                        baseInfo: {
                            userName: '王站栗',
                            joinedDates: 3298,
                            donateAmount: 50,
                            donateTimes: 178,
                        },
                        plans: [
                            {
                                userName: '张柳华',
                                planName: '60元5年免费律师服务计划',
                                gender: 'female',
                                reason: '民事案件',
                                fee: 10000,
                                date: dayjs().format('YYYY-MM-DD'),
                                detail: '会员张柳华于2024年12月24日在雄安新区0715工地发生重大公示工伤事件。'
                            },
                            {
                                userName: '刘斌',
                                planName: '60元5年免费律师服务计划',
                                gender: 'male',
                                reason: '民事案件',
                                fee: 8000,
                                date: dayjs().format('YYYY-MM-DD'),
                                detail: '会员刘斌于2024年12月24日在河北邢台思源食品厂供应链被拖欠40万元尾款，互助律师。'
                            },
                            {
                                userName: '李大成',
                                planName: '60元5年免费律师服务计划',
                                gender: 'male',
                                reason: '刑事案件',
                                fee: 30000,
                                date: dayjs().format('YYYY-MM-DD'),
                                detail: '会员李大成2024年12月22日因邻居宅基地纠纷被邻居张某打伤后医治无效身亡。'
                            },
                            {
                                userName: '黄华',
                                planName: '60元5年免费律师服务计划',
                                gender: 'male',
                                reason: '民事案件',
                                fee: 6000,
                                date: dayjs().format('YYYY-MM-DD'),
                                detail: '会员黄华于2024年12月24日在河北张家口经人介绍相亲介绍认识李某订婚款28万，后因女方消失，申请互助律师。'
                            },
                        ]
                    },
                    msg: null,
                });
            })
        })
        if (response && response.code === 200) {
            setListData(response.data || []);
        }
    }, [])

    useEffect(() => {
        fetchData();
    }, [])

    // 查看详情
    const handleViewDetail = (id) => {
        console.log('handleViewDetail called: id = ' + id);
        navigate(`/showup-detail/${id}`);
    }

    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={`往期捐助`}
            />
            <div className={styles.tipInfoWrapper}>
                <ExclamationCircleFill color={'#F77800'} fontSize={'2rem'}/>
                <span style={{marginLeft: '1rem'}}>为保护受助者隐私，公示7日后将隐去照片和个人信息</span>
            </div>
            <div className={styles.encourageWrapper}>
                <div className={styles.encourageContentWrapper}>
                    <span style={{fontSize: '2.2rem'}}>{listData?.baseInfo?.userName || '-'}</span>
                    <span style={{marginTop: '1rem'}}>{`因为有你，每一分钱都更有意义`}</span>
                    <span>{`您已经和大家一起互助了1.67亿元`}</span>
                    <span>{`再小的善举，也是改变世界的力量`}</span>
                </div>
                <div className={styles.footerWrapper}>
                    <div className={styles.footerItemWrapper}>
                        <span>{listData?.baseInfo?.joinedDates || 0}</span>
                        <span style={{fontSize: '1.2rem'}}>加入天数</span>
                    </div>
                    <div className={styles.footerItemWrapper}>
                        <span>{listData?.baseInfo?.donateAmount || 0}</span>
                        <span style={{fontSize: '1.2rem'}}>捐助金额</span>
                    </div>
                    <div className={styles.footerItemWrapper}>
                        <span>{listData?.baseInfo?.donateTimes || 0}</span>
                        <span style={{fontSize: '1.2rem'}}>捐助次数</span>
                    </div>
                </div>
            </div>
            <div style={{overflow: 'hidden', width: '100%', height: 'calc(100vh - 8.1rem - 20rem)'}}>
                <PullToRefresh onRefresh={fetchData}>
                    <div className={styles.listWrapper}>
                        {
                            (listData?.plans || []).map((item, index) => {
                                return (
                                    <div className={styles.groupWrapper} key={index}>
                                        <div
                                            className={styles.indicatorWrapper}
                                        >
                                            <div className={styles.rectElement}/>
                                            <div className={styles.lineElement}
                                                 style={{visibility: index !== listData?.plans?.length - 1 ? 'visible' : 'hidden'}}/>
                                        </div>
                                        <div className={styles.ccContainerWrapper}>
                                            <span style={{marginLeft: '1rem', color: '#858584', fontSize: '1.6rem'}}>{item?.date}</span>
                                            <ListItem
                                                {...item}
                                                id={`${index}`}
                                                handleViewDetail={handleViewDetail}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </PullToRefresh>
            </div>
        </div>
    )
}

const ListItem = function (props) {
    const {id, userName, reason, fee, gender, detail, planName, handleViewDetail} = props || {};
    return (
        <div className={styles.listItemWrapper}>
            <div className={styles.listItemTitleWrapper}>
                <div className={styles.listNameWrapper}>
                    <img src={gender === 'male' ? icDonateMale : icDonateFemale} style={{width: '1.6rem'}}/>
                    <span style={{marginLeft: '1rem'}}>{userName}</span>
                </div>
                <span>{planName}</span>
            </div>
            <div className={styles.listItemContentWrapper}>
                <div className={styles.topWrapper}>
                    <img src={icShowupAvatar} className={styles.avatarWrapper}/>
                    <div className={styles.infoWrapper}>
                        <span>互助金额：<span className={styles.cWrapper}>{`${fee || '-'}`}</span></span>
                        <span>互助原因：<span className={styles.cWrapper}>{`${reason || '-'}`}</span></span>
                    </div>
                </div>
                <div className={styles.bottomWrapper}>
                    <span>{detail}</span>
                </div>
                <img src={icDonateHelped} className={styles.statusWrapper}/>
            </div>
            <div className={styles.listItemFooterWrapper} onClick={() => handleViewDetail(id)}>
                <span>查看详情</span>
            </div>
        </div>
    )
}

export default HistoryDonation