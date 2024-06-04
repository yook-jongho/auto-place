import ToggleButton from "../../components/toggleBtn";

interface DoorLockSetting {
    flag: boolean;
}

export const SetDoorLock = ({ flag }: DoorLockSetting) => {
    return (
        <>
            <span className="block mb-10">
                <b>자동화 설정</b>
            </span>
            <div className="flex flex-row justify-between mb-10">
                <span className="font-semibold">
                    임시 비밀번호 설정 링크 보내기
                </span>
            </div>
            <div className="flex flex-row justify-between content-center">
                <span className="block pt-2">
                    <b>임시 비밀번호 유효기간</b>
                </span>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between mb-10 items-center">
                        <span>예약시작 전</span>
                        <div>
                            <input
                                type="number"
                                className="border border-gray w-36 h-10 text-center p-3 ml-2 mr-2"
                            />
                            <span>분</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mb-10 items-center">
                        <span>예약종료 후</span>
                        <div>
                            <input
                                type="number"
                                className="border border-gray w-36 h-10 text-center p-3 ml-2 mr-2"
                            />
                            <span>분</span>
                        </div>
                    </div>
                </div>
            </div>
            <button className="w-56 float-right text-center border border-black p-3">
                저장
            </button>
        </>
    );
};
