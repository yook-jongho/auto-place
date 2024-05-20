import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import { LogInPage } from "./pages/LogIn/LogInPage";

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LogInPage />} />
            </Routes>
        </HashRouter>
    );
};

function App() {
    return <Router></Router>;
}

export default App;
