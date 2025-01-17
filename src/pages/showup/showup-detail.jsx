import styles from './showup-detail.module.scss'
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import ic_avatar from "../../assets/ic_avatar.svg";
import PageNavigation from "../../components/page-navigation.jsx";
import {CheckCircleFill, ExclamationCircleFill, RightOutline} from "antd-mobile-icons";
import {Button} from "antd-mobile";
import icShowupAvatar from "../../assets/ic_showup_avatar.png";

function ShowupDetail() {
    const params = useParams();
    const navigate = useNavigate();
    // console.log('params = ', params)
    const [detailData, setDetailData] = useState({})

    // todo: 获取详情数据
    useEffect(() => {
        const fetchData = async () => {
            const result = await new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        data: {
                            id: params.id,
                            userInfo: {
                                avatar: null,
                                name: '王站栗',
                                gender: '男',
                                address: '山东省',
                                birthDate: '1952-09-17',
                                serialNo: 'kk20180507-130',
                            },
                            helpAmount: 30000,
                            donateAmount: 17148,
                            baseInfo: {
                                planName: '60元5年版',
                                joinTime: '2017-06-30',
                                expireStartTime: '2017-11-30',
                                showUpTime: '2025-01-08',
                                payTime: '2025-01-15',
                            },
                            affairDetail: '会员王站栗于2024年04月05日在雄安新区～～～～～～～～～～ ～～～～。',
                        },
                        code: 200,
                        msg: null,
                    })
                })
            })

            if (result && result.code === 200) {
                setDetailData(result.data);
            } else {
                setDetailData({})
            }
        }
        fetchData();
    }, []);

    // 监听 列表跳转事件
    const handleNavigateToListView = (operationType) => {
        switch (operationType) {
            case "history-donation":

                break;
            case "bill-detail":
                navigate(`/bill-detail/${params.id}`);
                break;
            case "settings-modify":

                break;
            default:
                break;
        }
    }

    // 监听充值点击事件
    const handleCharge = () => {
        console.log('handleCharge called')
    }

    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={`${detailData?.userInfo?.name}的加入详情`}
            />
            <div style={{overflow: 'auto', width: '100%', height:'calc(100vh - 10rem)'}}>
                <div className={styles.tipInfoWrapper}>
                    <ExclamationCircleFill color={'#F77800'} fontSize={'2rem'}/>
                    <span style={{marginLeft: '1rem'}}>为保护受助者隐私，公示7日后将隐去照片和个人信息</span>
                </div>
                {/*用户信息*/}
                <div className={styles.userInfoWrapper}>
                    <img src={icShowupAvatar} className={styles.avatarWrapper}/>
                    <div className={styles.infoWrapper}>
                        <span>姓名：<span
                            className={styles.cWrapper}>{`${detailData?.userInfo?.name || '-'}`}</span></span>
                        <span>性别：<span
                            className={styles.cWrapper}>{`${detailData?.userInfo?.gender || '-'}`}</span></span>
                        <span>现居地址：<span
                            className={styles.cWrapper}>{`${detailData?.userInfo?.address || '-'}`}</span></span>
                        <span>出生日期：<span
                            className={styles.cWrapper}>{`${detailData?.userInfo?.birthDate || '-'}`}</span></span>
                        <span>事件编号：<span
                            className={styles.cWrapper}>{`${detailData?.userInfo?.serialNo || '-'}`}</span></span>
                    </div>
                </div>

                {/*金额信息*/}
                <div className={styles.feeInfoWrapper}>
                    <div className={styles.feeItemWrapper}>
                        <span style={{
                            color: '#F53930',
                            fontSize: '2.6rem',
                            fontWeight: 'bold'
                        }}>{detailData?.helpAmount}元</span>
                        <span>互助金</span>
                    </div>
                    <div className={styles.feeItemWrapper}>
                        <span style={{
                            color: '#F53930',
                            fontSize: '2.6rem',
                            fontWeight: 'bold'
                        }}>{detailData?.donateAmount}人</span>
                        <span>参加捐助人数</span>
                    </div>
                </div>


                {/*基本信息*/}
                <div className={styles.baseInfoWrapper}>
                    <div className={styles.mutualItemWrapper}>
                        <span style={{fontSize: '1.6rem', fontWeight: 'bold'}}>基本信息</span>
                    </div>
                    <div className={styles.mutualItemWrapper}>
                        <span className={styles.itemLabel}>互助计划</span>
                        <span className={styles.itemValue}>{detailData?.baseInfo?.planName}</span>
                    </div>
                    <div className={styles.mutualItemWrapper}>
                        <span className={styles.itemLabel}>加入时间</span>
                        <span className={styles.itemValue}>{detailData?.baseInfo?.joinTime}</span>
                    </div>
                    <div className={styles.mutualItemWrapper}>
                        <span className={styles.itemLabel}>生效时间</span>
                        <span className={styles.itemValue}>{detailData?.baseInfo?.expireStartTime}</span>
                    </div>
                    <div className={styles.mutualItemWrapper}>
                        <span className={styles.itemLabel}>公示日期</span>
                        <span className={styles.itemValue}>{detailData?.baseInfo?.showUpTime}</span>
                    </div>
                    <div className={styles.mutualItemWrapper} style={{borderBottom: '0px solid transparent'}}>
                        <span className={styles.itemLabel}>扣款日期</span>
                        <span className={styles.itemValue}>{detailData?.baseInfo?.payTime}</span>
                    </div>
                </div>

                {/*事件情况*/}
                <div className={styles.eventInfoWrapper}>
                    <div className={styles.titleWrapper}>
                        <span style={{fontSize: '1.6rem', fontWeight: 'bold'}}>事件情况</span>
                    </div>
                    <div className={styles.contentWrapper}>
                        <span>{detailData?.affairDetail}</span>
                    </div>
                </div>


                <Button className={styles.chargeButton} onClick={handleCharge}>
                    查询余额
                </Button>
            </div>

        </div>
    )
}

export default ShowupDetail;
