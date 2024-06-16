import { useEffect, useState } from "react";
import { Aircon } from "../../../interface/interface";
import { Header } from "../components/header";
import { SideLayout } from "../components/SideLayout";
import { AddAircon } from "./components/addAircon";
import { SetAircon } from "./components/setAircon";
import { loadDevices } from "../../../services/api";

interface Action {
    add: boolean;
    setting: boolean;
}

interface Props {
    devices: Aircon[];
    crntDevice: (crntAircon: Aircon) => void;
}

const AirconList = ({ devices, crntDevice }: Props) => {
    const renderList = devices.map((item, idx) => (
        <tr key={item.id} onClick={() => crntDevice(item)}>
            <td>{idx + 1}</td>
            <td>{item.name}</td>
            <td>{item.id}</td>
        </tr>
    ));

    return <>{renderList}</>;
};

export const AirconPage = () => {
    const [airconList, setAirconList] = useState<Aircon[]>([]);
    const [crntDevice, setCrntDevice] = useState<Aircon>({
        auto: false,
        id: "",
        name: "",
        automation: false,
        condition: {
            temperature: 0,
            compare: "lower",
        },
        active: {
            before: 0,
            after: 0,
        },
    });
    const [isVisible, setIsVisible] = useState(false);
    const [crntAct, setCrntAct] = useState<Action>({
        add: true,
        setting: false,
    });

    const fetchDevices = async () => {
        const list = await loadDevices("airConditioner");
        setAirconList(list);
    };

    useEffect(() => {
        fetchDevices();
    }, [airconList]);

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
            <Header name="에어컨 설정" />
            <div className="flex flex-row gap-28 h-700 m-auto">
                <section className="w-[520px]">
                    <table className="w-full mb-6">
                        <thead>
                            <tr className="font-semibold">
                                <td className="pr-10 text-center">순서</td>
                                <td className="pr-32">이름</td>
                                <td className="pr-14">디바이스 ID</td>
                            </tr>
                        </thead>
                        <tbody onClick={tableClick}>
                            <AirconList
                                devices={airconList}
                                crntDevice={setCrntDevice}
                            />
                        </tbody>
                    </table>
                    <button
                        onClick={btnClick}
                        className="w-full text-center border border-black p-3"
                    >
                        에어컨 추가
                    </button>
                </section>
                <SideLayout isVisible={isVisible}>
                    {crntAct.add === true ? (
                        <AddAircon onAirconUpdate={fetchDevices} />
                    ) : (
                        <SetAircon device={crntDevice} />
                    )}
                </SideLayout>
            </div>
        </div>
    );
};
