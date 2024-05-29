export const AddAircon = () => {
    return (
        <>
            <div className="flex flex-row justify-between mb-10">
                <span className="font-semibold">에어컨 추가</span>
                <span className="text-skyblue underline">설명서 보기</span>
            </div>
            <div className="flex flex-col mb-10">
                <span className="block mb-3">
                    <b>에어컨 선택</b>
                </span>
                <div className="border border-gray w-full h-64"></div>
            </div>
            <div className="flex flex-row justify-between">
                <button className="w-72 text-center border border-black p-3">
                    취소
                </button>
                <button className="w-72 text-center border border-black p-3">
                    저장
                </button>
            </div>
        </>
    );
};
