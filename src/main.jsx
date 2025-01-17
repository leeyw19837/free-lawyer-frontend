import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter} from "react-router";
import './index.css'
import App from "./App.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter basename={'/freelawyer'}>
                <App />
                {/*<BottomNavigation></BottomNavigation>*/}
            </BrowserRouter>
        </Provider>
    </StrictMode>,
)


