import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { SideLayout } from "../components/SideLayout";
import { AddCctv } from "./components/addCctv";
import { SetCctv } from "./components/setCctv";
import { CCTV } from "../../../interface/interface";

interface Action {
    add: boolean;
    setting: boolean;
}

interface CctvProps {
    devices: CCTV[];
    crntDevice: (observe: boolean) => void;
}

const CctvList = ({ devices, crntDevice }: CctvProps) => {
    const renderList = devices.map((item, idx) => (
        <tr key={idx} onClick={() => crntDevice(item.observe)}>
            <td>{idx + 1}</td>
            <td>{item.name}</td>
            <td>{item.id}</td>
        </tr>
    ));

    return <>{renderList}</>;
};

//todo 삭제 기능 추가 필요
export const CctvPage = () => {
    const [cctvList, setCctvList] = useState<CCTV[]>([]);
    const [crntDevice, setCrntDevice] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [crntAct, setCrntAct] = useState<Action>({
        add: true,
        setting: false,
    });

    //todo: 비동기 처리 로직 service로 분리
    const loadDevices = async () => {
        try {
            const response = await window.electron.loadDevices("CCTV");
            setCctvList(response.data.device);
        } catch (error) {
            console.error("Failed to check/create JSON file:", error);
        }
    };
    useEffect(() => {
        loadDevices();
    }, []);

    const tableClick = () => {
        if (!isVisible) setIsVisible(true);
        setCrntAct({ add: false, setting: true });
    };

    const btnClick = () => {
        if (!isVisible) setIsVisible(true);
        setCrntAct({ add: true, setting: false });
    };

    return (
        <div className="flex flex-col gap-20 m-auto p-20 content-center items-center justify-center">
            <Header name="CCTV 설정" />
            <div className="flex flex-row gap-28 h-700 m-auto">
                <section className="w-400">
                    <table className="w-full mb-6">
                        <thead>
                            <tr className="font-semibold">
                                <td className="pr-10">순서</td>
                                <td className="pr-32">이름</td>
                                <td>디바이스 ID</td>
                            </tr>
                        </thead>
                        {/* <tbody onClick={tableClick}>{AirconList}</tbody> */}
                        <tbody onClick={tableClick}>
                            <CctvList
                                devices={cctvList}
                                crntDevice={setCrntDevice}
                            />
                        </tbody>
                    </table>
                    <button
                        onClick={btnClick}
                        className="w-full text-center border border-black p-3"
                    >
                        CCTV 추가
                    </button>
                </section>
                <SideLayout isVisible={isVisible}>
                    {crntAct.add === true ? (
                        <AddCctv onCctvUpdate={loadDevices} />
                    ) : (
                        <SetCctv observe={crntDevice} />
                    )}
                </SideLayout>
            </div>
        </div>
    );
};
