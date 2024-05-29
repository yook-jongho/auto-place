import ToggleButton from "../../components/toggleBtn";
interface AutoAircon {
    flag: boolean;
}

export const SetAircon = ({ flag }: AutoAircon) => {
    return (
        <>
            <span className="block mb-10">
                <b>자동화 설정</b>
            </span>
            <div className="flex flex-row justify-between mb-10">
                <span className="font-semibold">에어컨 자동제어</span>
                <ToggleButton flag={flag} />
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
            </div>
            <button className="w-56 float-right text-center border border-black p-3">
                저장
            </button>
        </>
    );
};
