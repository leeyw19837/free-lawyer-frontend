import styles from './fill-info.module.scss'
import PageNavigation from "../../components/page-navigation.jsx";
import {Button, Input, Toast} from "antd-mobile";
import {useState} from "react";
import {useNavigate} from "react-router";

export default function FillInfoPage() {
    const navigate = useNavigate();

    const [name, setName] = useState('测试用户');
    const [idNumber, setIdNumber] = useState('132801202001011234');
    const [showCharge, setShowCharge] = useState(false);
    const [loading, setLoading] = useState(false);
    // 点击下一步
    const handleNextStep = () => {
        // 第一步：填写身份信息
        if (!showCharge) {
            if (!name) {
                Toast.show('请填写姓名');
                return;
            }
            if (!idNumber) {
                Toast.show('请填写身份证号');
                return;
            }
            // todo: 调用接口，提交身份信息
            console.log('handleNextStep called: step1 --- commit id info');
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setShowCharge(true);
                Toast.show('身份信息提交成功！')
            }, 1000)
        } else {
            // todo: 验证用户是否充值成功，成功则执行页面跳转
            console.log('handleNextStep called: step2 --- nav to home page');
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                Toast.show('提交成功！')
                navigate('/home')
            }, 1000)
        }
    }

    // 点击充值
    const handleCharge = () => {
        // todo: 调用微信充值接口
        console.log('handleCharge called');
    }

    return (
        <div className={styles.rootContainer}>
            <PageNavigation title={'填写信息'}/>

            <div className={styles.titleWrapper}>
                <span>加入会员信息</span>
            </div>
            <span style={{color: '#8b8b8b', alignSelf: 'flex-start', marginLeft: '1rem', marginTop: '1rem'}}><span
                style={{color: 'red'}}>*</span>身份信息不可更改，请正确填写</span>
            <div className={styles.inputWrapper}>
                <div className={styles.inputItemWrapper}>
                    <div className={styles.labelWrapper}>姓名</div>
                    <Input
                        disabled={showCharge}
                        placeholder={'请输入姓名'}
                        value={name}
                        onChange={(value) => setName(value)}
                    />
                </div>
                <div className={styles.inputItemWrapper}>
                    <div className={styles.labelWrapper}>身份证号</div>
                    <Input
                        disabled={showCharge}
                        placeholder={'请输入身份证号'}
                        value={idNumber}
                        onChange={(value) => setIdNumber(value)}
                    />
                </div>
            </div>

            {
                showCharge && (
                    <>
                        <div className={styles.titleWrapper}>
                            <span>加入会员充值</span>
                        </div>

                        <div className={styles.chargeWrapper}>
                            <div className={styles.selectChargeFeeWrapper} onClick={handleCharge}>
                                <span style={{color: 'red', fontSize: '1.6rem'}}>{`60元`}</span>
                                <span style={{color: '#999', fontSize: '1.2rem'}}>5年律师服务费</span>
                            </div>
                            <span style={{color: '#8b8b8b', alignSelf: 'flex-start', marginTop: '2rem'}}><span
                                style={{color: 'red'}}>*</span>付费后等待期180天，每月扣费1元，既可享受5年的专职律师服务并获得众筹资格。</span>
                        </div>
                    </>
                )
            }

            <Button color={'danger'} className={styles.confirmButton} onClick={handleNextStep} loading={loading}>下一步</Button>
        </div>
    )
}