import {Navigate, Route, Routes, useLocation} from "react-router";
import Home from "./pages/home/index.jsx";
import Login from "./pages/login/index.jsx";
import BottomNavigation from "./BottomNavigation.jsx";
import ShowUp from "./pages/showup/index.jsx";
import About from "./pages/about/index.jsx";
import AboutGiftPage from "./pages/about/gift.jsx";
import AboutRelativePage from "./pages/about/relative.jsx";
import AboutCertificatePage from "./pages/about/certificate.jsx";
import AboutServicePage from "./pages/about/service.jsx";
import AboutRewardsPage from "./pages/about/rewards.jsx";
import AboutNewsPage from "./pages/about/news.jsx";
import AboutNoticePage from "./pages/about/notice.jsx";
import AboutOnlineServicePage from "./pages/about/online-service.jsx";
import ImportantInfoNotice from "./pages/settings/info-notice.jsx";
import AccountInfo from "./pages/settings/account-info.jsx";
import ChangePwd from "./pages/settings/change-pwd.jsx";
import {useSelector} from "react-redux";
import FillInfoPage from "./pages/login/fill-info.jsx";
import MyPlan from "./pages/standalone/my-plan.jsx";
import PlanDetail from "./pages/standalone/plan-detail.jsx";

export default function App() {
    return (
        <Routes>
            <Route path='/' exact element={<Navigate to={'/home'}/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/fill-info' element={<FillInfoPage/>}/>

            <Route element={<BottomNavigation/>}>
                <Route path="/home" element={
                    <RequireAuth>
                        <Home/>
                    </RequireAuth>
                }/>
                <Route path="/showup" element={
                    <RequireAuth>
                        <ShowUp/>
                    </RequireAuth>
                }/>
                <Route path="about">
                    <Route index element={
                        <RequireAuth>
                            <About/>
                        </RequireAuth>
                    }/>
                    <Route path="gift" element={
                        <RequireAuth>
                            <AboutGiftPage/>
                        </RequireAuth>
                    }/>
                    <Route path="relative" element={
                        <RequireAuth>
                            <AboutRelativePage/>
                        </RequireAuth>
                    }/>
                    <Route path="certificate" element={
                        <RequireAuth>
                            <AboutCertificatePage/>
                        </RequireAuth>
                    }/>
                    <Route path="service" element={
                        <RequireAuth>
                            <AboutServicePage/>
                        </RequireAuth>
                    }/>

                    <Route path="rewards" element={
                        <RequireAuth>
                            <AboutRewardsPage/>
                        </RequireAuth>
                    }/>
                    <Route path="news" element={
                        <RequireAuth>
                            <AboutNewsPage/>
                        </RequireAuth>
                    }/>
                    <Route path="notice" element={
                        <RequireAuth>
                            <AboutNoticePage/>
                        </RequireAuth>
                    }/>
                    <Route path="online-service" element={
                        <RequireAuth>
                            <AboutOnlineServicePage/>
                        </RequireAuth>
                    }/>
                </Route>
            </Route>

            <Route path="settings">
                <Route path="info-notice" element={
                    <RequireAuth>
                        <ImportantInfoNotice/>
                    </RequireAuth>
                }/>
                <Route path="account-info" element={
                    <RequireAuth>
                        <AccountInfo/>
                    </RequireAuth>
                }/>
                <Route path="change-pwd" element={
                    <RequireAuth>
                        <ChangePwd/>
                    </RequireAuth>
                }/>
            </Route>

            <Route path="/join-certification" element={
                <RequireAuth>
                    <MyPlan/>
                </RequireAuth>
            }/>
            <Route path="/plan-detail/:id" element={
                <RequireAuth>
                    <PlanDetail/>
                </RequireAuth>
            }/>

        </Routes>
    )
}

function RequireAuth(props) {
    let location = useLocation();
    // const token = useSelector(state => state.login.loginData?.token);
    const token = localStorage.getItem("token");
    // console.log(token);
    if (!token) {
        return <Navigate to="/login" state={{from: location}} replace={true}/>
    }
    // eslint-disable-next-line react/prop-types
    return props?.children;
}