import styles from './account-info.module.scss';
import PageNavigation from "../../components/page-navigation.jsx";
import {Toast} from "antd-mobile";

function AccountInfo() {
    const handleSave = () => {
        Toast.show('保存成功！')
    }
    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={'账户信息'}
                extraButton={<span style={{fontSize: '1.2rem', color:'#0C63FF'}}>保存</span>}
                onExtraButtonClicked={handleSave}
            />
            <div className={styles.titleWrapper}>
                <span>个人信息</span>
            </div>
            <div className={styles.contentWrapper}>
                <span>账户名称</span>
                <span>{`九月的太阳`}</span>
            </div>
            <div className={styles.contentWrapper}>
                <span>手机号码</span>
                <span>{`150*****650`}</span>
            </div>
            <div className={styles.titleWrapper}>
                <span>账户信息</span>
            </div>
            <div className={styles.contentWrapper}>
                <span>账户ID</span>
                <span>{`1963631`}</span>
            </div>
            <div className={styles.contentWrapper}>
                <span>注册时间</span>
                <span>{`2025-01-01 20:00:00`}</span>
            </div>
            <div className={styles.contentWrapper}>
                <span>最后登录时间</span>
                <span>{`2025-01-01 20:00:00`}</span>
            </div>
        </div>
    )
}

export default AccountInfo