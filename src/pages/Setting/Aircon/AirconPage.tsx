import { useState } from "react";
import { Header } from "../components/header";
import { SideLayout } from "../components/SideLayout";
import { AddAircon } from "./components/addAircon";
import { SetAircon } from "./components/setAircon";

interface Devices {
    id: string;
    name: string;
    auto: boolean;
}

interface Action {
    add: boolean;
    setting: boolean;
}

const example = [
    {
        id: "sd8565asd98789",
        name: "거실 cctv",
        auto: true,
    },
    {
        id: "sd8565asd98799",
        name: "거실 cctv",
        auto: false,
    },
];

const AirconList2 = ({ setCrntDevice }: any) => {
    const renderList = example.map((item, idx) => (
        <tr key={item.id} onClick={() => setCrntDevice(item.auto)}>
            <td>{idx + 1}</td>
            <td>{item.name}</td>
            <td>{item.id}</td>
        </tr>
    ));

    return <>{renderList}</>;
};

export const AirconPage = () => {
    const [crntDevice, setCrntDevice] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [crntAct, setCrntAct] = useState<Action>({
        add: true,
        setting: false,
    });

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
                            <AirconList2 setCrntDevice={setCrntDevice} />
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
                        <AddAircon />
                    ) : (
                        <SetAircon flag={crntDevice} />
                    )}
                </SideLayout>
            </div>
        </div>
    );
};
