import gear from "../../assets/gear.png";
import cctv from "../../assets/cctv.png";
import aircon from "../../assets/aircon.png";
import doorlock from "../../assets/doorlock.png";

export const MainPage = () => {
    return (
        <div className="w-480 m-auto mt-24 h-100 text-center m-auto">
            <span className="text-2xl font-semibold">시작하기</span>
            <div className="grid grid-cols-2 mt-28 gap-52">
                <div className="flex flex-col items-center">
                    <img className="w-20 h-20" src={gear} />
                    <span>일반</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-20 h-20" src={cctv} />
                    <span>CCTV</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-20 h-20" src={doorlock} />
                    <span>도어락</span>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-20 h-20" src={aircon} />
                    <span>에어컨</span>
                </div>
            </div>
        </div>
    );
};
