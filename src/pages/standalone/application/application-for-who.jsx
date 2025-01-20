// 我的-报案-申请-第二页（为谁申请）
import styles from './application-for-who.module.scss'
import PageNavigation from "../../../components/page-navigation.jsx";
import {useNavigate} from "react-router";

import {List, PullToRefresh} from "antd-mobile";
import {useCallback, useEffect, useState} from "react";

function ApplicationForWho() {
    const [dataList, setDataList] = useState([]); // 列表数据

    // 获取列表数据
    const getDataList = useCallback(async () => {
        setDataList(Array(Math.floor(Math.random() * 100)).fill(1).map((i, index) => ({
            id: index,
            userName: '用户' + (index + 1),
            userId: (Math.random().toFixed(6).split('.')[1]).toString(),
            idCardNo: '410224198710145678',
            planName: '免费请律师互助计划（60元5年服务版）',
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

    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={'为谁申请'}
            />

            <div className={styles.instructionWrapper}>
                <span style={{fontWeight: 'bold', fontSize: '2rem', color: '#222222'}}>为谁申请互助？</span>
                <span style={{marginTop: '1rem'}}>请点击选择为哪位会员和计划申请互助</span>
            </div>

            <div className={styles.pullToRefreshWrapper}>
                <PullToRefresh onRefresh={getDataList}>
                    <div className={styles.listWrapper}>
                        <List
                            style={{
                                '--border-bottom': '0px solid transparent',
                                '--border-inner': '1px solid #eee',
                            }}
                        >
                            {
                                dataList.map((item, i) => {
                                    return (
                                        <List.Item key={item.userId}>
                                            <ListItem {...item} />
                                        </List.Item>
                                    )
                                })
                            }
                        </List>
                    </div>
                </PullToRefresh>
            </div>

        </div>
    )
}

// list item
const ListItem = function (props) {
    const navigate = useNavigate();
    const {id, userName, idCardNo, planName} = props || {};

    // 下一步
    const handleNextStep = (itemId) => {
        console.log('handleViewDetail called:', itemId);
        navigate(`/report-suitcase/fill-in-info/${itemId}`, {
            state: {
                id: itemId,
            },
            // replace: true,
            params: {
                id: itemId,
            }
        })
    }

    return (
        <div className={styles.itemWrapper} onClick={()=>handleNextStep(id)}>
            <div className={styles.planWrapper}>
                <span style={{fontSize: '2rem', fontWeight: 'bold', color: '#222222'}}>{userName}</span>
                <span>{idCardNo}</span>
                <span>{planName}</span>
            </div>
            <span className={styles.statusWrapper}>
                可申请
            </span>
        </div>
    )
}

export default ApplicationForWho;
