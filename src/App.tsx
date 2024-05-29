import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LogInPage } from "./pages/LogIn/LogInPage";
import { SignUpPage } from "./pages/SignUp/SignUpPage";
import { MainPage } from "./pages/Main/MainPage";
import { CctvPage } from "./pages/Setting/CCTV/CctvPage";
import { GeneralPage } from "./pages/Setting/General/GeneralPage";
import { AirconPage } from "./pages/Setting/Aircon/AirconPage";
import { DoorlockPage } from "./pages/Setting/Doorlock/DoorlockPage";
import { createHashHistory } from "history";

const hashHistory = createHashHistory();

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LogInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/general" element={<GeneralPage />} />
                <Route path="/cctv" element={<CctvPage />} />
                <Route path="/doorlock" element={<DoorlockPage />} />
                <Route path="/aircon" element={<AirconPage />} />
            </Routes>
        </HashRouter>
    );
};

function App() {
    return <Router></Router>;
}

export default App;
