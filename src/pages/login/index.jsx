import styles from './index.module.scss';
import icLogoTitle from '../../assets/ic_login_title.png';
import {Button, Input, Toast} from "antd-mobile";
import {useEffect, useMemo, useRef, useState} from "react";
import {throttle1, throttle2} from "../../utils/index.js";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../redux/loginSlice.js";
import {useNavigate} from "react-router";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginData = useSelector(state => state.login.loginData);
    const status = useSelector(state => state.login.status);
    const error = useSelector(state => state.login.error);

    const [phoneNo, setPhoneNo] = useState('13912345678');
    const [verificationCode, setVerificationCode] = useState('1234');
    const [countDownTimer, setCountDownTimer] = useState(60);
    const [isRunning, setIsRunning] = useState(false);
    const [loginButtonClicked, setLoginButtonClicked] = useState(false);

    // 登录按钮的loading状态
    const loading = useMemo(()=>{
        return loginButtonClicked
    }, [loginButtonClicked])

    useEffect(() => {
        if (status === 'success' && loginData.token) {
            setLoginButtonClicked(false);
            Toast.show('登录成功！')
            // navigate('/home')
            navigate('/fill-info')
        } else if (status === 'error') {
            setLoginButtonClicked(false);
            Toast.show('登录失败！请稍候重试。' + error?.message)
        }
    }, [status, error, navigate])

    const startTimer = () => {
        setCountDownTimer(60);
        setIsRunning(true);
    }

    const stopTimer = () => {
        setIsRunning(false);
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
        if (!phoneNo) {
            Toast.show('请输入手机号!')
            return;
        }
        console.log('点击了发送验证码按钮')
        startTimer();
        // 节流
        // throttle2(() => {
        //     console.log('点击了发送验证码按钮')
        // }, 500)
    }

    // 登录
    const handleLogin = () => {
        if (!phoneNo) {
            Toast.show('请输入手机号!')
            return;
        }
        if (!verificationCode) {
            Toast.show('请输入验证码!')
            return;
        }

        console.log('点击了登录！')
        setLoginButtonClicked(true);
        dispatch(loginThunk({
            phoneNo: phoneNo,
            verificationCode: verificationCode,
        }))
    }

    return (
        <div className={styles.rootContainer}>
            <div className={styles.logoWrapper}>
                <img src={icLogoTitle} style={{width: '100%'}}/>
            </div>
            <div className={styles.inputWrapper}>
                <div className={styles.inputItemWrapper}>
                    <Input
                        placeholder={'请输入手机号'}
                        value={phoneNo}
                        onChange={(value) => setPhoneNo(value)}
                    />
                </div>
                <div className={styles.inputItemWrapper}>
                    <Input
                        style={{width: '60%'}}
                        placeholder={'请输入验证码'}
                        value={verificationCode}
                        onChange={(value) => setVerificationCode(value)}
                    />
                    <div className={styles.verificationWrapper} onClick={handleSendVerificationCode}>
                        <Button color={'danger'} disabled={isRunning} fill={'none'}>
                            {
                                isRunning
                                    ? `${countDownTimer}s 后重新发送`
                                    : `获取验证码`
                            }
                        </Button>
                    </div>
                </div>
            </div>

            {/*<span>{JSON.stringify(loginData)}</span>*/}
            <Button
                type="primary"
                onClick={handleLogin}
                color={'danger'}
                style={{marginTop:'8rem', width: '90%'}}
                loading={loading}
            >
                确认
            </Button>
        </div>
    )
}

export default Login