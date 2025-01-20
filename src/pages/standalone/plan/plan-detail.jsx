// 我的-加入凭证-我的互助计划-计划详情
import styles from './plan-detail.module.scss'
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import {tipInfoMap} from "./my-plan.jsx";
import ic_avatar from "../../../assets/ic_avatar.svg";
import PageNavigation from "../../../components/page-navigation.jsx";
import {CheckCircleFill, RightOutline} from "antd-mobile-icons";
import {Button} from "antd-mobile";

function PlanDetail() {
    const params = useParams();
    const navigate = useNavigate();
    // console.log('params = ', params)
    const [detailData, setDetailData] = useState({})

    // todo: 获取详情数据
    useEffect(() => {
        const fetchData = async () => {
            const result = await new Promise(resolve => {
                setTimeout(() => {
                    const balance = Math.floor(Math.random() * 61) // 余额
                    let tipInfo = balance >= 25
                        ? tipInfoMap['normal']
                        : (
                            balance >= 10
                                ? tipInfoMap['alarm']
                                : (
                                    balance > 0
                                        ? tipInfoMap['emergency']
                                        : tipInfoMap['danger']
                                )
                        )
                    resolve({
                        data: {
                            id: params.id,
                            userName: '用户Mock',
                            idNumber: '410224198710145603',
                            balance,
                            tipInfo,
                            joinDate: dayjs().format('YYYY-MM-DD'),
                            validDate: dayjs().format('YYYY-MM-DD'),
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

    // 监听右上角 我的 点击事件
    const handleNavigateToAboutPage = () => {
        navigate("/about");
    }

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
                title={`${detailData.userName}的加入详情`}
                extraButton={
                    <img src={ic_avatar} style={{width: '1.4rem', color: '#0C63FF'}}/>
                }
                onExtraButtonClicked={handleNavigateToAboutPage}
            />
            <div style={{overflow: 'auto', width: '100%', height:'calc(100vh - 10rem)'}}>
                {/*详情*/}
                <div className={styles.detailWrapper}>
                <span className={styles.balanceWrapper}><span
                    style={{fontSize: '1.6rem', marginRight: '0.2rem'}}>¥</span>{(detailData?.balance)?.toFixed(2)}</span>
                    <img src={detailData?.tipInfo?.icon} className={styles.imageWrapper}/>
                    <span style={{color: '#808080'}}>{detailData?.tipInfo?.title}</span>
                    <div className={styles.tipsWrapper}>
                        <p style={{color: '#515151'}}>为避免您忘记充值而失去保障，设置以下提示：</p>
                        {
                            Object.keys(tipInfoMap).map((key) => (
                                <div
                                    key={key}
                                    className={styles.instructionItemWrapper}
                                >
                                    <img src={tipInfoMap[key]['icon']} className={styles.iconContainer}/>
                                    <div className={styles.infoContainer}>
                                        <span>{tipInfoMap[key]['title']}{key !== 'danger' && <span>-</span>} {tipInfoMap[key]['description']}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/*律携互助计划*/}
                <div className={styles.mutualWrapper}>
                    <div className={styles.mutualItemWrapper}>
                        <span style={{fontSize: '1.6rem', fontWeight: 'bold'}}>免费请律师互助计划</span>
                        <div className={styles.indicator}>60元 5年版</div>
                    </div>
                    <div className={styles.mutualItemWrapper}>
                        <span className={styles.itemLabel}>会员姓名</span>
                        <span className={styles.itemValue}>{detailData?.userName}</span>
                    </div>
                    <div className={styles.mutualItemWrapper}>
                        <span className={styles.itemLabel}>身份证号</span>
                        <span className={styles.itemValue}>{detailData?.idNumber}</span>
                    </div>
                    <div className={styles.mutualItemWrapper} style={{borderBottom: '0px solid transparent'}}>
                        <span className={styles.itemLabel}>加入日期</span>
                        <span className={styles.itemValue}>{detailData?.joinDate}</span>
                    </div>
                </div>

                {/*最高互助金额*/}
                <div className={styles.feeWrapper}>
                    <div className={styles.feeItemWrapper}>
                        <span style={{fontSize: '1.6rem', fontWeight: 'bold'}}>最高互助金额</span>
                        <div className={styles.checkCircleWrapper}>
                            <CheckCircleFill fontSize={24} color={'#09BB07'}/>
                            <span style={{marginLeft: '10px'}}>已生效</span>
                        </div>
                    </div>
                    <div className={styles.cardWrapper}>
                        <div className={styles.feeItemWrapper}>
                            <span className={styles.itemLabel}>民事案件</span>
                            <span className={styles.itemValue}>10000元</span>
                        </div>
                        <div className={styles.feeItemWrapper}>
                            <span className={styles.itemLabel}>刑事案件</span>
                            <span className={styles.itemValue}>30000元</span>
                        </div>
                        <div className={styles.feeItemWrapper}>
                            <span className={styles.itemLabel}>生效时间</span>
                            <span className={styles.itemValue} style={{color: '#E14545'}}>{detailData?.validDate}</span>
                        </div>
                    </div>
                </div>

                {/*明细列表入口*/}
                <div className={styles.mutualWrapper} style={{marginBottom: '1rem'}}>
                    {/*<div className={styles.mutualItemWrapper}>*/}
                    {/*    <span className={styles.itemLabel}>往期捐款</span>*/}
                    {/*    <RightOutline className={styles.itemValue} onClick={() => handleNavigateToListView('history-donation')}/>*/}
                    {/*</div>*/}
                    <div className={styles.mutualItemWrapper}>
                        <span className={styles.itemLabel}>账单明细</span>
                        <RightOutline className={styles.itemValue} onClick={() => handleNavigateToListView('bill-detail')}/>
                    </div>
                    {/*<div className={styles.mutualItemWrapper} style={{borderBottom: '0px solid transparent'}}>*/}
                    {/*    <span className={styles.itemLabel}>设置更改</span>*/}
                    {/*    <RightOutline className={styles.itemValue} onClick={() => handleNavigateToListView('settings-modify')}/>*/}
                    {/*</div>*/}
                </div>

                <Button className={styles.chargeButton} onClick={handleCharge}>
                    充值
                </Button>
            </div>

        </div>
    )
}

export default PlanDetail;
