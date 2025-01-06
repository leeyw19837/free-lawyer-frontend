import {NavLink, Outlet} from "react-router";
import styles from "./BottomNavigation.module.scss";
import icMainPage from './assets/ic_me.svg';
import icMainPageActive from './assets/ic_me_active.svg';

import icShowUp from './assets/ic_me.svg';
import icShowUpActive from './assets/ic_me_active.svg';

import icMe from './assets/ic_me.svg';
import icMeActive from './assets/ic_me_active.svg';

function BottomNavigation() {
    return (
        <div style={{height: '100vh', width: '100%'}}>
            <Outlet/>
            <nav className={styles.rootContainer}>
                <NavLink className={styles.itemContainer} to="/home">
                    {
                        ({isActive}) => (
                            <>
                                <img className={styles.imageWrapper} src={isActive ? icMainPageActive : icMainPage}
                                     alt="ic home"/>
                                <span style={{color: isActive ? '#FF2C21' : '#454545'}}>主页</span>
                            </>
                        )
                    }
                </NavLink>
                <NavLink className={styles.itemContainer} to="/showup">
                    {
                        ({isActive}) => (
                            <>
                                <img className={styles.imageWrapper} src={isActive ? icShowUpActive : icShowUp}
                                     alt="ic showup"/>
                                <span style={{color: isActive ? '#FF2C21' : '#454545'}}>事件公示</span>
                            </>
                        )
                    }
                </NavLink>
                <NavLink className={styles.itemContainer} to="/about">
                    {
                        ({isActive}) => (
                            <>
                                <img className={styles.imageWrapper} src={isActive ? icMeActive : icMe} alt="ic me"/>
                                <span style={{color: isActive ? '#FF2C21' : '#454545'}}>我的</span>
                            </>
                        )
                    }
                </NavLink>
            </nav>
        </div>
    )
}

export default BottomNavigation;