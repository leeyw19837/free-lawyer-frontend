import styles from './change-pwd.module.scss';
import PageNavigation from "../../components/page-navigation.jsx";
import {Button, Input, Toast} from "antd-mobile";
import {useMemo, useState} from "react";

function ChangePwd() {
    const [oriPwd, setOriPwd] = useState("");
    const [newPwd, setNewPwd] = useState("");
    const [confirmedNewPwd, setConfirmedNewPwd] = useState("");

    const isConsisted = useMemo(()=>{
        return newPwd === confirmedNewPwd
    }, [newPwd, confirmedNewPwd])

    const handleSave = () => {
        if (!oriPwd || !newPwd || !confirmedNewPwd) {
            Toast.show('请填写密码！')
            return;
        }

        if (!isConsisted) {
            Toast.show('两次密码输入不一致！')
            return;
        }

        Toast.show('密码修改成功！')
    }
    return (
        <div className={styles.rootContainer}>
            <PageNavigation
                title={'修改密码'}
            />
            <div className={styles.contentWrapper} style={{marginTop: '1rem'}}>
                <Input
                    className={styles.inputWrapper}
                    style={{'--font-size': '1.4rem', '--text-align': 'left'}}
                    placeholder={'请输入原密码'}
                    value={oriPwd}
                    onChange={setOriPwd}
                />
            </div>
            <div className={styles.contentWrapper}>
                <Input
                    className={styles.inputWrapper}
                    style={{'--font-size': '1.4rem', '--text-align': 'left'}}
                    placeholder={'请输入新密码'}
                    value={newPwd}
                    onChange={setNewPwd}
                />
            </div>
            <div className={styles.contentWrapper}>
                <Input
                    className={styles.inputWrapper}
                    style={{'--font-size': '1.4rem', '--text-align': 'left'}}
                    placeholder={'请确认新密码'}
                    value={confirmedNewPwd}
                    onChange={setConfirmedNewPwd}
                />
            </div>

            <div className={styles.buttonWrapper}>
                <Button
                    style={{width: '100%'}}
                    color={'danger'}
                    onClick={handleSave}
                >设置新密码</Button>
            </div>
        </div>
    )
}

export default ChangePwd