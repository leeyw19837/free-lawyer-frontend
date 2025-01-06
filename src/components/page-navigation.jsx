import styles from './page-navigation.module.scss';
import { LeftOutline } from 'antd-mobile-icons'
import {useNavigate} from "react-router";

function PageNavigation(props) {
    const navigate = useNavigate();
    const {title, extraButton, onExtraButtonClicked} = props || {};
    const navBack = () => {
        navigate(-1);
    }
    return (
        <div className={styles.navBar}>
            <LeftOutline className={styles.backButton} onClick={navBack}/>
            <span>{title || ''}</span>
            {
                extraButton && (
                    <div className={styles.extraButton} onClick={onExtraButtonClicked}>
                        {extraButton}
                    </div>
                )
            }
        </div>
    )
}

export default PageNavigation