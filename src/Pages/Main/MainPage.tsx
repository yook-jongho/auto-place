/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from "react-router-dom";
import { Header } from "../Setting/components/header";
import gear from "../../assets/gear.png";
import cctv from "../../assets/cctv.png";
import aircon from "../../assets/aircon.png";
import doorlock from "../../assets/doorlock.png";
import { useEffect } from "react";

export const MainPage = () => {
    const navigator = useNavigate();
    const movePage = (device: String) => {
        navigator(`/${device}`);
    };

    useEffect(() => {
        const checkAndCreateJsonFile = async () => {
            try {
                const response = await window.electron.checkAndCreateJson();
                console.log(response);
            } catch (error) {
                console.error("Failed to check/create JSON file:", error);
            }
        };

        checkAndCreateJsonFile();
    }, []);

    return (
        <div className="flex flex-col gap-20 m-auto p-20 content-center items-center justify-center">
            <Header name="시작하기" />
            {/* <span className="text-2xl font-semibold">시작하기</span> */}
            <div className="w-480 grid grid-cols-2 m-auto mt-28 gap-52">
                <div
                    className="flex flex-col items-center"
                    onClick={() => movePage("general")}
                >
                    <img className="w-20 h-20 mb-16" src={gear} />
                    <span>일반</span>
                </div>
                <div
                    className="flex flex-col items-center"
                    onClick={() => movePage("cctv")}
                >
                    <img className="w-20 h-20 mb-16" src={cctv} />
                    <span>CCTV</span>
                </div>
                <div
                    className="flex flex-col items-center"
                    onClick={() => movePage("doorlock")}
                >
                    <img className="w-20 h-20 mb-16" src={doorlock} />
                    <span>도어락</span>
                </div>
                <div
                    className="flex flex-col items-center"
                    onClick={() => movePage("aircon")}
                >
                    <img className="w-20 h-20 mb-16" src={aircon} />
                    <span>에어컨</span>
                </div>
            </div>
        </div>
    );
};
