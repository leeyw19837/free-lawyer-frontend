import styles from './info-notice.module.scss';
import PageNavigation from "../../components/page-navigation.jsx";
import imgQrCode from "../../assets/img_qr_code.png";
import {CheckCircleFill} from 'antd-mobile-icons'

function ImportantInfoNotice() {
    return (
        <div className={styles.rootContainer}>
            <PageNavigation title={'重要信息通知方式'} />
            <div className={styles.infoWrapper}>
                <span>为将充值、扣款、案件公示等重要信息及时通知到您，请及 时维护您的联系方式。</span>
            </div>
            <div className={styles.qrCodeWrapper}>
                <span className={styles.title}>关注律携联盟公众号</span>
                <div className={styles.qrCodeContainer}>
                    <img src={imgQrCode} className={styles.qrCode} alt="" />
                    <span className={styles.qrDescription}>长按图片【识别二维码】，关注公众号</span>
                </div>
            </div>
            <div className={styles.verifyPhoneNoWrapper}>
                <span className={styles.title}>验证手机号码</span>
                <div className={styles.phoneNoContainer}>
                    <CheckCircleFill fontSize={24} color={'#09BB07'} />
                    <span style={{marginLeft: '10px'}}>已验证 {`150*****670`}</span>
                </div>
            </div>
        </div>
    )
}

export default ImportantInfoNotice