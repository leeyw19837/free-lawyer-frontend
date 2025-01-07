import styles from './index.module.scss';
import icLogoTitle from '../../assets/ic_login_title.png';
import {Button, Input, Toast} from "antd-mobile";
import {useEffect, useMemo, useRef, useState} from "react";
import {throttle1, throttle2} from "../../utils/index.js";

function Login() {
    const [phoneNo, setPhoneNo] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [countDownTimer, setCountDownTimer] = useState(60);
    const [isRunning, setIsRunning] = useState(false);

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

            <Button type="primary" onClick={handleLogin} color={'danger'} style={{marginTop:'8rem', width: '90%'}}>
                登录
            </Button>
        </div>
    )
}

export default Login