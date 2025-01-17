import styles from './index.module.scss';
import {useCallback, useEffect, useState} from "react";
import {List, PullToRefresh} from "antd-mobile";
import dayjs from "dayjs";
import icShowupOngoing from '../../assets/ic_showup_onging.svg';
import icShowupAvatar from '../../assets/ic_showup_avatar.png';
import {useNavigate} from "react-router";

function ShowUpPage() {
    const navigate = useNavigate();
    const [listData, setListData] = useState([]);

    const fetchData = useCallback(async () => {
        const response = await new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    code: 200,
                    data: [
                        {
                            groupName: '2025年02月第二期公示',
                            publishDate: dayjs().format('YYYY-MM-DD'),
                            items: [
                                {
                                    userName: '张柳华',
                                    reason: '民事案件',
                                    fee: 10000,
                                    date: dayjs().format('YYYY.MM.DD'),
                                    detail: '会员张柳华于2024年12月24日在雄安新区0715工地发生重大公示工伤事件。'
                                },
                                {
                                    userName: '刘斌',
                                    reason: '民事案件',
                                    fee: 8000,
                                    date: dayjs().format('YYYY.MM.DD'),
                                    detail: '会员刘斌于2024年12月24日在河北邢台思源食品厂供应链被拖欠40万元尾款，互助律师。'
                                },
                            ]
                        },
                        {
                            groupName: '2025年01月第一期公示',
                            publishDate: dayjs().format('YYYY-MM-DD'),
                            items: [
                                {
                                    userName: '李大成',
                                    reason: '刑事案件',
                                    fee: 30000,
                                    date: dayjs().format('YYYY.MM.DD'),
                                    detail: '会员李大成2024年12月22日因邻居宅基地纠纷被邻居张某打伤后医治无效身亡。'
                                },
                                {
                                    userName: '黄华',
                                    reason: '民事案件',
                                    fee: 6000,
                                    date: dayjs().format('YYYY.MM.DD'),
                                    detail: '会员黄华于2024年12月24日在河北张家口经人介绍相亲介绍认识李某订婚款28万，后因女方消失，申请互助律师。'
                                },
                            ]
                        },
                    ],
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
            <PullToRefresh onRefresh={fetchData}>
                <div className={styles.listWrapper}>
                    {
                        listData.map((outerItem, outerIndex) => {
                            const {groupName, publishDate, items} = outerItem;
                            return (
                                <div className={styles.groupWrapper} key={outerIndex}>
                                    <div className={styles.groupHeader}>
                                        <span className={styles.mainTitle}>{groupName}</span>
                                        <span className={styles.subTitle}>{`发布日期：${publishDate}`}</span>
                                    </div>

                                    {
                                        items.map((innerItem, innerIndex) => {
                                                return (
                                                    <List.Item key={innerIndex}>
                                                        {
                                                            <ListItem
                                                                {...innerItem}
                                                                id={`${outerIndex}-${innerIndex}`}
                                                                handleViewDetail={handleViewDetail}
                                                            />
                                                        }
                                                    </List.Item>
                                                )
                                            }
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </PullToRefresh>

        </div>
    )
}

const ListItem = function (props) {
    const {id, userName, reason, fee, date, detail, handleViewDetail} = props || {};
    return (
        <div className={styles.listItemWrapper}>
            <div className={styles.contentWrapper}>
                <div className={styles.topWrapper}>
                    <img src={icShowupAvatar} className={styles.avatarWrapper}/>
                    <div className={styles.infoWrapper}>
                        <span>会员姓名：<span className={styles.cWrapper}>{`${userName || '-'}`}</span></span>
                        <span>互助原因：<span className={styles.cWrapper}>{`${reason || '-'}`}</span></span>
                        <span>互助金额：<span className={styles.cWrapper}>{`${fee || '-'}`}</span></span>
                        <span>入会时间：<span className={styles.cWrapper}>{`${date || '-'}`}</span></span>
                    </div>
                </div>
                <div className={styles.bottomWrapper}>
                    <span>{detail}</span>
                </div>
                <img src={icShowupOngoing} className={styles.statusWrapper} />
            </div>
            <div className={styles.footerWrapper} onClick={() => handleViewDetail(id)}>
                <span>查看详情</span>
            </div>
        </div>
    )
}

export default ShowUpPage