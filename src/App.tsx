import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { LogInPage } from "./Pages/LogIn/LogInPage";

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
    return <LogInPage />;
}

export default App;
