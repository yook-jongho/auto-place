import { useState } from "react";
import ToggleButton from "../../components/toggleBtn";
import { Aircon } from "../../../../interface/interface";

interface Props {
    device: Aircon;
    // onAirconUpdate: () => void;
}

const Dropdown = () => {
    const [visible, setVisible] = useState(false);
    const [option, setOption] = useState("옵션 선택");
    const handleClick = () => {
        setVisible(!visible);
    };
    const selectOption = (value: string) => {
        setOption(value);
        setVisible(!visible);
    };
    return (
        <div className="flex flex-col h-10 overflow-visible">
            <div
                onClick={handleClick}
                className="border border-gray w-36 h-10 content-center text-center p-3 mr-2"
            >
                <span>{option}</span>
            </div>
            <div
                className={`flex flex-col gap-1 w-36 mt-1 text-center border border-gray ${
                    visible ? "block" : "hidden"
                }`}
            >
                <span
                    onClick={() => selectOption("높을")}
                    className="p-1 hover:bg-[#f4f4f4]"
                >
                    높을
                </span>
                <span
                    onClick={() => selectOption("낮을")}
                    className="p-1 hover:bg-[#f4f4f4]"
                >
                    낮을
                </span>
            </div>
        </div>
    );
};

export const SetAircon = ({ device }: Props) => {
    const [isAuto, setisAuto] = useState(device.auto);
    const [name, setName] = useState(device.name);

    return (
        <>
            <span className="block mb-10">
                <b>자동화 설정</b>
            </span>
            <div className="flex flex-row justify-between mb-10">
                <span className="font-semibold">에어컨 자동제어</span>
                <ToggleButton flag={isAuto} setFlag={setisAuto} />
            </div>
            <div className="flex flex-row justify-between mb-10">
                <span>에어컨 이름</span>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray w-36 h-10 text-center p-3"
                />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between mb-10 items-center">
                    <span>예약시작</span>
                    <div>
                        <input
                            type="number"
                            className="border border-gray w-36 h-10 text-center p-3 mr-2"
                        />
                        <span>분 전 자동으로 켜기</span>
                    </div>
                </div>
                <div className="flex flex-row justify-between mb-10 items-center">
                    <span>예약시작</span>
                    <div>
                        <input
                            type="number"
                            className="border border-gray w-36 h-10 text-center p-3 mr-2"
                        />
                        <span>분 후 자동으로 끄기</span>
                    </div>
                </div>
                <div className="flex flex-row justify-between mb-10 items-center">
                    <span>온도</span>
                    <div className="flex flex-row gap-3 items-center">
                        <input
                            type="number"
                            className="border border-gray w-36 h-10 text-center p-3 mr-2"
                        />
                        <span>보다</span>
                        <Dropdown />
                        <span>때</span>
                    </div>
                </div>
            </div>
            <button className="w-56 float-right text-center border border-black mt-12 p-3">
                저장
            </button>
        </>
    );
};
