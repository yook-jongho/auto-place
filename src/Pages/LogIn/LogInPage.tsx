export const LogInPage = () => {
    return (
        <div>
            <section className="w-2/5 h-90 min-h-700 p-14 flex flex-col justify-between">
                <span>매점의 눈</span>
                <form className=" w-340 flex flex-col gap-3">
                    <span className="mb-6 text-3xl font-semibold">로그인</span>
                    <input
                        type="email"
                        placeholder="아이디를 입력하세요."
                        className="py-2 pl-4 text-sm border border-solid border-black"
                    />
                    <input
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        className="py-2 pl-4 text-sm border border-solid border-black"
                    />
                    <button className="h-10 bg-btn text-white"> → </button>
                </form>
                <div>
                    <span>계정이 없으신가요? </span>
                    <span className="text-skyblue underline">회원가입</span>
                </div>
            </section>
        </div>
    );
};
