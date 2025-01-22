// 我的-加入凭证-我的互助计划-计划详情-账单明细
import styles from './bill-detail.module.scss'
import {useNavigate, useParams} from "react-router";
import {useCallback, useEffect, useState} from "react";
import dayjs from "dayjs";
import ic_avatar from "../../../assets/ic_avatar.svg";
import PageNavigation from "../../../components/page-navigation.jsx";
import {List, PullToRefresh, Tabs} from "antd-mobile";

const tabs = [
    {
        key: 'charge-record',
        title: '充值记录',
    },
    {
        key: 'donation-record',
        title: '捐助记录',
    },
    {
        key: 'manage-fee',
        title: '管理费'
    }
]

function BillDetail() {
    const params = useParams();
    const navigate = useNavigate();
    // console.log('params = ', params)
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

    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title='账单'
                extraButton={
                    <img src={ic_avatar} style={{width: '1.4rem', color: '#0C63FF'}}/>
                }
                onExtraButtonClicked={handleNavigateToAboutPage}
            />

            <Tabs
                className={styles.tabsWrapper}
                activeLineMode='fixed'
                style={{
                    '--fixed-active-line-width': '30%',
                    '--active-line-height': '2px',
                    '--active-line-color': '#F75A53',
                    '--active-title-color': '#F75A53',
                    '--content-padding': '0rem',
                }}
            >
                {
                    tabs.map(tab => (
                        <Tabs.Tab key={tab.key} title={tab.title}>
                            <PullToRefresh onRefresh={getDataList} style={{marginTop: '10px'}}>
                                <div className={styles.listWrapper}>
                                    <List
                                        style={{
                                            '--border-bottom': '0px solid transparent',
                                            '--border-inner': '1px solid #EFEFEF',
                                        }}
                                    >
                                        {
                                            dataList.map((item, i) => {
                                                const newItem = {
                                                    ...item,
                                                    type: tab.key,
                                                }
                                                return (
                                                    <List.Item key={item.userId}>
                                                        {
                                                            <ListItem {
                                                                ...newItem
                                                            } />
                                                        }
                                                    </List.Item>
                                                )
                                            })
                                        }
                                    </List>
                                </div>
                            </PullToRefresh>
                        </Tabs.Tab>
                    ))
                }
            </Tabs>
        </div>
    )
}

const ListItem = function (props) {
    const {id, type, date, extraInfo, account} = props;

    let labelIconColor = null
    let labelIconBorderColor = null
    let labelIconText = null
    let labelText = null
    let accountColor = null

    switch (type) {
        case 'charge-record':
            labelIconColor = '#8CC541'
            labelIconBorderColor = '#70B01D'
            labelIconText = '充'
            labelText = '充值'
            accountColor = '#64A312'
            break;
        case 'donation-record':
            labelIconColor = '#FF6B50'
            labelIconBorderColor = '#F75A53'
            labelIconText = '捐'
            labelText = `捐助 (${extraInfo || '-'}公示)`
            accountColor = '#3B3B3B'
            break;
        case 'manage-fee':
            labelIconColor = '#2C90ED'
            labelIconBorderColor = '#087EEA'
            labelIconText = '管'
            labelText = `管理费 (${extraInfo || '-'})`
            accountColor = '#FF4725'
            break;
        default:
            break;
    }

    return (
        <div className={styles.listItemWrapper}>
            <div className={styles.labelIconWrapper}>
                <div
                    className={styles.labelIcon}
                    style={{
                        background: labelIconColor,
                        borderColor: labelIconBorderColor,
                    }}
                >
                    <span>{labelIconText}</span>
                </div>
                <div className={styles.textWrapper}>
                    <span>{labelText}</span>
                    <span>{date ? dayjs(date).format('yyyy-MM-DD') : '2025-01-01'}</span>
                </div>
            </div>
            <span style={{color: accountColor}}>{account || 0}</span>
        </div>
    )
}

export default BillDetail;
