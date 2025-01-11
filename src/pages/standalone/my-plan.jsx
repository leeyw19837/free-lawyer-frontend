import styles from './my-plan.module.scss'
import PageNavigation from "../../components/page-navigation.jsx";
import {useNavigate} from "react-router";

import ic_avatar from "../../assets/ic_avatar.svg";
import {Button, List, Modal, PullToRefresh, SearchBar, Tabs} from "antd-mobile";
import {useCallback, useEffect, useRef, useState} from "react";

import icPlanNormal from "../../assets/ic_plan_normal.svg";
import icPlanAlarm from "../../assets/ic_plan_alarm.svg";
import icPlanEmergency from "../../assets/ic_plan_emergency.svg";
import icPlanDanger from "../../assets/ic_plan_danger.svg";

const tabs = [
    {
        key: 'valid',
        title: '有效',
    },
    {
        key: 'emergency',
        title: '急需充值',
    },
    {
        key: 'invalid',
        title: '已失效',
    },
    {
        key: 'to-be-paid',
        title: '待支付'
    }
]

export const tipInfoMap = {
    'normal': {
        icon: icPlanNormal,
        title: '余额正常',
        description: '余额≥25元，预计可用25个月以上'
    },
    'alarm': {
        icon: icPlanAlarm,
        title: '余额警示',
        description: '10元≤余额<25元，预计可用10个月到25个月'
    },
    'emergency': {
        icon: icPlanEmergency,
        title: '即将失效',
        description: '余额<10元，预计可用不足10个月'
    },
    'danger': {
        icon: icPlanDanger,
        title: '',
        description: '***日后失去保障，请立即充值！'
    }
}

function MyPlan() {
    const navigate = useNavigate();
    const searchInputRef = useRef(null);
    const [dataList, setDataList] = useState([]); // 列表数据

    // 获取列表数据
    const getDataList = useCallback(async () => {
        setDataList(Array(Math.floor(Math.random() * 100)).fill(1).map((i, index) => ({
            id: index,
            userName: '用户' + (index + 1),
            userId: (Math.random().toFixed(6).split('.')[1]).toString(),
            balance: Math.floor(Math.random() * 61),
        })))
    }, [setDataList])

    useEffect(() => {
        const timer = setTimeout(() => {
            getDataList();
        }, 1000)

        return () => {
            clearTimeout(timer);
        }
    }, [getDataList])

    // 监听右上角 我的 点击事件
    const handleNavigateToAboutPage = () => {
        navigate("/about");
    }

    // 监听搜索
    const handleSearch = () => {
        const searchInputValue = searchInputRef.current?.nativeElement?.value;
        console.log('handleSearch called:', searchInputValue);
    }

    // 监听批量充值
    const handleBatchCharge = () => {
        console.log('handleBatchCharge called',);
    }

    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={'我的互助计划'}
                extraButton={
                    <img src={ic_avatar} style={{width: '1.4rem', color: '#0C63FF'}}/>
                }
                onExtraButtonClicked={handleNavigateToAboutPage}
            />
            <div className={styles.searchWrapper}>
                <SearchBar
                    ref={searchInputRef}
                    style={{width: '82%'}}
                    placeholder={'输入姓名或身份证号进行搜索'}
                />
                <div className={styles.buttonWrapper}>
                    <Button color={'default'} size={'small'} onClick={handleSearch}>搜索</Button>
                </div>
            </div>

            <Tabs
                className={styles.tabsWrapper}
                activeLineMode='fixed'
                style={{
                    '--fixed-active-line-width': '20%',
                    '--active-line-height': '4px',
                    '--active-line-color': '#F75A53',
                    '--active-title-color': '#F75A53',
                    '--content-padding': '0rem',
                }}
            >
                {
                    tabs.map(tab => (
                        <Tabs.Tab key={tab.key} title={tab.title}>
                            <PullToRefresh onRefresh={getDataList}>
                                <div className={styles.listWrapper}>
                                    <List
                                        style={{
                                            '--border-bottom': '0px solid transparent',
                                            '--border-inner': '0px solid transparent',
                                        }}
                                    >
                                        {
                                            dataList.map((item, i) => {
                                                return (
                                                    <List.Item key={item.userId}>
                                                        {
                                                            tab.key === 'valid'
                                                                ? <ValidItem {...item} />
                                                                : item.userName
                                                        }
                                                    </List.Item>
                                                )
                                            })
                                        }
                                    </List>
                                </div>
                            </PullToRefresh>
                            <div className={styles.batchChargeWrapper} onClick={handleBatchCharge}>
                                批量充值
                            </div>
                        </Tabs.Tab>
                    ))
                }
            </Tabs>
        </div>
    )
}

// 有效 - item
const ValidItem = function (props) {
    const navigate = useNavigate();
    const {id, balance, userName, userId} = props || {};

    // 监听查看详情
    const handleViewDetail = (itemId) => {
        console.log('handleViewDetail called:', itemId);
        navigate(`/plan-detail/${itemId}`, {
            state: {
                id: itemId,
            },
            // replace: true,
            params: {
                id: itemId,
            }
        })
    }

    // 监听查看提示说明
    const handleViewInstructions = async () => {
        const result = await Modal.alert({
            title: '提示说明',
            content: (
                <div style={{padding: '1rem 0.2rem', borderTop: '1px solid #ccc'}}>
                    <p>为避免您忘记充值而失去保障，设置以下提示：</p>
                    {
                        Object.keys(tipInfoMap).map((key) => (
                            <div
                                key={key}
                                className={styles.instructionItemWrapper}
                            >
                                <img src={tipInfoMap[key]['icon']} className={styles.iconContainer}/>
                                <div className={styles.infoContainer}>
                                    <span>{tipInfoMap[key]['title']}</span>
                                    <span>{tipInfoMap[key]['description']}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            ),
            showCloseButton: true,
            shouldCancelButton: false,
        })
        if (result) {
            console.log('点击确定')
        }
    }

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

    return (
        <div className={styles.itemWrapper}>
            <div className={styles.nameWrapper}>
                <span>{userName}</span>
                <div className={styles.indicator}>5年版</div>
            </div>
            <div className={styles.detailWrapper}>
                <img
                    src={tipInfo.icon}
                    className={styles.iconWrapper}
                    onClick={handleViewInstructions}
                />
                <div className={styles.infoWrapper}>
                    <span style={{fontSize: '1.4rem', color: '#313131'}}>¥<span
                        style={{fontSize: '2.4rem'}}>{balance.toFixed(2)}</span></span>
                    <span>{tipInfo.title}</span>
                    <span>预计可用{balance}月</span>
                </div>
                <div className={styles.chargeExtendButton}>充值延长服务</div>
            </div>
            <div className={styles.operationWrapper} onClick={() => handleViewDetail(id)}>
                <span>{`查看详情>`}</span>
            </div>
        </div>
    )
}

export default MyPlan;
