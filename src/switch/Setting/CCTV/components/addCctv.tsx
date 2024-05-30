import React, { useState } from "react";
import { addDevices } from "../../../../services/api";
interface Props {
    onCctvUpdate: () => void;
}

export const AddCctv: React.FC<Props> = ({ onCctvUpdate }) => {
    // todo: 이름 입력 처리
    const [ip, setIp] = useState("");
    const [name, setDeviceName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // todo: 데이터 통신 처리 부분 service로 분리
    const handleSave = async () => {
        const newDevice = {
            id: "",
            name,
            observe: false,
            ip,
            username,
            password,
        };
        await addDevices(newDevice);
        onCctvUpdate();
    };

    return (
        <>
            <div className="flex flex-row justify-between mb-10">
                <span className="font-semibold">CCTV 추가</span>
                <span className="text-skyblue underline">설명서 보기</span>
            </div>
            <div className="flex flex-row justify-between mb-10">
                <span>IP</span>
                <input
                    type="text"
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                    className="border border-gray w-36 h-10 text-center p-3"
                />
            </div>
            <div className="flex flex-row justify-between mb-10">
                <span>CCTV 이름</span>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setDeviceName(e.target.value)}
                    className="border border-gray w-36 h-10 text-center p-3"
                />
            </div>
            <div className="flex flex-row justify-between mb-10">
                <span>Username</span>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray w-36 h-10 text-center p-3"
                />
            </div>
            <div className="flex flex-row justify-between mb-10">
                <span>Password</span>
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray w-36 h-10 text-center p-3"
                />
            </div>
            <div className="flex flex-row justify-around">
                <button className="w-64 text-center border border-black p-3">
                    취소
                </button>
                <button
                    className="w-64 text-center border border-black p-3"
                    onClick={handleSave}
                >
                    저장
                </button>
            </div>
        </>
    );
};
