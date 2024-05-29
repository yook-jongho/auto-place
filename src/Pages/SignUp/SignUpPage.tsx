import { Header } from "../Setting/components/header";

export const SignUpPage = () => {
    return (
        <div className="flex flex-col m-auto p-20 content-center items-center justify-center">
            <Header name="환영합니다!" />
            <div className="w-600 m-auto flex flex-col gap-20 mt-10">
                <div className="items-center">
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
                </div>

                <div className="items-center">
                    <span className="font-semibold">HA 서버설정</span>
                    <div className="mt-10 flex items-center justify-between">
                        <label htmlFor="domain" className="mr-2">
                            도메인
                        </label>
                        <input
                            className="w-5/6 py-2 pl-4 text-sm border border-solid border-gray"
                            type="text"
                            id="domain"
                        />
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                        <label htmlFor="token" className="mr-2">
                            토큰
                        </label>
                        <input
                            className="w-5/6 py-2 pl-4 text-sm border border-solid border-gray"
                            type="text"
                            id="token"
                        />
                    </div>
                </div>

                <button className="h-10 border border-solid border-black">
                    시작하기
                </button>
            </div>
        </div>
    );
};
