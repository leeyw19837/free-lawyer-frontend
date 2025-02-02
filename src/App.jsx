import {Navigate, Route, Routes, useLocation} from "react-router";
import Home from "./pages/home/index.jsx";
import Login from "./pages/login/index.jsx";
import BottomNavigation from "./BottomNavigation.jsx";
import ShowUp from "./pages/showup/index.jsx";
import About from "./pages/about/index.jsx";
import AboutGiftPage from "./pages/about/gift.jsx";
import AboutCertificatePage from "./pages/about/certificate.jsx";
import AboutServicePage from "./pages/about/service.jsx";
import AboutRewardsPage from "./pages/about/rewards.jsx";
import AboutNewsPage from "./pages/about/news.jsx";
import AboutNoticePage from "./pages/about/notice.jsx";
import AboutOnlineServicePage from "./pages/about/online-service.jsx";
import ImportantInfoNotice from "./pages/settings/info-notice.jsx";
import AccountInfo from "./pages/settings/account-info.jsx";
import ChangePwd from "./pages/settings/change-pwd.jsx";
import FillInfoPage from "./pages/login/fill-info.jsx";
import MyPlan from "./pages/standalone/plan/my-plan.jsx";
import PlanDetail from "./pages/standalone/plan/plan-detail.jsx";
import ShowupDetail from "./pages/showup/showup-detail.jsx";
import ApplicationPage from "./pages/standalone/application/application.jsx";
import ApplicationForWho from "./pages/standalone/application/application-for-who.jsx";
import FillInInfo from "./pages/standalone/application/fill-in-info.jsx";
import JoinForRelatives from "./pages/standalone/join-for-relatives/index.jsx";
import BillDetail from "./pages/standalone/plan/bill-detail.jsx";
import HistoryDonation from "./pages/standalone/plan/history-donation.jsx";
import ManageChange from "./pages/standalone/plan/manage-change.jsx";
import PlanTransfer from "./pages/standalone/plan/plan-transfer.jsx";
import ViewCasesPage from "./pages/home/view-cases.jsx";
import CaseCityPage from "./pages/home/case-city.jsx";

export default function App() {
    return (
        <Routes>
            <Route path='/' exact element={<Navigate to={'/home'}/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/fill-info' element={<FillInfoPage/>}/>

            <Route element={<BottomNavigation/>}>
                {/*主页相关页面*/}
                <Route path="/home" element={
                    <RequireAuth>
                        <Home/>
                    </RequireAuth>
                }/>

                {/*公示相关页面*/}
                <Route path="showup">
                    <Route index element={
                        <RequireAuth>
                            <ShowUp/>
                        </RequireAuth>
                    }/>
                </Route>

                {/*我的相关页面*/}
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

            {/*设置*/}
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

            {/*加入凭证-计划*/}
            <Route path="my-plan">
                {/*加入凭证-计划-首页*/}
                <Route index element={
                    <RequireAuth>
                        <MyPlan/>
                    </RequireAuth>
                }/>
                {/*计划-详情*/}
                <Route path="plan-detail/:id" element={
                    <RequireAuth>
                        <PlanDetail/>
                    </RequireAuth>
                }/>
                {/*计划-详情-往期捐助*/}
                <Route path="history-donation/:id" element={
                    <RequireAuth>
                        <HistoryDonation/>
                    </RequireAuth>
                }/>
                {/*计划-详情-账单明细*/}
                <Route path="bill-detail/:id" element={
                    <RequireAuth>
                        <BillDetail/>
                    </RequireAuth>
                }/>
                {/*计划-详情-设置更改-管理变更*/}
                <Route path="manage-change/:id" element={
                    <RequireAuth>
                        <ManageChange/>
                    </RequireAuth>
                }/>
                {/*计划-详情-设置更改-管理变更-互助计划转让*/}
                <Route path="plan-transfer/:id" element={
                    <RequireAuth>
                        <PlanTransfer/>
                    </RequireAuth>
                }/>
            </Route>

            {/*公示-详情*/}
            <Route path="/showup-detail/:id" element={
                <RequireAuth>
                    <ShowupDetail/>
                </RequireAuth>
            }/>

            {/*报案*/}
            <Route path="report-suitcase">
                {/*报案-首页*/}
                <Route index element={
                    <RequireAuth>
                        <ApplicationPage/>
                    </RequireAuth>
                }/>
                {/*报案-为谁申请*/}
                <Route path="apply-for-who" element={
                    <RequireAuth>
                        <ApplicationForWho/>
                    </RequireAuth>
                }/>
                {/*报案-填写信息*/}
                <Route path="fill-in-info/:id" element={
                    <RequireAuth>
                        <FillInInfo/>
                    </RequireAuth>
                }/>
            </Route>

            {/*为亲友加入*/}
            <Route path="relatives">
                {/*为亲友加入-首页*/}
                <Route index element={
                    <RequireAuth>
                        <JoinForRelatives/>
                    </RequireAuth>
                }/>
            </Route>

            {/*首页-互助案例公示-点击查看*/}
            <Route path='view-cases'>
                <Route index element={
                    <RequireAuth>
                        <ViewCasesPage />
                    </RequireAuth>
                }/>
                <Route path={'case-city/:provinceIndex'} element={
                    <RequireAuth>
                        <CaseCityPage />
                    </RequireAuth>
                }/>
            </Route>
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