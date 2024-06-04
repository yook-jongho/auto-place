import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { SideLayout } from "../components/SideLayout";
import { AddCctv } from "./components/addCctv";
import { SetCctv } from "./components/setCctv";
import { CCTV } from "../../../interface/interface";
import { loadDevices } from "../../../services/api";

interface Action {
    add: boolean;
    setting: boolean;
}

interface CctvProps {
    devices: CCTV[];
    crntDevice: (crntCCTV: CCTV) => void;
}

const CctvList = ({ devices, crntDevice }: CctvProps) => {
    const renderList = devices.map((item, idx) => (
        <tr key={idx} onClick={() => crntDevice(item)}>
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
    const [crntDevice, setCrntDevice] = useState<CCTV>({
        id: "",
        observe: false,
        name: "",
        ip: "",
        username: "",
        password: "",
    });
    const [isVisible, setIsVisible] = useState(false);
    const [crntAct, setCrntAct] = useState<Action>({
        add: true,
        setting: false,
    });

    const fetchDevices = async () => {
        const devices = await loadDevices();
        setCctvList(devices || []);
    };
    useEffect(() => {
        fetchDevices();
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
                        <AddCctv onCctvUpdate={fetchDevices} />
                    ) : (
                        <SetCctv
                            onCctvUpdate={fetchDevices}
                            device={crntDevice}
                        />
                    )}
                </SideLayout>
            </div>
        </div>
    );
};
