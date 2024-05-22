import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.svg";

export const LogInPage = () => {
    const navigator = useNavigate();
    const movePage = () => {
        navigator("/signup");
    };
    return (
        <div>
            <section className="w-2/5 h-90 min-h-700 p-14 flex flex-col justify-between">
                <div className="flex flex-row gap-2">
                    <img src={icon} />
                    <span>매점의 눈</span>
                </div>
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
                    <button className="h-10 bg-btn text-2xl text-white">
                        →
                    </button>
                </form>
                <div>
                    <span>계정이 없으신가요? </span>
                    <span className="text-skyblue underline" onClick={movePage}>
                        회원가입
                    </span>
                </div>
            </section>
        </div>
    );
};
