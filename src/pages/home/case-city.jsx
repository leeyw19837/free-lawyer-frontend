import styles from './case-city.module.scss';
import provinces from './cities.json';
import {useNavigate, useParams} from "react-router";
import PageNavigation from "../../components/page-navigation.jsx";
import icViewCasesLogo from "../../assets/ic_view_cases_logo.png";
import {useCallback, useEffect, useMemo, useState} from "react";
import dayjs from "dayjs";
import {PullToRefresh} from "antd-mobile";
import icShowupAvatar from "../../assets/ic_showup_avatar.png";

function CaseCityPage() {
    const params = useParams();
    const navigate = useNavigate();
    const currentProvinceName = provinces[params?.provinceIndex || 0]?.name;
    const [listData, setListData] = useState({});
    const [selectedCityIndex, setSelectedCityIndex] = useState(0);

    const fetchData = useCallback(async () => {
        const response = await new Promise(resolve => {
            const count = (Math.random() * 100).toFixed(0)
            const plans = Array.from({length: Number(count)}).fill('0').map((item, i) => {
                return {
                    userName: '张柳华',
                    planName: '60元5年免费律师服务计划',
                    gender: 'female',
                    reason: '民事案件',
                    fee: 10000,
                    date: dayjs().format('YYYY-MM-DD'),
                    detail: '会员张柳华于2024年12月24日在雄安新区0715工地发生重大公示工伤事件。'
                }
            })
            setTimeout(() => {
                resolve({
                    code: 200,
                    data: {
                        plans
                    },
                    msg: null,
                });
            })
        })
        if (response && response.code === 200) {
            setListData(response.data || {});
        }
    }, [selectedCityIndex]);

    useEffect(() => {
        fetchData();
    }, [])

    // 城市列表
    const cities = useMemo(() => {
        return provinces[params?.provinceIndex || 0] ['cities'];
    }, [params?.provinceIndex]);

    // 监听 点击城市
    const handleCitySelected = (index) => {
        setSelectedCityIndex(index);
        fetchData()
    }

    // 查看详情
    const handleViewDetail = (id) => {
        console.log('handleViewDetail called: id = ' + id);
        navigate(`/showup-detail/${id}`);
    }

    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={`免费请律师案例`}
            />
            <div className={styles.logoContentWrapper}>
                <span><span
                    style={{fontSize: '1.8rem'}}>{currentProvinceName}</span> 互助事件{(Math.random() * 100).toFixed(0)}例</span>
                <img src={icViewCasesLogo} alt="provinces" style={{height: '4rem'}}/>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.cityScrollWrapper}>
                    {
                        (cities || []).map((city, index) => (
                            <div
                                key={index}
                                className={selectedCityIndex === index ? styles.cityItemWrapperSelected : styles.cityItemWrapper}
                                onClick={() => handleCitySelected(index)}
                            >
                                <span>{city}</span>
                                <span>{(Math.random() * 100).toFixed(0)}例</span>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.caseScrollWrapper}>
                    <PullToRefresh onRefresh={fetchData}>
                        <div className={styles.listWrapper}>
                            {
                                (listData?.plans || []).map((item, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            {...item}
                                            id={`${index}`}
                                            handleViewDetail={handleViewDetail}
                                        />
                                    )
                                })
                            }
                        </div>
                    </PullToRefresh>
                </div>
            </div>
        </div>
    )
}

const ListItem = function (props) {
    const {id, userName, reason, fee, detail, handleViewDetail} = props || {};
    return (
        <div className={styles.listItemWrapper}>
            <div className={styles.listItemContentWrapper}>
                <div className={styles.topWrapper}>
                    <img src={icShowupAvatar} className={styles.avatarWrapper}/>
                    <div className={styles.infoWrapper}>
                        <span>姓名：<span className={styles.cWrapper}>{`${userName || '-'}`}</span></span>
                        <span>互助金额：<span className={styles.cWrapper}>{`${fee || '-'}`}元</span></span>
                        <span>互助原因：<span className={styles.cWrapper}>{`${reason || '-'}`}</span></span>
                    </div>
                </div>
                <div className={styles.bottomWrapper}>
                    <span>{detail}</span>
                </div>
            </div>
            <div className={styles.listItemFooterWrapper} onClick={() => handleViewDetail(id)}>
                <span>点击查看</span>
            </div>
        </div>
    )
}

export default CaseCityPage;