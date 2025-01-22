// 我的-加入凭证-我的互助计划-计划详情-管理变更-互助计划转让
import styles from './plan-transfer.module.scss'
import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import ic_avatar from "../../../assets/ic_avatar.svg";
import PageNavigation from "../../../components/page-navigation.jsx";
import {RightOutline} from "antd-mobile-icons";
import {Button, Input, TextArea} from "antd-mobile";

function PlanTransfer() {
    const params = useParams();
    const navigate = useNavigate();
    // console.log('params = ', params)
    const [detailData, setDetailData] = useState({})
    const [verificationCode, setVerificationCode] = useState('1234');
    const [countDownTimer, setCountDownTimer] = useState(60);
    const [isRunning, setIsRunning] = useState(false);

    // 附言
    const [affixWords, setAffixWords] = useState('');

    // todo: 获取详情数据
    useEffect(() => {
        const fetchData = async () => {
            const result = await new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        data: {
                            id: params.id,
                            userName: '用户Mock',
                            phoneNumber: '15112345678',
                            planName: '免费请律师60元5年服务版',
                            idCardNo: '410223198602266536',
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

    const startTimer = () => {
        setCountDownTimer(60);
        setIsRunning(true);
    }

    useEffect(() => {
        let interval;
        if (isRunning && countDownTimer > 0) {
            interval = setInterval(() => {
                setCountDownTimer((prevState) => prevState - 1);
            }, 1000);
        }
        if (countDownTimer === 0) {
            clearInterval(interval);
            setIsRunning(false);
        }
        return () => {
            clearInterval(interval);
        }
    }, [isRunning, countDownTimer]);

    // 发送验证码
    const handleSendVerificationCode = () => {
        console.log('点击了发送验证码按钮')
        startTimer();
        // 节流
        // throttle2(() => {
        //     console.log('点击了发送验证码按钮')
        // }, 500)
    }

    // 监听确认变更
    const handleConfirm = () => {
        navigate("/about");
    }

    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={'互助计划转让'}
            />
            <div style={{overflow: 'auto', width: '100%', height: 'calc(100vh - 10rem)'}}>
                <div className={styles.titleWrapper}>管理变更信息</div>
                {/*管理变更信息*/}
                <div className={styles.manageChangeWrapper}>
                    <span>{detailData?.planName}</span>
                    <span>会员姓名：{detailData?.userName}</span>
                    <span>身份证号：{detailData?.idCardNo}</span>
                </div>
                <div className={styles.titleWrapper}>为确保信息安全，发送验证码至：{detailData?.phoneNumber}</div>
                {/*输入验证码和额外信息*/}
                <div className={styles.inputWrapper}>
                    <div className={styles.inputItemWrapper}>
                        <Input
                            style={{width: '60%', '--font-size':'1.4rem'}}
                            placeholder={'请输入验证码'}
                            value={verificationCode}
                            onChange={(value) => setVerificationCode(value)}
                        />
                        <div className={styles.verificationWrapper} onClick={handleSendVerificationCode}>
                            <Button color={'danger'} disabled={isRunning} fill={'none'} style={{fontSize:'1.4rem'}}>
                                {
                                    isRunning
                                        ? `${countDownTimer}s 后重新发送`
                                        : `获取验证码`
                                }
                            </Button>
                        </div>
                    </div>
                    <div className={styles.inputItemWrapper}>
                        <Input
                            style={{'--font-size':'1.4rem'}}
                            placeholder={'给对方说点什么'}
                            value={affixWords}
                            onChange={(value) => setAffixWords(value)}
                        />
                    </div>

                </div>
                {/*确认变更按钮*/}
                <Button className={styles.changeButton} onClick={handleConfirm}>
                    确认变更
                </Button>
            </div>
        </div>
    )
}

export default PlanTransfer;
