import { useEffect, useState } from "react";
import ToggleButton from "../../components/toggleBtn";
import { CCTV } from "../../../../interface/interface";
import { updateDevices } from "../../../../services/api";

interface Props {
    device: CCTV;
    onCctvUpdate: () => void;
}

// const Textarea = () => {
//     const [inputCount, setInputCount] = useState(0);
//     const onTextareaHandler = (e: any) => {
//         setInputCount(
//             e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2")
//                 .length
//         );
//     };

//     return (
//         <div className="flex flex-col mb-10">
//             <textarea
//                 onChange={onTextareaHandler}
//                 className="w-full h-64 border border-gray p-3"
//                 maxLength={1000}
//             ></textarea>
//             <span className="text-right">{inputCount} / 1000</span>
//         </div>
//     );
// };

export const SetCctv = ({ device, onCctvUpdate }: Props) => {
    const [ip, setIp] = useState(device.ip);
    const [name, setDeviceName] = useState(device.name);
    const [username, setUsername] = useState(device.username);
    const [password, setPassword] = useState(device.password);
    const [observe, setObserve] = useState(device.observe);

    useEffect(() => {
        setIp(device.ip);
        setDeviceName(device.name);
        setUsername(device.username);
        setPassword(device.password);
        setObserve(device.observe);
    }, [device]);

    const handleSave = async () => {
        const updateDevice = {
            id: device.id,
            name,
            observe,
            ip,
            username,
            password,
        };
        await updateDevices("CCTV", updateDevice, device.id);
        onCctvUpdate();
    };

    return (
        <>
            <div className="flex flex-row justify-between mb-10">
                <span className="font-semibold">인원수 측정</span>
                <ToggleButton flag={observe} setFlag={setObserve} />
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

            <div>
                <button
                    onClick={handleSave}
                    className="w-56 float-right text-center border border-black p-3"
                >
                    저장
                </button>
            </div>
        </>
    );
};
