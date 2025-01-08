import styles from './fill-info.module.scss'
import PageNavigation from "../../components/page-navigation.jsx";
import {Button, Input} from "antd-mobile";
import {useState} from "react";
import {useNavigate} from "react-router";

export default function FillInfoPage() {
    const [name, setName] = useState('');
    const [idNumber, setIdNumber] = useState('');

    const navigate = useNavigate();

    const handleNextStep = () => {
        console.log('handleNextStep called');
        // 调用接口，成功后执行跳转
        navigate('/home')
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
                        placeholder={'请输入姓名'}
                        value={name}
                        onChange={(value) => setName(value)}
                    />
                </div>
                <div className={styles.inputItemWrapper}>
                    <div className={styles.labelWrapper}>身份证号</div>
                    <Input
                        placeholder={'请输入身份证号'}
                        value={idNumber}
                        onChange={(value) => setIdNumber(value)}
                    />
                </div>
            </div>

            <div className={styles.titleWrapper}>
                <span>加入会员充值</span>
            </div>

            <div className={styles.chargeWrapper}>
                <div className={styles.selectChargeFeeWrapper}>
                    <span style={{color: 'red', fontSize: '1.6rem'}}>{`60元`}</span>
                    <span style={{color: '#999', fontSize: '1.2rem'}}>5年律师服务费</span>
                </div>
                <span style={{color: '#8b8b8b', alignSelf: 'flex-start', marginTop: '2rem'}}><span
                    style={{color: 'red'}}>*</span>付费后等待期180天，每月扣费1元，既可享受5年的专职律师服务并获得众筹资格。</span>
            </div>

            <Button color={'danger'} className={styles.confirmButton} onClick={handleNextStep}>确认</Button>
        </div>
    )
}