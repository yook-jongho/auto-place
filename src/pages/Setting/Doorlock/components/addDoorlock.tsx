const NextStep = () => {
    return (
        <>
            <div className="flex flex-row justify-between mb-10">
                <span className="font-semibold">도어락추가</span>
                <span className="text-skyblue underline">설명서 보기</span>
            </div>
            <div className="flex flex-col">
                <span>도어락 선택</span>
                <div className="border border-gray w-full h-64"></div>
            </div>
            <div className="flex flex-row justify-around">
                <button className="w-64 text-center border border-black p-3">
                    이전
                </button>
                <button className="w-64 text-center border border-black p-3">
                    저장
                </button>
            </div>
        </>
    );
};

export const AddDoorlock = () => {
    return (
        <>
            <div className="flex flex-row justify-between mb-10">
                <span className="font-semibold">도어락 추가</span>
                <span className="text-skyblue underline">설명서 보기</span>
            </div>
            <div className="flex flex-row justify-between mb-10">
                <span>제조사 선택</span>
                <input
                    type="text"
                    className="border border-gray w-400 h-10 text-center p-3"
                />
            </div>
            <div className="flex flex-row justify-between mb-10">
                <span>client ID</span>
                <input
                    type="text"
                    className="border border-gray w-400 h-10 text-center p-3"
                />
            </div>
            <div className="flex flex-row justify-between mb-10">
                <span>clientSecret</span>
                <input
                    type="text"
                    className="border border-gray w-400 h-10 text-center p-3"
                />
            </div>
            <div className="flex flex-row justify-around">
                <button className="w-64 text-center border border-black p-3">
                    취소
                </button>
                <button className="w-64 text-center border border-black p-3">
                    다음
                </button>
            </div>
        </>
    );
};
