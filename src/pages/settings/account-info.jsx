import styles from './account-info.module.scss';
import PageNavigation from "../../components/page-navigation.jsx";
import {Input, Toast} from "antd-mobile";
import {useState} from "react";

function AccountInfo() {
    const [userName, setUserName] = useState("");
    const handleSave = () => {
        if (!userName) {
            Toast.show('请填写账户名称后再保存！')
            return;
        }
        Toast.show('保存成功！')
    }
    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={'账户信息'}
                extraButton={<span style={{fontSize: '1.4rem', color: '#0C63FF'}}>保存</span>}
                onExtraButtonClicked={handleSave}
            />
            <div className={styles.titleWrapper}>
                <span>个人信息</span>
            </div>
            <div className={styles.contentWrapper}>
                <span>账户名称</span>
                <Input
                    className={styles.inputWrapper}
                    style={{'--font-size': '1.4rem', '--text-align': 'right'}}
                    placeholder={'请输入账户名称'}
                    value={userName}
                    onChange={setUserName}
                />
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