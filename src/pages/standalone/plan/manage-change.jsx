// 我的-加入凭证-我的互助计划-计划详情-管理变更
import styles from './manage-change.module.scss'
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import ic_avatar from "../../../assets/ic_avatar.svg";
import PageNavigation from "../../../components/page-navigation.jsx";
import {RightOutline} from "antd-mobile-icons";
import {Button} from "antd-mobile";

function ManageChange() {
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
                            userName: '用户Mock',
                            planName: '5年免费律师互助计划',
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

    // 监听 进行变更
    const handleChange = () => {
        navigate(`/my-plan/plan-transfer/${params.id}`);
    }

    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={'管理变更'}
                extraButton={
                    <img src={ic_avatar} style={{width: '1.4rem', color: '#0C63FF'}}/>
                }
                onExtraButtonClicked={handleNavigateToAboutPage}
            />
            <div style={{overflow: 'auto', width: '100%', height: 'calc(100vh - 10rem)'}}>
                {/*提示信息*/}
                <div className={styles.infoWrapper}>
                    <span>通过以下操作，您将把<span style={{color: '#1170E5', marginLeft:'0.4rem', marginRight: '0.4rem'}}>{detailData?.userName}</span>的<span style={{color: '#1170E5', marginLeft:'0.4rem', marginRight: '0.4rem'}}>{detailData?.planName}</span>变更为他人进行管理</span>
                </div>

                {/*步骤*/}
                <div className={styles.stepWrapper}>
                    <div className={styles.stepItemWrapper}>
                        <div className={styles.topWrapper}>
                            第1步
                        </div>
                        <div className={styles.bottomWrapper}>
                            验证手机
                        </div>
                    </div>
                    <RightOutline color={'#848483'} style={{transform: 'translateY(-2rem)', padding: '0 1rem'}} />
                    <div className={styles.stepItemWrapper}>
                        <div className={styles.topWrapper}>
                            第2步
                        </div>
                        <div className={styles.bottomWrapper}>
                            微信转发好友
                        </div>
                    </div>
                    <RightOutline color={'#848483'} style={{transform: 'translateY(-2rem)', padding: '0 1rem'}} />
                    <div className={styles.stepItemWrapper}>
                        <div className={styles.topWrapper}>
                            第3步
                        </div>
                        <div className={styles.bottomWrapper}>
                            好友接收
                        </div>
                    </div>
                </div>

                {/*变更按钮*/}
                <Button className={styles.changeButton} onClick={handleChange}>
                    进行变更
                </Button>
            </div>
        </div>
    )
}

export default ManageChange;
