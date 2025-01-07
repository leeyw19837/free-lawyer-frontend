import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
// import App from './pages/home/App.jsx'
import Home from './pages/home/index.jsx'
import About from './pages/about/index.jsx'
import Login from "./pages/login/index.jsx";
import BottomNavigation from "./BottomNavigation.jsx";
import ShowUp from "./pages/showup/index.jsx";
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

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>

                    <Route element={<BottomNavigation/>}>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/showup" element={<ShowUp/>}/>
                        <Route path="about">
                            <Route index element={<About/>}/>
                            <Route path="gift" element={<AboutGiftPage/>}/>
                            <Route path="relative" element={<AboutRelativePage/>}/>
                            <Route path="certificate" element={<AboutCertificatePage/>}/>
                            <Route path="service" element={<AboutServicePage/>}/>

                            <Route path="rewards" element={<AboutRewardsPage/>}/>
                            <Route path="news" element={<AboutNewsPage/>}/>
                            <Route path="notice" element={<AboutNoticePage/>}/>
                            <Route path="online-service" element={<AboutOnlineServicePage/>}/>
                        </Route>
                    </Route>

                    <Route path="settings">
                        <Route path="info-notice" element={<ImportantInfoNotice />}/>
                        <Route path="account-info" element={<AccountInfo />}/>
                        <Route path="change-pwd" element={<ChangePwd />}/>
                    </Route>
                </Routes>
                {/*<BottomNavigation></BottomNavigation>*/}
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)
