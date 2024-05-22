import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LogInPage } from "./pages/LogIn/LogInPage";
import { SignUpPage } from "./pages/SignUp/SignUpPage";
import { MainPage } from "./pages/Main/MainPage";

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LogInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </HashRouter>
    );
};

function App() {
    return <Router></Router>;
}

export default App;
