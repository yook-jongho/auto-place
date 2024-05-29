import { Header } from "../components/header";

export const GeneralPage = () => {
    return (
        <div className="flex flex-col gap-20 m-auto p-20 content-center items-center justify-center">
            <Header name="일반 설정" />
            <div className="w-600 m-auto flex flex-col">
                <span className="font-semibold">일반</span>
                <div className="mt-10 flex items-center justify-between">
                    <label htmlFor="name" className="mr-2">
                        이름
                    </label>
                    <input
                        className="w-5/6 py-2 pl-4 text-sm border border-solid border-gray float-right"
                        type="text"
                        id="name"
                    />
                </div>
                <div className="mt-3 flex items-center justify-between">
                    <label htmlFor="address" className="mr-2">
                        주소
                    </label>
                    <input
                        className="w-5/6 py-2 pl-4 text-sm border border-solid border-gray"
                        type="text"
                        id="address"
                    />
                </div>
                <span className="font-semibold mt-10">HA 서버설정</span>
                <div className="mt-10 flex items-center justify-between">
                    <label htmlFor="name" className="mr-2">
                        도메인
                    </label>
                    <input
                        className="w-5/6 py-2 pl-4 text-sm border border-solid border-gray float-right"
                        type="text"
                        id="name"
                    />
                </div>
                <div className="mt-3 flex items-center justify-between">
                    <label htmlFor="address" className="mr-2">
                        토큰
                    </label>
                    <input
                        className="w-5/6 py-2 pl-4 text-sm border border-solid border-gray"
                        type="text"
                        id="address"
                    />
                </div>
                <span className="font-semibold mt-10">예약연동</span>
                <div className="mt-10 flex items-center justify-between">
                    <label htmlFor="name" className="mr-2">
                        이름
                    </label>
                    <input
                        className="w-5/6 py-2 pl-4 text-sm border border-solid border-gray float-right"
                        type="text"
                        id="name"
                    />
                </div>
                <div className="mt-3 flex items-center justify-between">
                    <label htmlFor="address" className="mr-2">
                        토큰
                    </label>
                    <input
                        className="w-5/6 py-2 pl-4 text-sm border border-solid border-gray"
                        type="text"
                        id="address"
                    />
                </div>
                <div className="flex flex-row justify-around mt-20">
                    <button className="w-64 text-center border border-black p-3">
                        취소
                    </button>
                    <button className="w-64 text-center border border-black p-3">
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
};
